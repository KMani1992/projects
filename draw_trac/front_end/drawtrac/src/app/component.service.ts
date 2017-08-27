import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Component } from "./component"
import * as globalSymbol from "./global"


@Injectable()
export class ComponentService {

  private baseUrl: string = globalSymbol.baseURL;

  constructor(private http: Http) {
  }

  getComponents(): Promise<Component[]> {
    return this.http.get(`${this.baseUrl}/components`, {headers: this.getHeaders()})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  /*  
    save(person: Component): Observable<Response> {
      // this won't actually work because the StarWars API doesn't
      // is read-only. But it would look like this:
      return this.http
        .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), { headers: this.getHeaders() });
    }
  */

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


  private extractData(res: Response) {

    console.log("res",res);
    let resbody =res.json() as Component[];
    
    console.log(resbody,"data");
    return resbody;
  }

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

function mapPersons(response: Response): Component[] {
  // uncomment to simulate error:
  // throw new Error('ups! Force choke!');


  console.log("inside map");
  console.log(response.json());
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toPerson);
}

function toPerson(res: any): Component {
  console.log("inside toperson");
  console.log(res);
  let person = <Component>({
    component_id: res.component_id,
    component_type: res.component_type,
    active: res.active
  });
  console.log('Parsed component:', person);
  return person;
}





