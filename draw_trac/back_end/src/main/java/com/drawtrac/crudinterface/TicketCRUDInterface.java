package com.drawtrac.crudinterface;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.Ticket;
import com.drawtrac.model.TicketView;

public interface TicketCRUDInterface extends CrudRepository<Ticket, Integer> {
	
	/**
	 * 
	 * 
	 * @param selComp
	 * @param selTicketType
	 * @param owner
	 * @param priority
	 * @param targetDate
	 * @param milestone
	 * @return
	 */	
	@Query(value="select new com.drawtrac.model.TicketView(t.ticket_id,t.summary,t.description," +
	 " tt.ticket_type,u.userName," +
	 " m.milestone_type,p.priority_type,t.target_date,c.component_type,t.closed) from Ticket t,TicketType tt,"+
	 " Usertable u,Milestone m,Priority p,Component c "+
	 " where t.owner= u.user_id and t.milestone=m.milestone_id"+
	 " and t.priority=p.priority_id and t.component=c.component_id and t.ticket_type=tt.ticket_type_id"
	 + " and t.component in(?1) and t.ticket_type in(?2) and t.owner in(?3) and t.priority in(?4) "
	 + " and t.target_date<=?5 and t.milestone in(?6) and t.closed='N'")
	public List<TicketView> findTicket(List<Integer>  selComp,List<Integer> selTicketType,
			List<Integer>  owner,List<Integer> priority,Date targetDate,List<Integer> milestone);
	
	
	@Query(value="select new com.drawtrac.model.TicketView(t.ticket_id,t.summary,t.description," +
			 " tt.ticket_type,u.userName," +
			 " m.milestone_type,p.priority_type,t.target_date,c.component_type,t.closed) from Ticket t,TicketType tt,"+
			 " Usertable u,Milestone m,Priority p,Component c "+
			 " where t.owner= u.user_id and t.milestone=m.milestone_id"+
			 " and t.priority=p.priority_id and t.component=c.component_id and t.ticket_type=tt.ticket_type_id"
			 + " and t.component in(?1) and t.ticket_type in(?2) and t.owner in(?3) and t.priority in(?4) "
			 + " and t.target_date<=?5 and t.milestone in(?6)")
			public List<TicketView> findAllTicket(List<Integer>  selComp,List<Integer> selTicketType,
					List<Integer>  owner,List<Integer> priority,Date targetDate,List<Integer> milestone);
	
//	@Query("select summary from Ticket")
//	void findTicketByTargetDate(String targetDate);
	
	@Query(value="select coalesce(count(*),0) as totalTicket from Ticket")
	public int findTotTicket();
	
	@Query(value="select coalesce(count(*),0) as completed from Ticket where closed='Y'")
	public int findTotComplTicket();
}
