import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
import * as globSymb from '../global'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  errorMessage:String="";
  
  totTicket:any=0;
  totAtiveTicket:any=0;
  totCompTicket:any=0;
  
  constructor(private tickService : TicketService) { }

  ngOnInit() 
  {
        this.tickService
        .getTotTicket()
        .then(totTicket => this.totTicket = totTicket,
        error => this.errorMessage=<any>error);

        this.tickService
        .getTotActTicket()
        .then(totAtiveTicket => this.totAtiveTicket = totAtiveTicket,
        error => this.errorMessage=<any>error);

        this.tickService
        .getTotCompTicket()
        .then(totCompTicket => this.totCompTicket = totCompTicket,
        error => this.errorMessage=<any>error);
  }


}
