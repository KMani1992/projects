package com.drawtrac.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TicketType {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int ticket_type_id;
	
	private String ticket_type;
	
	private String active;

	public int getTicket_type_id() {
		return ticket_type_id;
	}

	public void setTicket_type_id(int ticket_type_id) {
		this.ticket_type_id = ticket_type_id;
	}

	public String getTicket_type() {
		return ticket_type;
	}

	public void setTicket_type(String ticket_type) {
		this.ticket_type = ticket_type;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}
	
	
	
}
