import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as globalSymbol from "./global"


@Injectable()
export class TicketService {

  // hold the base URL
  private baseUrl: string = globalSymbol.baseURL;

  isAuthenticated:boolean =false;

  constructor(private http: Http) {
  }

  // API to get the components
  getComponents(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/components`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // API to get the ticket type
  getTicketType(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/ticketType`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // API to get the ticket type
  getTaskType(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/taskType`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  //getLastWeekTagId
  getLastWeekTagId(): Promise<Object> {
    return this.http.get(`${this.baseUrl}/getLastWeekTagId`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  //getLastWeekPlan
  getLastWeekPlan(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/getLWSRPlan`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // API to get the Milestone
  getMilestone(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/milestone`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // API to get the users
  getUser(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/user`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // API to get the priority type
  getPriority(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/priority`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  // API to get the headers
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // API used to extract data to json object array
  private extractData(res: Response) {
    console.log("res", res);
    let resbody = res.json() as Object[];
    console.log(resbody, "data");
    return resbody;
  }
  
  // API used to extract data to json object
  private extractObjectData(res: Response) {
    console.log("res", res);
    let resbody =null;
    if(res.text()){
      console.log("inside json check")
      resbody = res.json() as Object;
    }    
    console.log(resbody, "data");
    return resbody;
  }
  

  // API used to handle the error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  //API used to save the ticket
  saveTicket(obj:Object) : Object {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(JSON.stringify(obj),"is save tic");

    return this.http.post(`${this.baseUrl}/saveTicket`,
    JSON.stringify(obj), options)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe();
      //console.log("after post req");
  }

  // API to get the headers
  private getContentTypeHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  //API used to authenticate the user by userName & password
  authenticateUser(usercreds): Promise<Object>{

    var creds='userName=' + usercreds.userName + '&password=' + usercreds.password;

    return this.http.get(`${this.baseUrl}/authuser?` + creds, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractObjectData)
      .catch(this.handleError);
  }

  //API used to filter the tickets
  filterTickets(filterQryParam:String): Promise<Object[]>{    
    
    console.log("filterQryParam ",filterQryParam);

    return this.http.get(`${globalSymbol.baseURL}/getticket` 
    + filterQryParam, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractObjectData)
      .catch(this.handleError);    
  }


  // API to get the WSR plan of ticket ID
  getWSRPlan(ticketID:number): Promise<Object> 
  {
    
    var ticketQry='ticketID=' + ticketID;

    return this.http.get(`${this.baseUrl}/getWSR?` + ticketQry, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getMultiWSRPlan(qry:String): Promise<Object[]> 
  {
    
    var ticketQry='weekTagList=' + qry;

    return this.http.get(`${this.baseUrl}/getMultiWSR?` + ticketQry, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  

  getTotWeek(ticketID:number): Promise<Object> 
  {
    
    var ticketQry='ticketID=' + ticketID;

    return this.http.get(`${this.baseUrl}/getTotWeek?` + ticketQry, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getTotTime(ticketID:number): Promise<Object> 
  {
    
    var ticketQry='ticketID=' + ticketID;

    return this.http.get(`${this.baseUrl}/getTotTime?` + ticketQry, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

nextWeekWSR:Object[]=[];

  saveNextWeekWSR(arrayWSR:Object[])
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(JSON.stringify(arrayWSR),"save WSR");

    return this.http.post(`${this.baseUrl}/saveWSR`,
      JSON.stringify(arrayWSR), options)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe();
  }

  saveCurrWSR(arrayWSR:Object[])
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(JSON.stringify(arrayWSR),"save currWSR");

    return this.http.post(`${this.baseUrl}/saveCurWSR`,
      JSON.stringify(arrayWSR), options)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe();
  }


  getTagIdList(): Promise<Object[]> {
    return this.http.get(`${this.baseUrl}/getTagIdList`, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getMultiWeekPlan(filterQryParam:String): Promise<Object[]>{    
    
    console.log("filterQryParam ",filterQryParam);

    return this.http.get(`${globalSymbol.baseURL}/getticket` 
    + filterQryParam, { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractObjectData)
      .catch(this.handleError);    
  }

  getTotTicket(): Promise<Object> 
  {
    

    return this.http.get(`${this.baseUrl}/getTotTicket` , { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getTotActTicket(): Promise<Object> 
  {
    

    return this.http.get(`${this.baseUrl}/getTotActTicket` , { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getTotCompTicket(): Promise<Object> 
  {
    

    return this.http.get(`${this.baseUrl}/getTotCompTicket` , { headers: this.getHeaders() })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

}
