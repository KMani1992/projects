package com.drawtrac.crudinterface;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.WSRView;
import com.drawtrac.model.WsrPlan;

public interface WSRCRUDInterface  extends CrudRepository<WsrPlan, Integer> 
{	
	@Query(value="select DISTINCT(tagId) as tagID from WsrPlan")
	public List<Integer> getTagIdList();
	
	@Query(value="select coalesce(max(tagId),0) as tagId from WsrPlan where week_flag='N'")
	public int findMaxNextWeekTagId();
	
	
	@Query(value="select coalesce(sum(no_of_week_planned),0) as no_of_week_planned from WsrPlan where ticketId=?1")
	public int findSumOfWeekPlanned(int ticketID);
	
	@Query(value="select coalesce(sum(total_time_spent),0) as total_time_spent from WsrPlan where ticketId=?1")
	public int findSumOfTotTimeSpent(int ticketID);
	
	public WsrPlan findWSRPlanByTicketId(int ticketId);
	
	public List<WsrPlan> findWSRPlanByTagId(int tagId);
	
	public List<WsrPlan> findWSRPlanByTagId(List<Integer> tagId);
	
	
	@Query(value="select new com.drawtrac.model.WSRView(wp.ticketId,t.summary,wp.from_date,"
			+ "wp.to_date,wp.task_type,"
			+ "wp.unplanned,wp.hours_planned,wp.time_spent,wp.total_time_spent,"
			+ "wp.no_of_week_planned,wp.tl_approval,wp.tl_comments,wp.stl_approval,wp.stl_comments,"
			+ "wp.planned,wp.completed,wp.tagId,wp.closed) from WsrPlan wp,Ticket t "
			+ "where wp.ticketId=t.ticket_id "
			+ "and wp.week_flag='N' and wp.closed='N' and wp.tagId=?1 "
			+ "and wp.ticketId not in(select coalesce(ticketId,0) from WsrPlan where tagId=?1 and week_flag='C' and closed='Y')")
	public List<WSRView> getLastWeekPlanByTagId(int tagId);
	
	@Query(value="select new com.drawtrac.model.WSRView(wp.ticketId,t.summary,wp.from_date,"
			+ "wp.to_date,wp.task_type,"
			+ "wp.unplanned,wp.hours_planned,wp.time_spent,wp.total_time_spent,"
			+ "wp.no_of_week_planned,wp.tl_approval,wp.tl_comments,wp.stl_approval,wp.stl_comments,"
			+ "wp.planned,wp.completed,wp.tagId,wp.closed) from WsrPlan wp,Ticket t "
			+ "where wp.ticketId=t.ticket_id "
			+ "and wp.week_flag='N' and wp.tagId in(?1)")
	public List<WSRView> getLastWeekPlanByTagIdList(List<Integer> tagId);
	
}
