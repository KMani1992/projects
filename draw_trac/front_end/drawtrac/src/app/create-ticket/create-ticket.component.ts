import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  components: Object[]=[];

  ticketType: Object[]=[];

  milestones: Object[]=[];

  users: Object[]=[];

  priorities: Object[]=[];


  createTicket:FormGroup;
  
  constructor(private _createTicket:FormBuilder,
  private tickService : TicketService) { }

  errorMessage: string;

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

    

    this.createTicket=this._createTicket.group({
      summary:['',[Validators.required,Validators.minLength(20),Validators.maxLength(100)]],
      description:['',[Validators.required,Validators.minLength(25),Validators.maxLength(10000)]],      
      component:['',[Validators.required]],
      ticket_type:['',[Validators.required]],
      owner:['',[Validators.required]],
      cc:['',[Validators.required]],            
      keywords:[''],
      priority:['',[Validators.required]],
      target_date:['',Validators.required],
      milestone:['',Validators.required]
    });

    console.log("before call");
    
  }

  onSubmit(){
    console.log(this.createTicket.value);
    var sts=this.tickService.saveTicket(this.createTicket.value);

    console.log("after save call",sts);

    if(0==sts)
    {
      alert("Ticket Creation Failed!");
    }
    else
    {
      alert("Ticket Created");
      
    }
  }

}
