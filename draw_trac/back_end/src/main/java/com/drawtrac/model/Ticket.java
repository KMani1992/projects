package com.drawtrac.model;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Ticket {
	
	// insert into ticket(summary,description,ticket_type,tag_name,
	// owner, cc,milestone,priority,target_date,component,reporter)
			// values('Test Ticket','Test Ticket Description',1,'',1,'2,3',1,1,'2017-06-01',1,1);

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int ticket_id;
	
	private String summary;
	private String description;
	private int ticket_type;
	private String tag_name;
	private int owner;
	private String cc;
	private int milestone;
	private int priority;		
	//@Column(name="target_date")
	//@Temporal(TemporalType.TIMESTAMP)
	//@DateTimeFormat(pattern = "dd-MM-yyyy")
	private Date target_date;
	private int component;
	private int reporter;
	private String keywords; 
	private String closed="N";
	
//	@OneToOne(fetch=FetchType.LAZY)
//	@JoinColumn(name="ticket_type")
//	private TicketType ticketType;
	
	public String getKeywords() {
		return keywords;
	}
	public void setKeywords(String keywords) {
		this.keywords = keywords;
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
	public int getTicket_type() {
		return ticket_type;
	}
	public void setTicket_type(int ticket_type) {
		this.ticket_type = ticket_type;
	}
	public String getTag_name() {
		return tag_name;
	}
	public void setTag_name(String tag_name) {
		this.tag_name = tag_name;
	}
	public int getOwner() {
		return owner;
	}
	public void setOwner(int owner) {
		this.owner = owner;
	}
	public String getCc() {
		return cc;
	}
	
	public void setCc(int[] cc) {
		//System.out.println(cc);		
		String ccStr=Arrays.toString(cc);
		ccStr= ccStr.substring(1, ccStr.length()-1);
		this.cc = ccStr;
	}
	
	public int getMilestone() {
		return milestone;
	}
	public void setMilestone(int milestone) {
		this.milestone = milestone;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	public Date getTarget_date() {
		return target_date;
	}
	public void setTarget_date(Date target_date) {
		this.target_date = target_date;
	}
	public int getComponent() {
		return component;
	}
	public void setComponent(int component) {
		this.component = component;
	}
	public int getReporter() {
		return reporter;
	}
	public void setReporter(int reporter) {
		this.reporter = reporter;
	}
	public String getClosed() {
		return closed;
	}
	public void setClosed(String closed) {
		this.closed = closed;
	}
	
	
	
}
