package com.drawtrac.model;

import java.util.Date;


public class TicketView implements DRAWCRUDInterface
{		
	private int ticket_id;	
	private String summary;
	private String description;	
	private String ticket_type;
	private String userName;
	private String milestone_type;
	private String priority_type;
	private Date target_date;
	private String component_type;
	private String closed="N";
	
	public TicketView(){
		
	}

	public TicketView(int ticket_id, String summary, String description, String ticket_type, String userName,
			String milestone_type, String priority_type, Date target_date, String component_type,String closed) {
		super();
		this.ticket_id = ticket_id;
		this.summary = summary;
		this.description = description;
		this.ticket_type = ticket_type;
		this.userName = userName;
		this.milestone_type = milestone_type;
		this.priority_type = priority_type;
		this.target_date = target_date;
		this.component_type = component_type;
		this.closed=closed;
	}




	public int getTicket_id() {
		return ticket_id;
	}
	public void setTicket_id(int ticket_id) {
		this.ticket_id = ticket_id;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}




	public String getTicket_type() {
		return ticket_type;
	}




	public void setTicket_type(String ticket_type) {
		this.ticket_type = ticket_type;
	}




	public String getUserName() {
		return userName;
	}




	public void setUserName(String userName) {
		this.userName = userName;
	}




	public String getMilestone_type() {
		return milestone_type;
	}




	public void setMilestone_type(String milestone_type) {
		this.milestone_type = milestone_type;
	}




	public String getPriority_type() {
		return priority_type;
	}




	public void setPriority_type(String priority_type) {
		this.priority_type = priority_type;
	}




	public String getTarget_date() {
		return DT_FORMAT.format(target_date);
	}

	public void setTarget_date(Date target_date) {
		this.target_date = target_date;
	}




	public String getComponent_type() {
		return component_type;
	}




	public void setComponent_type(String component_type) {
		this.component_type = component_type;
	}

	public String getClosed() {
		return closed;
	}

	public void setClosed(String closed) {
		this.closed = closed;
	}
	
	
	

}
