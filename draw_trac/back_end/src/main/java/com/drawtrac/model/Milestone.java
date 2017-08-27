package com.drawtrac.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Milestone {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int milestone_id;
	
	private String milestone_type;
	
	private String active;

	public int getMilestone_id() {
		return milestone_id;
	}

	public void setMilestone_id(int milestone_id) {
		this.milestone_id = milestone_id;
	}

	public String getMilestone_type() {
		return milestone_type;
	}

	public void setMilestone_type(String milestone_type) {
		this.milestone_type = milestone_type;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}
	
	
	
}
