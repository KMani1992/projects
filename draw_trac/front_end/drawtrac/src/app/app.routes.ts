import {Routes} from "@angular/router";
import {DashBoardComponent} from "app/dash-board/dash-board.component";
import {CurrentWeekComponent} from "app/current-week/current-week.component";
import {NextWeekComponent} from "app/next-week/next-week.component";
import {WsrViewComponent} from "app/wsr-view/wsr-view.component";
import {CreateTicketComponent} from "app/create-ticket/create-ticket.component";
import {ViewTicketComponent} from "app/view-ticket/view-ticket.component";
import {UserLoginComponent} from "app/user-login/user-login.component";
import { AuthManager } from './authManager';

export const AppRoute:Routes=[
    {
        path:'login',
        component:UserLoginComponent
    },
    {
        path:'',
        component:DashBoardComponent,
        canActivate:[AuthManager]
        
    },
    {
        path:'home',
        component:DashBoardComponent,
        canActivate:[AuthManager]
    },
    {
        path:'currentweek',
        component:CurrentWeekComponent,
        canActivate:[AuthManager]
    },
    {
        path:'nextweek',
        component:NextWeekComponent,
        canActivate:[AuthManager]
    },
    {
        path:'viewwsr',
        component:WsrViewComponent,
        canActivate:[AuthManager]
    },
    {
        path:'createticket',
        component:CreateTicketComponent,
        canActivate:[AuthManager]
    },
    {
        path:'viewticket',
        component:ViewTicketComponent,
        canActivate:[AuthManager]
    }
];
