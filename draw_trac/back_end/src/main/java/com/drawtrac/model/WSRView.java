package com.drawtrac.model;

import java.util.Date;

public class WSRView implements DRAWCRUDInterface {

	private int ticketId;
	private String summary;
	private Date from_date;
	private Date to_date;
	private String task_type;
	private String unplanned;
	private int hours_planned;
	private int time_spent;
	private int total_time_spent;
	private int no_of_week_planned;
	private String week_flag = "N";
	private String tl_approval;
	private String tl_comments;
	private String stl_approval;
	private String stl_comments;
	private String planned;
	private String completed;
	private Date last_updated = null;
	private int tagId;
	private String closed="N";
	
	public WSRView() {

	}

	public WSRView(int ticketId, String summary, Date from_date, Date to_date, String task_type, String unplanned,
			int hours_planned, int time_spent, int total_time_spent, int no_of_week_planned, String tl_approval,
			String tl_comments, String stl_approval, String stl_comments, String planned, String completed, int tagId,String closed) {

		super();
		this.ticketId = ticketId;
		this.summary = summary;
		this.from_date = from_date;
		this.to_date = to_date;
		this.task_type = task_type;
		this.unplanned = unplanned;
		this.hours_planned = hours_planned;
		this.time_spent = time_spent;
		this.total_time_spent = total_time_spent;
		this.no_of_week_planned = no_of_week_planned;
		this.tl_approval = tl_approval;
		this.tl_comments = tl_comments;
		this.stl_approval = stl_approval;
		this.stl_comments = stl_comments;
		this.planned = planned;
		this.completed = completed;
		this.tagId = tagId;
		this.closed=closed;
	}

	public int getTicketId() {
		return ticketId;
	}

	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getFrom_date() {
		return ANG_DT_FORMAT.format(from_date);
	}

	public void setFrom_date(Date from_date) {
		this.from_date = from_date;
	}

	public String getTo_date() {
		return ANG_DT_FORMAT.format(to_date);
	}

	public void setTo_date(Date to_date) {
		this.to_date = to_date;
	}

	public String getTask_type() {
		return task_type;
	}

	public void setTask_type(String task_type) {
		this.task_type = task_type;
	}

	public String getUnplanned() {
		return unplanned;
	}

	public void setUnplanned(String unplanned) {
		this.unplanned = unplanned;
	}

	public int getHours_planned() {
		return hours_planned;
	}

	public void setHours_planned(int hours_planned) {
		this.hours_planned = hours_planned;
	}

	public int getTime_spent() {
		return time_spent;
	}

	public void setTime_spent(int time_spent) {
		this.time_spent = time_spent;
	}

	public int getTotal_time_spent() {
		return total_time_spent;
	}

	public void setTotal_time_spent(int total_time_spent) {
		this.total_time_spent = total_time_spent;
	}

	public int getNo_of_week_planned() {
		return no_of_week_planned;
	}

	public void setNo_of_week_planned(int no_of_week_planned) {
		this.no_of_week_planned = no_of_week_planned;
	}

	public String getWeek_flag() {
		return week_flag;
	}

	public void setWeek_flag(String week_flag) {
		this.week_flag = week_flag;
	}

	public String getTl_approval() {
		return tl_approval;
	}

	public void setTl_approval(String tl_approval) {
		this.tl_approval = tl_approval;
	}

	public String getTl_comments() {
		return tl_comments;
	}

	public void setTl_comments(String tl_comments) {
		this.tl_comments = tl_comments;
	}

	public String getStl_approval() {
		return stl_approval;
	}

	public void setStl_approval(String stl_approval) {
		this.stl_approval = stl_approval;
	}

	public String getStl_comments() {
		return stl_comments;
	}

	public void setStl_comments(String stl_comments) {
		this.stl_comments = stl_comments;
	}

	public String getPlanned() {
		return planned;
	}

	public void setPlanned(String planned) {
		this.planned = planned;
	}

	public String getCompleted() {
		return completed;
	}

	public void setCompleted(String completed) {
		this.completed = completed;
	}

	public Date getLast_updated() {
		return last_updated;
	}

	public void setLast_updated(Date last_updated) {
		this.last_updated = last_updated;
	}

	public int getTagId() {
		return tagId;
	}

	public void setTagId(int tagId) {
		this.tagId = tagId;
	}

	public String getClosed() {
		return closed;
	}

	public void setClosed(String closed) {
		this.closed = closed;
	}
	
	
	
}
