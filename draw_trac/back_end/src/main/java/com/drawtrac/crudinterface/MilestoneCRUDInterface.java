package com.drawtrac.crudinterface;

import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.Milestone;


public interface MilestoneCRUDInterface 
extends CrudRepository<Milestone, Integer>{

}
