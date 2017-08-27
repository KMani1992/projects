package com.drawtrac.services;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.drawtrac.crudinterface.ComponentCRUDInterface;
import com.drawtrac.crudinterface.MilestoneCRUDInterface;
import com.drawtrac.crudinterface.PriorityCRUDInterface;
import com.drawtrac.crudinterface.TaskTypeCRUDInterface;
import com.drawtrac.crudinterface.TicketCRUDInterface;
import com.drawtrac.crudinterface.TicketTypeCRUDInterface;
import com.drawtrac.crudinterface.UserCRUDInterface;
import com.drawtrac.crudinterface.WSRCRUDInterface;
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

@Service
public class TicketService {

	@Autowired
	public ComponentCRUDInterface compCrudInterface;

	@Autowired
	public TicketTypeCRUDInterface ttypeCrudInterface;

	@Autowired
	public TaskTypeCRUDInterface tasktypeCrudInterface;

	@Autowired
	public MilestoneCRUDInterface milestoneCrudInterface;

	@Autowired
	public UserCRUDInterface userCrudInterface;

	@Autowired
	public PriorityCRUDInterface priorityCrudInterface;

	@Autowired
	public TicketCRUDInterface ticketCrudInterface;

	@Autowired
	public WSRCRUDInterface wsrCrudInterface;

	public TicketService() {
	}

	public List<Component> getCompModel() {

		List<Component> arrLstCompModel = new ArrayList<Component>();

		compCrudInterface.findAll().forEach(arrLstCompModel::add);

		return arrLstCompModel;
	}

	public List<TicketType> getTicketTypeModel() {

		List<TicketType> arrLstTickTypeModel = new ArrayList<TicketType>();

		ttypeCrudInterface.findAll().forEach(arrLstTickTypeModel::add);

		return arrLstTickTypeModel;
	}

	public List<TaskType> getTaskTypeModel() {

		List<TaskType> arrLstTaskTypeModel = new ArrayList<TaskType>();

		tasktypeCrudInterface.findAll().forEach(arrLstTaskTypeModel::add);

		return arrLstTaskTypeModel;
	}

	public List<Milestone> getMilestoneModel() {

		List<Milestone> arrLstMilestoneModel = new ArrayList<Milestone>();

		milestoneCrudInterface.findAll().forEach(arrLstMilestoneModel::add);

		return arrLstMilestoneModel;
	}
	
	public int dropData()
	{
		compCrudInterface.delete(25);
		compCrudInterface.delete(26);
		
		milestoneCrudInterface.delete(27);
		milestoneCrudInterface.delete(28);
		milestoneCrudInterface.delete(29);
		
		ttypeCrudInterface.delete(41);
		ttypeCrudInterface.delete(42);
		
		userCrudInterface.delete(22);
		userCrudInterface.delete(23);
		userCrudInterface.delete(24);
		
		priorityCrudInterface.delete(30);
		priorityCrudInterface.delete(31);
		priorityCrudInterface.delete(32);
		
		tasktypeCrudInterface.delete(33);
		tasktypeCrudInterface.delete(34);
		tasktypeCrudInterface.delete(35);
		tasktypeCrudInterface.delete(36);
		tasktypeCrudInterface.delete(37);
		tasktypeCrudInterface.delete(38);
		tasktypeCrudInterface.delete(39);
		tasktypeCrudInterface.delete(40);
	
		return 0;
	}

