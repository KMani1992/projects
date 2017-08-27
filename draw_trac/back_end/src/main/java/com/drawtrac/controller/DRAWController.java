package com.drawtrac.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.drawtrac.model.Component;
import com.drawtrac.model.Milestone;
import com.drawtrac.model.Priority;
import com.drawtrac.model.TaskType;
import com.drawtrac.model.Ticket;
import com.drawtrac.model.TicketType;
import com.drawtrac.model.TicketView;
import com.drawtrac.model.Usertable;
import com.drawtrac.model.WSRView;
import com.drawtrac.model.WsrPlan;
import com.drawtrac.services.TicketService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/ctrac")
public class DRAWController {

	@Autowired
	private TicketService ticketService;
	
	@RequestMapping("/components")
	public List<Component> getComponents(){
		return ticketService.getCompModel();
	}
	
	@RequestMapping("/ticketType")
	public List<TicketType> getTicketType(){
		return ticketService.getTicketTypeModel();
	}
	
	@RequestMapping("/taskType")
	public List<TaskType> getTaskType(){
		return ticketService.getTaskTypeModel();
	}
	
	@RequestMapping("/milestone")
	public List<Milestone> getMilestone(){
		return ticketService.getMilestoneModel();
	}
	
	@RequestMapping("/user")
	public List<Usertable> getUser(){
		return ticketService.getUserModel();
	}
	
	@RequestMapping("/priority")
	public List<Priority> getPriority(){
		return ticketService.getPriority();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/saveTicket")
	public @ResponseBody int saveTicket(@RequestBody Ticket ticket){
		System.out.println("inside save ticket bf");
		System.out.println(ticket);
		System.out.println("inside save ticket af");
		return ticketService.saveTicket(ticket);
	}
	
	@RequestMapping("/authuser")
	public @ResponseBody Usertable findUser(
			@RequestParam("userName") String user_name,
			@RequestParam("password") String password){
		
		Usertable usr=ticketService.findUser(user_name, password);
		System.out.println("inside auth User");
		
		//System.out.println("creds user " + usr.getUserName());
		System.out.println("creds pass " + password);
		
		return usr;
				
	}	
	
	/**
	 * ,
			@RequestParam("ticketType") String selTicketType,
			@RequestParam("owner") String owner,
			@RequestParam("priority") String priority,
			@RequestParam("targetDate") String targetDate,
			@RequestParam("milestone") String milestone
	 */
	
	/**
	 * 
	 * @param selComp
	 * @return
	 */	
	@RequestMapping("/getticket")
	public @ResponseBody List<TicketView> getTicket(
			@RequestParam("component") List<Integer>  selComp,
			@RequestParam("ticketType") List<Integer> selTicketType,
			@RequestParam("owner") List<Integer>  owner,
			@RequestParam("priority") List<Integer>  priority,
			@RequestParam("targetDate") String targetDate,
			@RequestParam("milestone") List<Integer>  milestone,
			@RequestParam("closed") int  closedVal){
		
		System.out.println("params " + selComp + ", " + 
		selTicketType + ", " + owner + ", " + 
				priority + ", " + targetDate + ", " + milestone + ", " + closedVal);
		
		Date targ=null;
		try {
			targ = new SimpleDateFormat("yyyy-MM-dd").parse(targetDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(closedVal);
		
		
		List<TicketView> arrListticketView = ticketService.getTicket(selComp, 
				selTicketType, owner, priority, targ, milestone,closedVal);
		
		//List<TicketView> arrListticketView=ticketService.getTicket(selComp, "", "", 
			//	"", "", "");				
				
		System.out.println("inside get ticket view " + arrListticketView);		
		
		return arrListticketView;
				
	}
	
	@RequestMapping("/getWSR")
	public @ResponseBody WsrPlan findWSR(@RequestParam("ticketID") int ticketId)
	{
		//System.out.println("inside ticket" + ticketId);
		return ticketService.findWSRPlan(ticketId); 
	}
	
	@RequestMapping("/getTotWeek")
	public @ResponseBody int getTotWeek(@RequestParam("ticketID") int ticketId)
	{
		//System.out.println("inside ticket" + ticketId);
		return ticketService.getTotWeekSpent(ticketId); 
	}
	
	@RequestMapping("/getTotTime")
	public @ResponseBody int getTotTime(@RequestParam("ticketID") int ticketId)
	{
		//System.out.println("inside ticket" + ticketId);
		return ticketService.getTotHrsSpent(ticketId); 
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/saveWSR")
	public @ResponseBody boolean saveWSR(@RequestBody List<WsrPlan> listWsrPlan)
	{
		try
		{
			return ticketService.saveWSRPlan(listWsrPlan);
			
		}catch(Exception ex)
		{
			ex.printStackTrace();
			return false;
		}
		
		
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/saveCurWSR")
	public @ResponseBody boolean saveCurWSRPlan(@RequestBody List<WsrPlan> listWsrPlan)
	{
		try
		{
			return ticketService.saveCurWSRPlan(listWsrPlan);
			
		}catch(Exception ex)
		{
			ex.printStackTrace();
			return false;
		}
		
		
	}
	
	
		
	@RequestMapping(method=RequestMethod.GET,value="/getLastWeekPlan")
	public @ResponseBody List<WsrPlan> getLastWeekPlan()
	{
		try
		{
			return ticketService.getLastWeekPlan();			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return null;			
		}
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/getLastWeekTagId")
	public @ResponseBody int getLastWeekTagId()
	{	
		return ticketService.getLastWeekTagID();
	}
		
	@RequestMapping(method=RequestMethod.GET,value="/getMultiWSR")
	public @ResponseBody List<WSRView> getMultiWeekPlan(@RequestParam("weekTagList") List<Integer> weekTagId)
	{
		try
		{
			return ticketService.getMultiWSR(weekTagId);			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return null;			
		}
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/getTagIdList")
	public @ResponseBody List<Integer> getTagIDList()
	{
		try
		{
			return ticketService.getTagIDList();			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return null;			
		}
	}
	
	
	@RequestMapping(method=RequestMethod.GET,value="/test")
	public @ResponseBody String test()
	{		
		return "Hello";
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/install")
	public @ResponseBody int install()
	{
		try
		{
			return ticketService.install();
			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return -1;			
		}
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/dropdata")
	public @ResponseBody int dropdata()
	{
		try
		{
			return ticketService.dropData();
			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return -1;			
		}
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/installMil")
	public @ResponseBody int installMil()
	{
		try
		{
			return ticketService.installMil();
			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return -1;			
		}
	}
	
	
	@RequestMapping(method=RequestMethod.GET,value="/getLWSRPlan")
	public @ResponseBody List<WSRView> getLastWeekPlanByTagId(){
		try
		{
			return ticketService.getLastWeekPlanByTagId();			
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return null;			
		}
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/getTotTicket")
	public @ResponseBody int getTotTicket()
	{	
		return ticketService.getTotTicket();
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/getTotActTicket")
	public @ResponseBody int getTotActTicket()
	{	
		return ticketService.getTotActiveTicket();
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/getTotCompTicket")
	public @ResponseBody int getTotCompTicket()
	{	
		return ticketService.getTotCompTicket();
	}
	
}
