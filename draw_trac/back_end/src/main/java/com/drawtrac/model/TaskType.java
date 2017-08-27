package com.drawtrac.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TaskType {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int task_type_id;
	
	private String task_type_name;
	
	private String active;
	
	private int user_id;

	public int getTask_type_id() {
		return task_type_id;
	}

	public void setTask_type_id(int task_type_id) {
		this.task_type_id = task_type_id;
	}

	public String getTask_type_name() {
		return task_type_name;
	}

	public void setTask_type_name(String task_type_name) {
		this.task_type_name = task_type_name;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	

}
