import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
import * as globSymb from '../global'

@Component({
  selector: 'app-filter-ticket',
  templateUrl: './filter-ticket.component.html',
  styleUrls: ['./filter-ticket.component.css']
})
export class FilterTicketComponent implements OnInit {


  @Input() visibleSelectOpt : string;

  @Output('selTicket') selectedTicket=new EventEmitter<Object>();

  selectedTickObj:Object;

  components: Object[]=[];

  ticketType: Object[]=[];  

  milestones: Object[]=[];

  users: Object[]=[];

  priorities: Object[]=[];


  viewTicket:FormGroup;
  
  constructor(private _viewTicket:FormBuilder,
  private tickService : TicketService) { }

  errorMessage: string;


  ticketView:Object[]=[];

  wsrPlan: Object={};

  totNoOfHrsPlan:object={};
  totNoOfWeekPlan:object={};
  

//send selected ticket to parant component
public sendSelTicket(selTicket:any)
{

this.tickService
        .getTotWeek(selTicket.ticket_id)
        .then(totNoOfWeekPlan => this.totNoOfWeekPlan = totNoOfWeekPlan,
        error => this.errorMessage=<any>error);

this.tickService
        .getTotTime(selTicket.ticket_id)
        .then(totNoOfHrsPlan => this.totNoOfHrsPlan = totNoOfHrsPlan,
        error => this.errorMessage=<any>error);


  this.wsrPlan["ticketId"]=selTicket.ticket_id;
  this.wsrPlan["summary"]=selTicket.summary;
  this.wsrPlan["total_time_spent"]=this.totNoOfHrsPlan;
  this.wsrPlan["no_of_week_planned"]=this.totNoOfWeekPlan;
  

  this.selectedTicket.emit(this.wsrPlan);
}

  ngOnInit() {
       
    this.tickService
        .getComponents()
        .then(comp => this.components = comp,
        error => this.errorMessage=<any>error);
    
    this.tickService
        .getTicketType()
        .then(ttype => this.ticketType = ttype,
        error => this.errorMessage=<any>error);
        
    this.tickService
        .getMilestone()
        .then(milestone => this.milestones = milestone,
        error => this.errorMessage=<any>error);

    this.tickService
        .getUser()
        .then(user => this.users = user,
        error => this.errorMessage=<any>error);
    
    console.log("isnside on init",this.ticketType);

    this.tickService
        .getPriority()
        .then(prioroity => this.priorities = prioroity,
        error => this.errorMessage=<any>error);

    this.viewTicket=this._viewTicket.group({      
      component:[''],
      ticket_type:[''],
      owner:[''],
      priority:[''],
      target_date:[''],
      milestone:[''],
      tskclosed:false
    });

    console.log("visibleSelectOpt",this.visibleSelectOpt);

    
  }

  onSubmit(){

var tmpParam;
var queryParam;
      console.log("component val",this.viewTicket.get("component").value);
      
      var component=this.viewTicket.get("component").value;

      var tickType=this.viewTicket.get("ticket_type").value;

      var owner=this.viewTicket.get("owner").value;

      var priority=this.viewTicket.get("priority").value;

      var targetDate=this.viewTicket.get("target_date").value;

      var milestone=this.viewTicket.get("milestone").value;

console.log("this.viewTicket.get tskclosed" , this.viewTicket.get("tskclosed").value)
      

      queryParam=globSymb.qryParamHead.concat
      ("component=",component.join(","),globSymb.qryParamDelimit,
      "ticketType=",tickType.join(","),globSymb.qryParamDelimit,
      "owner=",owner.join(","),globSymb.qryParamDelimit,
      "priority=",priority.join(","),globSymb.qryParamDelimit,
      "targetDate=",targetDate,globSymb.qryParamDelimit,
      "milestone=",milestone.join(","),globSymb.qryParamDelimit,
      "closed=",this.viewTicket.get("tskclosed").value ? '0':'1');            

      console.log("queryParam ",queryParam);      
    
      this.tickService.filterTickets(queryParam)
      .then(ticketView => {
            this.ticketView = ticketView         
            if(null!=this.ticketView){                        
              console.log("filtered result ",ticketView);        
            }else{
              // Do Nothing
            }
          },
          error => this.errorMessage=<any>error);
  }

}
