package com.tasknotify.model;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Usertable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String name;
	private String email;
	private String phone;
	private String active;
	private Date lastupdated=null;
	private String lastDid;
	
	public Usertable(){		
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public Date getLastupdated() {
		return this.lastupdated;
	}

	public void setLastupdated(Date lastUpdated) {
		this.lastupdated = lastUpdated;
	}

	public String getLastDid() {
		return lastDid;
	}

	public void setLastDid(String lastDid) {
		this.lastDid = lastDid;
	}	
	

}
