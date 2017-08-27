package com.tasknotify.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Taskremaindlog 
{
	@Id	
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id; 
	
	private int user_id;
	
	private Date lastupdated;
	
	private int updatedby;
	
	private String host;
	
	private String fromdevice;
	
	public Taskremaindlog(){
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public Date getLastupdated() {
		return lastupdated;
	}

	public void setLastupdated(Date lastupdated) {
		this.lastupdated = lastupdated;
	}

	public int getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(int updatedby) {
		this.updatedby = updatedby;
	}

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public String getFrom() {
		return fromdevice;
	}

	public void setFrom(String from) {
		this.fromdevice = from;
	}
	
	

}
