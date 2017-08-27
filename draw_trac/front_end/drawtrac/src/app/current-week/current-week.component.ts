import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
import * as globSymb from '../global'

@Component({
  selector: 'app-current-week',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.css']
})
export class CurrentWeekComponent implements OnInit {

taskType: Object[]=[];

totalWeeksHrsSpent:String="0 [ 0 ]";

totalHoursSpent:string="0";
totalWeeksSpent:string="0";
ticketID:string="";
summary:string="";
fromDt:string="";
toDt:string="";
planned:string="";
completed:string="";
taskTypeCode:string[]=[];
plannedTimetoSpent:string="0";
timeSpent:string="0";

LastWeekPlan:Object[]=[];

currentWeekPlanRows:Object[]=[];

currentWeekWSRSave:Object[]=[];

errorMessage: string;

editMode:boolean=false;

selEditIdx:number;
weekTagId:object;
unplanned:boolean=false;
closed:boolean=false;

  constructor(private tickService : TicketService) { }

  ngOnInit() 
  {

    this.tickService
        .getTaskType()
        .then(taskType => this.taskType = taskType,
        error => this.errorMessage=<any>error);

    this.tickService
        .getLastWeekTagId()
        .then(weekTagId => this.weekTagId = weekTagId,
        error => this.errorMessage=<any>error);


    this.tickService
        .getLastWeekPlan()
        .then(LastWeekPlan=>{
          
          this.LastWeekPlan = LastWeekPlan;
          if(null!=this.LastWeekPlan){

          console.log("pushWSRPlanRows len data ",this.LastWeekPlan);
          var cWLen=this.LastWeekPlan.length;      
          console.log("pushWSRPlanRows len",cWLen);
          for(var i=0;i<cWLen;i++)
          {          
            this.pushWSRPlanRows(this.LastWeekPlan[i]);    
            console.log("this.currentWeekPlanRows ", this.currentWeekPlanRows);
          }

          }

        },
        error => this.errorMessage=<any>error)
    
   

  }


  pushWSRPlanRows(lwPlan:any)
  {
    /**
     * int ticketId, String summary, Date from_date, Date to_date, String task_type, char unplanned,
			int hours_planned, int time_spent, int total_time_spent, int no_of_week_planned, 
      char tl_approval,
			String tl_comments, char stl_approval, String stl_comments, String planned, String completed, 
      int tagId
     */
      
      console.log("pushWSRPlanRows loop",lwPlan);

      console.log("lwPlan.task_type.split(",")",lwPlan.task_type.split(","));

      this.currentWeekPlanRows.push({ticketId:lwPlan.ticketId,
      summary:lwPlan.summary,fromDt:lwPlan.from_date,toDt:lwPlan.to_date,
      hours_planned:lwPlan.hours_planned,
      time_spent:lwPlan.time_spent,total_time_spent:lwPlan.total_time_spent,
      no_of_week_planned:lwPlan.no_of_week_planned,task_type:lwPlan.task_type,
      isunplanned:lwPlan.unplanned,planned:lwPlan.planned,
      completed:lwPlan.completed,taskTypArr:lwPlan.task_type.split(",").map(Number),
      isclosed:lwPlan.closed});

      this.currentWeekWSRSave.push({ticketId:lwPlan.ticketId,from_date:lwPlan.from_date,
      to_date:lwPlan.to_date,task_type:lwPlan.task_type,unplanned:lwPlan.unplanned,
      hours_planned:lwPlan.hours_planned,
      time_spent:lwPlan.time_spent,total_time_spent:lwPlan.total_time_spent,
      no_of_week_planned:lwPlan.no_of_week_planned,
      week_flag:'C',planned:lwPlan.planned,completed:lwPlan.completed,closed:lwPlan.closed,
      tagId:lwPlan.tagId});
  }

  onSubmit(){
    
  }

  public handleEvent(wsrPlan:any)
  {
    
    console.debug(wsrPlan,"from filtered ticket");

   // console.debug(wsrPlan.total_time_spent,"wsrPlan.total_time_spent");
   // console.debug(wsrPlan.no_of_week_planned,"wsrPlan.no_of_week_planned");

    this.editMode=false;
    this.totalHoursSpent="0";
    this.totalWeeksSpent="0";
    this.ticketID="";
    this.summary="";
    this.timeSpent="0";
    this.plannedTimetoSpent="0";    

    this.ticketID=wsrPlan.ticketId;
    this.summary=wsrPlan.summary;
    this.totalHoursSpent=wsrPlan.total_time_spent;
    this.totalWeeksSpent=wsrPlan.no_of_week_planned;

    this.totalWeeksHrsSpent=wsrPlan.no_of_week_planned + " [ " + wsrPlan.total_time_spent + " ]";    
  }

