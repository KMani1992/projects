import { Component,OnInit } from '@angular/core';
import {PersonService} from './person.service';
import {ComponentService} from "./component.service"





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[PersonService,ComponentService]
})

export class AppComponent implements OnInit {
  title = 'Welcome DRAW Trac!';
person:any;
constructor(private _personser:PersonService){
  
}

ngOnInit(){
  

  
  
}

test(){

  this._personser.getAllPerson()
  .subscribe
  {
    person=> (this.person=JSON.stringify(person))
    error => console.log(error);

  }

}


}
