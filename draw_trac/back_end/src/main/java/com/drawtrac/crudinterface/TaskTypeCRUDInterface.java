package com.drawtrac.crudinterface;

import org.springframework.data.repository.CrudRepository;

import com.drawtrac.model.TaskType;

public interface TaskTypeCRUDInterface extends 
CrudRepository<TaskType, Integer> {

}
