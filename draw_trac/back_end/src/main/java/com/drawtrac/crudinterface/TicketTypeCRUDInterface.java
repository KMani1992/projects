package com.drawtrac.crudinterface;

import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.TicketType;

public interface TicketTypeCRUDInterface extends 
CrudRepository<TicketType, Integer>{

}
