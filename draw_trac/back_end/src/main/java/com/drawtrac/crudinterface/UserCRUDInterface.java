package com.drawtrac.crudinterface;


import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.Usertable;

public interface UserCRUDInterface extends CrudRepository<Usertable, Integer>{
	

public Usertable findUsertableByUserNameAndPassword(String userName,String password);

}
