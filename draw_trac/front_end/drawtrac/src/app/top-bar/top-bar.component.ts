import { Component, OnInit } from '@angular/core';
import * as myGlobal from '../global'
import {Router} from '@angular/router'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  userName:String;
  constructor(private route:Router) { }

  ngOnInit() {
    this.userName = window.localStorage.getItem(myGlobal.authKey);
    console.log("user Name",this.userName);
  }

  logOut()
  {
    window.localStorage.removeItem(myGlobal.authKey);
    this.route.navigate(['login']);
  }

}
