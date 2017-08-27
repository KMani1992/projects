package com.tasknotify.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tasknotify.model.LastTaskUpdRpt;
import com.tasknotify.model.Usertable;
import com.tasknotify.service.TaskNotifyService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/remainder")
public class TaskNotifyController 
{

	@Autowired
	public TaskNotifyService tskNotifyService;
	
	@RequestMapping("/gettskNotifyList")
	public List<Usertable> getRemainderUserList()
	{
		
		return tskNotifyService.getTskNotifyUserList();
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/updateTaskDone")
	public List<Usertable>  updateTaskDone(
			@RequestHeader(value="User-Agent") String userAgent,			
			@RequestParam("userId")int userId)
	{
		//boolean sts=		
		tskNotifyService.updateTaskDone(userId,userAgent);
		//System.out.println("update status " + sts);
		return getRemainderUserList();
	}
	
	@RequestMapping("/getLastTaskUpdTran")
	public List<LastTaskUpdRpt> getgetLastTaskUpdTran()
	{
		
		return tskNotifyService.getLastTaskUpdTran();
	}
	
	@RequestMapping("/install")
	public int install()
	{		
		tskNotifyService.install();
		return 0;
	}
	
	@RequestMapping("/test")
	public String test()
	{	
		int sts=tskNotifyService.test();
		
		return "hello: " + sts;
	}
	
}
