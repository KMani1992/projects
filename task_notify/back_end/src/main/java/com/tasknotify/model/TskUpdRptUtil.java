package com.tasknotify.model;

import java.util.Date;

public class TskUpdRptUtil 
{
	
	private Date lastUpdated;
	
	private String hostname="";
	
	public TskUpdRptUtil(Date lastUpdated,String hostname)
	{
		this.lastUpdated=lastUpdated;
		this.hostname=hostname;		
	}
	
	public Date getLastUpdated() {
		return lastUpdated;
	}
	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}
	public String getHost() {
		return hostname;
	}
	public void setHost(String host) {
		this.hostname = host;
	}

	

}
