import {Injectable} from '@angular/core';
import {CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot,Router} from '@angular/router';
import {Observable} from "rxjs/Rx";
import { TicketService } from './ticket.service';

@Injectable()
export class AuthManager implements CanActivate {        
        
        
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
        | Observable<boolean> | Promise<boolean> {

            console.log("before already" ,route.url.length)
            
            if(route.url.length >0 && route.url[0].path=='login'){
                console.log("inside already")
                if(window.localStorage.getItem('auth_key')){
                    console.log("you are already logged in");                    
                    return false;
                }
                 
            }
            

            if(window.localStorage.getItem('auth_key')){
                return true;
            }


            

            console.log('you must be logged in');
            this.rout.navigate(['/login']);
            return false;
           
        }


     
     constructor(private rout:Router,private authSer:TicketService){}

      
}