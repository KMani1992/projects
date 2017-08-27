import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import './app.module'
import {Observable}from 'rxjs/Rx'
@Injectable()
export class PersonService {

   _url:string = 'http://date.jsontest.com';

error:any;
  //="http://localhost:8080/persons/1";
constructor(private _http:Http){

}

getAllPerson(){
  console.log("inside");
  return this._http.get(this._url)
  .map((res:Response) => res.json());
  }
  

}
