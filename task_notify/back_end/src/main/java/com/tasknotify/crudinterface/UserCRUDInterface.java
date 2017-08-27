package com.tasknotify.crudinterface;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.tasknotify.model.Usertable;

public interface UserCRUDInterface extends CrudRepository<Usertable, Integer>
{

	public List<Usertable> findAllByOrderByLastupdatedAscIdAsc();

}
