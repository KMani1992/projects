import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {MaterialModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatepickerModule } from 'angular2-material-datepicker'


import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CurrentWeekComponent } from './current-week/current-week.component';
import { AppRoute } from './app.routes';
import { AuthManager } from './authManager';
import {TicketService} from "./ticket.service"

import 'hammerjs';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { NextWeekComponent } from './next-week/next-week.component';
import { WsrViewComponent } from './wsr-view/wsr-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FilterTicketComponent } from './filter-ticket/filter-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    DashBoardComponent,
    CurrentWeekComponent,
    CreateTicketComponent,
    ViewTicketComponent,
    EditTicketComponent,
    NextWeekComponent,
    WsrViewComponent,    
    UserLoginComponent, FilterTicketComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DatepickerModule,
    RouterModule.forRoot(AppRoute)    
  ],
  providers: [AuthManager,TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
