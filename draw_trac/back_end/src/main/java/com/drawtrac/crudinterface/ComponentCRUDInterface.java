package com.drawtrac.crudinterface;

import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.Component;

public interface ComponentCRUDInterface 
extends CrudRepository<Component, Integer> {
	
	
}
