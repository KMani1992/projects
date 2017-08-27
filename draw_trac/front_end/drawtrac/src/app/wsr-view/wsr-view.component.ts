import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
import * as globSymb from '../global'

@Component({
  selector: 'app-wsr-view',
  templateUrl: './wsr-view.component.html',
  styleUrls: ['./wsr-view.component.css']
})
export class WsrViewComponent implements OnInit {

  errorMessage:String="";
  wsrTagId:Object[]=[];

  selWeekTag:number[]=[];

  wsrView:Object[]=[];

  constructor(private tickService : TicketService) { }

  ngOnInit() 
  {
    this.tickService
        .getTagIdList()
        .then(wsrTagId => this.wsrTagId = wsrTagId,
        error => this.errorMessage=<any>error);
  }


viewWSR()
{
console.log("selected tag",this.selWeekTag.join(","));

  this.tickService.getMultiWSRPlan(this.selWeekTag.join(","))
      .then(wsrView => {
            this.wsrView = wsrView         
            if(null!=this.wsrView){                        
              console.log("filtered result ",wsrView);        
            }else{
              // Do Nothing
            }
          },error => this.errorMessage=<any>error);

}

}
