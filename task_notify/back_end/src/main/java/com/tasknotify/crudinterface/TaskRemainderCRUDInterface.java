package com.tasknotify.crudinterface;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.tasknotify.model.Taskremaindlog;
import com.tasknotify.model.TskUpdRptUtil;

public interface TaskRemainderCRUDInterface extends  CrudRepository<Taskremaindlog, Integer> {
	
	@Query(value="select new com.tasknotify.model.TskUpdRptUtil(tr.lastupdated,tr.host) from Taskremaindlog tr,Usertable u "
			+ "where tr.user_id=u.id and u.active='Y' " 
			+ "and u.id=?1 order by u.id,tr.lastupdated desc")
	public List<TskUpdRptUtil> findLastUpdated(int userId);
	
	//public List<Date> findLastupdatedByUserIdOrderByLastupdatedAsc(int user_id);

}