  addPlan()
  {
    console.log(this.taskTypeCode,"this.taskTypeCode");
    console.log(this.taskTypeCode.join(","),"this.taskTypeCode join");

    console.log("this.editMode ", this.editMode);  
    console.log(this.selEditIdx,"this.selEditIdx");

    var unplan=this.unplanned ? 'Y':'N';
    var tskclose=this.closed ? 'Y':'N';

    if(!this.editMode)
    {
      this.currentWeekPlanRows.push({ticketId:this.ticketID,
      summary:this.summary,fromDt:this.fromDt,toDt:this.toDt,
      hours_planned:this.plannedTimetoSpent,
      time_spent:this.timeSpent,total_time_spent:this.totalHoursSpent,
      no_of_week_planned:this.totalWeeksSpent,
      task_type:this.taskTypeCode.join(","),
      isunplanned:unplan,planned:this.planned,
      completed:this.completed,taskTypArr:this.taskTypeCode,
      isclosed:tskclose});

      this.currentWeekWSRSave.push({ticketId:this.ticketID,from_date:this.fromDt,
      to_date:this.toDt,task_type:this.taskTypeCode.join(","),unplanned:unplan,
      hours_planned:this.plannedTimetoSpent,
      time_spent:this.timeSpent,total_time_spent:this.timeSpent,
      no_of_week_planned:0,
      week_flag:'C',planned:this.planned,completed:this.completed,
      closed:tskclose,tagId:this.weekTagId});
    }
    else
    {     

      this.currentWeekPlanRows.splice(this.selEditIdx,1,{ticketId:this.ticketID,
      summary:this.summary,fromDt:this.fromDt,toDt:this.toDt,
      hours_planned:this.plannedTimetoSpent,
      time_spent:this.timeSpent,total_time_spent:this.totalHoursSpent,
      no_of_week_planned:this.totalWeeksSpent,task_type:this.taskTypeCode.join(","),
      isunplanned:unplan,planned:this.planned,
      completed:this.completed,taskTypArr:this.taskTypeCode,isclosed:tskclose});

      this.currentWeekWSRSave.splice(this.selEditIdx,1,{ticketId:this.ticketID,from_date:this.fromDt,
      to_date:this.toDt,task_type:this.taskTypeCode.join(","),unplanned:unplan,
      hours_planned:this.plannedTimetoSpent,
      time_spent:this.timeSpent,total_time_spent:this.timeSpent,
      no_of_week_planned:0,
      week_flag:'C',planned:this.planned,completed:this.completed,closed:tskclose,
      tagId:this.weekTagId});

    }
    console.log("currentWeekPlanRows ", this.currentWeekPlanRows);
    
    this.fromDt="";
    this.toDt="";    
    this.taskTypeCode=[];
    this.plannedTimetoSpent="0";
    this.totalWeeksHrsSpent="0 [ 0 ]";
    this.completed="";
    this.planned="";
    this.totalHoursSpent="0";
    this.totalWeeksSpent="0";
    this.unplanned=false;
    this.timeSpent="0";
    this.closed=false;
  }

  //API used to save the next week plan
  saveNxtWeekPlan()
  {
    console.log("before save WSR call",this.currentWeekWSRSave);
    
    var sts=this.tickService.saveCurrWSR(this.currentWeekWSRSave);

    console.log("after save WSR call",sts);
    if(sts){
      alert("Current Week Plan Saved");
    }else{
      alert("Current Week Plan Save Failed!");
    }

      this.currentWeekWSRSave=[];
      this.currentWeekPlanRows=[];  
      
  }

  removeWSR(wsr:any)
  {
    if(confirm("Are you sure to delete " + wsr.ticketId + "?"))
    {
      var index=this.currentWeekPlanRows.indexOf(wsr);
      this.currentWeekWSRSave.splice(index,1);
      this.currentWeekPlanRows.splice(index,1);
    }
  }


  editWSR(wsrPlan:any)
  {

    console.log("edit wsr",wsrPlan);

    this.selEditIdx=this.currentWeekPlanRows.indexOf(wsrPlan);
    this.editMode=true;
    this.ticketID=wsrPlan.ticketId;
    this.summary=wsrPlan.summary;
    this.plannedTimetoSpent=wsrPlan.hours_planned;
    this.timeSpent=wsrPlan.time_spent;
    this.totalHoursSpent=wsrPlan.total_time_spent;
    this.totalWeeksSpent=wsrPlan.no_of_week_planned;
    this.fromDt=wsrPlan.fromDt;
    this.toDt=wsrPlan.toDt;
    this.taskTypeCode=wsrPlan.taskTypArr;
    this.unplanned=wsrPlan.isunplanned=='Y'?true:false;
    this.planned=wsrPlan.planned;
    this.completed=wsrPlan.completed;
    this.closed=wsrPlan.isclosed=='Y'?true:false;

    this.totalWeeksHrsSpent=wsrPlan.no_of_week_planned + " [ " + wsrPlan.total_time_spent + " ]";
    
    
  }

}
