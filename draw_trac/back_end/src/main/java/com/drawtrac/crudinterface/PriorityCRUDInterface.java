package com.drawtrac.crudinterface;

import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.Priority;

public interface PriorityCRUDInterface 
extends CrudRepository<Priority, Integer>{

}
