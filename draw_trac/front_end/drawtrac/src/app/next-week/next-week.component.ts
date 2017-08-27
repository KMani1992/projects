import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
import * as globSymb from '../global'

@Component({
  selector: 'app-next-week',
  //directives: [FilterTicketComponent],
  templateUrl: './next-week.component.html',  
  styleUrls: ['./next-week.component.css']
})
export class NextWeekComponent implements OnInit {



taskType: Object[]=[];

totalWeeksHrsPlanned:String="0 [ 0 ]";

hoursSpent:string="0";
weeksSpent:string="0";
ticketID:string="";
summary:string="";
fromDt:string="";
toDt:string="";
nextWeekPlan:string="";
taskTypeCode:string[]=[];
plannedTimetoSpent:string="0";

nextWeekPlanRows:Object[]=[];

nextWeekWSRSave:Object[]=[];

errorMessage: string;

editMode:boolean;

selEditIdx:number;
  
  constructor(private tickService : TicketService) { }

  ngOnInit() 
  {

    this.tickService
        .getTaskType()
        .then(taskType => this.taskType = taskType,
        error => this.errorMessage=<any>error);
  }

  onSubmit(){
    
  }

  public handleEvent(wsrPlan:any)
  {
    console.debug(wsrPlan,"from filtered ticket");
   // console.debug(wsrPlan.total_time_spent,"wsrPlan.total_time_spent");
   // console.debug(wsrPlan.no_of_week_planned,"wsrPlan.no_of_week_planned");

   this.editMode=false;

    this.hoursSpent="0";
    this.weeksSpent="0";
    this.ticketID="";
    this.summary="";

    this.ticketID=wsrPlan.ticketId;
    this.summary=wsrPlan.summary;
    this.hoursSpent=wsrPlan.total_time_spent;
    this.weeksSpent=wsrPlan.no_of_week_planned;

    this.totalWeeksHrsPlanned=wsrPlan.no_of_week_planned + " [ " + wsrPlan.total_time_spent + " ]";
    
  }

  addPlan()
  {
    console.log(this.taskTypeCode,"this.taskTypeCode");
    console.log(this.taskTypeCode.join(","),"this.taskTypeCode join");

    console.log("this.editMode ", this.editMode);  
    console.log(this.selEditIdx,"this.selEditIdx");

    if(!this.editMode)
    {
      this.nextWeekPlanRows.push({ticketId:this.ticketID,
      summary:this.summary,fromDt:this.fromDt,toDt:this.toDt,timeSpent:this.hoursSpent,
      weekSpent:this.weeksSpent,taskTyp:this.taskTypeCode.join(","),plannedTime:this.plannedTimetoSpent,
      nextPlan:this.nextWeekPlan,taskTypArr:this.taskTypeCode});

      this.nextWeekWSRSave.push({ticketId:this.ticketID,from_date:this.fromDt,
      to_date:this.toDt,task_type:this.taskTypeCode.join(","),unplanned:'N',hours_planned:this.plannedTimetoSpent,
      total_time_spent:this.hoursSpent,no_of_week_planned:1,
      week_flag:'N',planned:this.nextWeekPlan});
    }
    else
    {      
      
      this.nextWeekPlanRows.splice(this.selEditIdx,1,{ticketId:this.ticketID,
      summary:this.summary,fromDt:this.fromDt,toDt:this.toDt,timeSpent:this.hoursSpent,
      weekSpent:this.weeksSpent,taskTyp:this.taskTypeCode.join(","),plannedTime:this.plannedTimetoSpent,
      nextPlan:this.nextWeekPlan,taskTypArr:this.taskTypeCode});

      this.nextWeekWSRSave.splice(this.selEditIdx,1,{ticketId:this.ticketID,from_date:this.fromDt,
      to_date:this.toDt,task_type:this.taskTypeCode.join(","),unplanned:'N',hours_planned:this.plannedTimetoSpent,
      total_time_spent:this.hoursSpent,no_of_week_planned:1,
      week_flag:'N',planned:this.nextWeekPlan});

    }
    
    this.fromDt="";
    this.toDt="";
    this.nextWeekPlan="";
    this.taskTypeCode=[];
    this.plannedTimetoSpent="0";
    this.totalWeeksHrsPlanned="0 [ 0 ]";
  }

  //API used to save the next week plan
  saveNxtWeekPlan()
  {
    console.log("before save WSR call",this.nextWeekWSRSave);
    
    var sts=this.tickService.saveNextWeekWSR(this.nextWeekWSRSave);

    console.log("after save WSR call",sts);
    if(sts){
      alert("Next Week Plan Saved");
    }else{
      alert("Next Week Plan Save Failed!");
    }

      this.nextWeekWSRSave=[];
      this.nextWeekPlanRows=[];  
  }

  removeWSR(wsr:any)
  {
    if(confirm("Are you sure to delete " + wsr.ticketId + "?"))
    {
      var index=this.nextWeekPlanRows.indexOf(wsr);
      this.nextWeekWSRSave.splice(index,1);
      this.nextWeekPlanRows.splice(index,1);
    }
  }


  editWSR(wsrPlan:any)
  {

    console.log("edit wsr",wsrPlan);

    this.selEditIdx=this.nextWeekPlanRows.indexOf(wsrPlan);
    this.editMode=true;
    this.ticketID=wsrPlan.ticketId;
    this.summary=wsrPlan.summary;
    this.hoursSpent=wsrPlan.timeSpent;
    this.weeksSpent=wsrPlan.weekSpent;
    this.fromDt=wsrPlan.fromDt;
    this.toDt=wsrPlan.toDt;
    this.taskTypeCode=wsrPlan.taskTypArr;
    this.totalWeeksHrsPlanned=wsrPlan.weekSpent + " [ " + wsrPlan.timeSpent + " ]";
    this.plannedTimetoSpent=wsrPlan.plannedTime;
    this.nextWeekPlan=wsrPlan.nextPlan;
    
    /*

    {ticketId:this.ticketID,
      summary:this.summary,fromDt:this.fromDt,toDt:this.toDt,timeSpent:this.hoursSpent,
      weekSpent:this.weeksSpent,taskTyp:this.taskTypeCode.join(","),plannedTime:this.plannedTimetoSpent,
      nextPlan:this.nextWeekPlan}
      */
  }

}
