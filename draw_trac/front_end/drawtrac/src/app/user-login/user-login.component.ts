import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {TicketService} from '../ticket.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  authUser={
    userName:'',
    password:''
  };

  user: Object;

  errorMessage :string;

  userLogin:FormGroup;

  constructor(private _userLogin:FormBuilder,
  private tickSer:TicketService,
  private route:Router) { }

  ngOnInit() {

    this.userLogin=this._userLogin.group({
      userName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(200)]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(200)]]            
    });
  }

  onSubmit(){
    console.log(this.userLogin.value);   
  }


login(){
  this.errorMessage='';
    this.tickSer
          .authenticateUser(this.authUser)
          .then(user => {
            this.user = user  
            console.log("auth user",user);       
            if(null!=this.user){                        
              console.log("inside if auth",user);       
              window.localStorage.setItem("auth_key",this.authUser.userName);
              console.log("bf nav auth");       
              this.route.navigate(['']);
              console.log("af nav auth");       
            }else{
              this.errorMessage="Login Failed, Please Check the UserName and Password";
              console.log("invalid user");
              window.localStorage.removeItem("auth_key");
            }

          },
          error => this.errorMessage=<any>error);
}

}

