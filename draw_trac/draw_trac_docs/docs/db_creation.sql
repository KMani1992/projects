
create database DRAWTrac;

use DRAWTrac;


CREATE TABLE `ticket_type`(
`ticket_type_id` int unsigned not null AUTO_INCREMENT,
 `ticket_type` varchar(45),
`active` varchar(1),PRIMARY KEY (`ticket_type_id`));

CREATE TABLE `milestone`(
`milestone_id` int unsigned not null AUTO_INCREMENT,
 `milestone_type` varchar(45),
`active` varchar(1),PRIMARY KEY (`milestone_id`));

CREATE TABLE `priority`(
`priority_id` int unsigned not null AUTO_INCREMENT,
 `priority_type` varchar(45),
`active` varchar(1),PRIMARY KEY (`priority_id`));

CREATE TABLE `component`(
`component_id` int unsigned not null AUTO_INCREMENT,
 `component_type` varchar(45),
`active` varchar(1),PRIMARY KEY (`component_id`));

CREATE TABLE `designation`(
`desig_id` int unsigned not null AUTO_INCREMENT,
 `designation_name` varchar(45),
`active` varchar(1),PRIMARY KEY (`desig_id`));

CREATE TABLE `user`(
`user_id` int unsigned not null AUTO_INCREMENT,
`user_name` varchar(55),
`password` varchar(55),
`old_password` varchar(55),
`tlid` int,
`stlid` int,
`manager` int,
`last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`active` varchar(1),
PRIMARY KEY (`user_id`)
);


CREATE TABLE `ticket`(
`ticket_id` int,
`summary` varchar(150),
`description` varchar(250),
`ticket_type` int,
`tag_name` varchar(100),
`owner` int,
`cc` varchar(100),
`milestone` int,
`priority` int,
`target_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`component` int,
`reporter` int,
PRIMARY KEY (`ticket_id`));

CREATE TABLE `ticket_comments`(
`ticket_id`	int,
`comment_id` int unsigned not null AUTO_INCREMENT,
`comment`	varchar(250),
`user_id`	int,
`last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

alter table `ticket` add `name` varchar(10);

CREATE TABLE `wsr_tag`(`tag_id` int,	
`tag_name`	varchar(50),
`active`	varchar(1),	
`tag_status`	varchar(50),	
`user_id`	int);

CREATE TABLE `wsr_plan`(
`id`	int	unsigned not null AUTO_INCREMENT,
`ticket_id`	int,
`from_date`	datetime,	
`to_date`	datetime,	
`task_type`	int,
`unplanned`	varchar(1),
`hours_planned`	int,	
`time_spent`	int,	
`total_time_spent`	int,	
`no_of_week_planned`	int,	
`week_flag`	varchar(1),	
`tl_approval`	varchar(1),		
`tl_comments`	varchar(250),	
`stl_approval`	varchar(1),	
`stl_comments`	varchar(250),	
`planned`	varchar(250),
`completed`	varchar(250),
`last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
primary key (`id`)
);

CREATE TABLE `task_type`(
task_type_id	int unsigned not null AUTO_INCREMENT,
tag_type_name	varchar(100),
active	varchar(1),
user_id	int,
primary key (`task_type_id`));

-- drop table wsr_plan;
-- drop table ticket_comments;