package com.drawtrac.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Priority {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int priority_id;
	private String priority_type;
	private String active;
	public int getPriority_id() {
		return priority_id;
	}
	public void setPriority_id(int priority_id) {
		this.priority_id = priority_id;
	}
	public String getPriority_type() {
		return priority_type;
	}
	public void setPriority_type(String priority_type) {
		this.priority_type = priority_type;
	}
	public String getActive() {
		return active;
	}
	public void setActive(String active) {
		this.active = active;
	}
	
	

}