	public int install()
	{
		//user
		Usertable user=new Usertable();
		user.setUser_name("Kandeepan");
		user.setActive("Y");
		user.setManager(1);
		user.setTlid(1);
		user.setStlid(1);
		user.setDesignation(2);
		user.setPassword("kandeepan123$");
		userCrudInterface.save(user);
		
		user=new Usertable();
		user.setUser_name("Manikandan");
		user.setActive("Y");
		user.setManager(1);
		user.setTlid(1);
		user.setStlid(1);
		user.setDesignation(1);
		user.setPassword("mani123$");
		userCrudInterface.save(user);
		
		user=new Usertable();
		user.setUser_name("Durai");
		user.setActive("Y");
		user.setManager(1);
		user.setTlid(1);
		user.setStlid(1);
		user.setDesignation(1);
		user.setPassword("durai123$");
		userCrudInterface.save(user);
		
		//component
		Component comp=new Component();
		comp.setComponent_type("BodyService");
		comp.setActive("Y");
		compCrudInterface.save(comp);
		
		comp=new Component();
		comp.setComponent_type("ElectricalWorks");
		comp.setActive("Y");
		compCrudInterface.save(comp);
		
		//milestone
		Milestone mil=new Milestone();
		mil.setMilestone_type("Deliver EOD");
		mil.setActive("Y");		
		milestoneCrudInterface.save(mil);
		
		mil=new Milestone();
		mil.setMilestone_type("Full Condition");
		mil.setActive("Y");		
		milestoneCrudInterface.save(mil);
		
		mil=new Milestone();
		mil.setMilestone_type("No Repeated Faults");
		mil.setActive("Y");		
		milestoneCrudInterface.save(mil);
		
		//priority
		Priority pri=new Priority();
		pri.setPriority_type("Mid");
		pri.setActive("Y");
		priorityCrudInterface.save(pri);
		
		pri=new Priority();
		pri.setPriority_type("Low");
		pri.setActive("Y");
		priorityCrudInterface.save(pri);
		
		pri=new Priority();
		pri.setPriority_type("High");
		pri.setActive("Y");
		priorityCrudInterface.save(pri);
		
		//task type
		TaskType ttype=new TaskType();
		ttype.setTask_type_name("Issue Analysis");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Lath Work");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Painting Work");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Tinkering/Welding Work");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Seet");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Electrical/Electronics");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Cleaning");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		ttype=new TaskType();
		ttype.setTask_type_name("Verify/Trail");
		ttype.setActive("Y");
		ttype.setUser_id(1);
		tasktypeCrudInterface.save(ttype);
		
		TicketType titype=new TicketType();
		titype.setTicket_type("New Work");
		ttype.setActive("Y");
		ttypeCrudInterface.save(titype);
		
		titype=new TicketType();
		titype.setTicket_type("Work Mistake");
		ttype.setActive("Y");
		ttypeCrudInterface.save(titype);		
		
		return 0;
	}
	
	public int installMil(){
		//milestone
		Milestone mil=new Milestone();
		mil.setMilestone_type("Deliver EOD");
		mil.setActive("Y");		
		milestoneCrudInterface.save(mil);
		
		mil=new Milestone();
		mil.setMilestone_type("Full Condition");
		mil.setActive("Y");		
		milestoneCrudInterface.save(mil);
		
		return 0;
	}
	
	public List<Usertable> getUserModel() {

		List<Usertable> arrLstUserModel = new ArrayList<Usertable>();

		userCrudInterface.findAll().forEach(arrLstUserModel::add);

		return arrLstUserModel;
	}

	public List<Priority> getPriority() {

		List<Priority> arrLstPriorityModel = new ArrayList<Priority>();

		priorityCrudInterface.findAll().forEach(arrLstPriorityModel::add);

		return arrLstPriorityModel;
	}

	// API used to save the ticket
	public int saveTicket(Ticket ticket) {

		ticketCrudInterface.save(ticket);

		return 0;
	}

	public Usertable findUser(String user_name, String password) {
		return userCrudInterface.findUsertableByUserNameAndPassword(user_name, password);

	}

	public List<TicketView> getTicket(List<Integer> selComp, List<Integer> selTicketType, List<Integer> owner,
			List<Integer> priority, Date targetDate, List<Integer> milestone,int closed) {
		
		if(0!=closed)
		{
			System.out.println("untick");
			return ticketCrudInterface.findTicket(selComp, selTicketType, owner, priority, targetDate, milestone);
		}
		else
		{
			System.out.println("tick");
			return ticketCrudInterface.findAllTicket(selComp, selTicketType, owner, priority, targetDate, milestone);	
		}

	}

	public WsrPlan findWSRPlan(int ticketID) {
		return wsrCrudInterface.findWSRPlanByTicketId(ticketID);
	}

	@Transactional
	public boolean saveWSRPlan(List<WsrPlan> wsrPlan) throws Exception 
	{
		
		int tag_id = getTagID(new Date());
		boolean retSts = false;
		
		Date dt=new Date();
		
		System.out.println("date " + dt);
		System.out.println("tag id " + tag_id);
		
		for (WsrPlan wplan : wsrPlan) {
			wplan.setTagId(tag_id);
			wplan.setLast_updated(dt);
			wsrCrudInterface.save(wplan);
		}

		retSts = true;

		// if(retSts) throw new Exception("test exception");

		return retSts;

	}
	
	
	@Transactional
	public boolean saveCurWSRPlan(List<WsrPlan> wsrPlan) throws Exception 
	{
		
		int tag_id = getTagID(new Date());
		boolean retSts = false;

		for (WsrPlan wplan : wsrPlan) {
			wplan.setTagId(tag_id);
			wsrCrudInterface.save(wplan);
			
			if("Y".equals(wplan.getClosed()))
			{
				Ticket ticket=ticketCrudInterface.findOne(wplan.getTicketId());
				ticket.setClosed("Y");
				ticketCrudInterface.save(ticket);
			}
			
		}

		retSts = true;

		// if(retSts) throw new Exception("test exception");

		return retSts;

	}
	
	
	
	
	private int getTagID(Date date)
	{
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return Integer.valueOf(String.format("%d%d", cal.get(Calendar.YEAR) , cal.get(Calendar.WEEK_OF_YEAR)));
	}
	
	public List<WsrPlan> getLastWeekPlan() 
	{
		int tagId=wsrCrudInterface.findMaxNextWeekTagId();		
		//System.out.println("tagId " + tagId);		
		return wsrCrudInterface.findWSRPlanByTagId(tagId);		
	}
	
	public int getLastWeekTagID() 
	{
		return wsrCrudInterface.findMaxNextWeekTagId();	
				
	}
	
	public List<WSRView> getMultiWSR(List<Integer> listTagId) 
	{					
		return wsrCrudInterface.getLastWeekPlanByTagIdList(listTagId);		
	}
	
	public List<Integer> getTagIDList()
	{
		return wsrCrudInterface.getTagIdList();
	}
	
	public int getTotWeekSpent(int ticketID)
	{
		return wsrCrudInterface.findSumOfWeekPlanned(ticketID);
	}
	
	public int getTotHrsSpent(int ticketID)
	{
		return wsrCrudInterface.findSumOfTotTimeSpent(ticketID);
	}
	
	public List<WSRView> getLastWeekPlanByTagId() 
	{
		int tagId=wsrCrudInterface.findMaxNextWeekTagId();
		return wsrCrudInterface.getLastWeekPlanByTagId(tagId);		
	}
	
	public List<WSRView> getLastWeekPlanByTagIdList(List<Integer> tagIdList) 
	{	
		return wsrCrudInterface.getLastWeekPlanByTagIdList(tagIdList);		
	}
	
	public int getTotTicket()
	{
		return ticketCrudInterface.findTotTicket();
	}
	
	public int getTotCompTicket()
	{
		return ticketCrudInterface.findTotComplTicket();
	}
	
	public int getTotActiveTicket(){
		
		List<WSRView> lstWSRView=getLastWeekPlanByTagId();
		
		if(null!=lstWSRView)
		{
			return lstWSRView.size();
		}
		else
		{
			return 0;
		}
	}

}
