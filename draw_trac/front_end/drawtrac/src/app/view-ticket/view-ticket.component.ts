import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  viewTicket:FormGroup;
  
  constructor(private tickService : TicketService) { }

  errorMessage: string;

  ngOnInit() {}
}