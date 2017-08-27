webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 107;


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(127);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_service__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_personser) {
        this._personser = _personser;
        this.title = 'Welcome DRAW Trac!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.test = function () {
        var _this = this;
        this._personser.getAllPerson()
            .subscribe;
        {
            (function (person) { return (_this.person = JSON.stringify(person)); });
            (function (error) { return console.log(error); });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */], __WEBPACK_IMPORTED_MODULE_2__component_service__["a" /* ComponentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__person_service__["a" /* PersonService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_dash_board_dash_board_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_current_week_current_week_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_next_week_next_week_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_wsr_view_wsr_view_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_create_ticket_create_ticket_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_view_ticket_view_ticket_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_user_login_user_login_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authManager__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoute; });








var AppRoute = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6_app_user_login_user_login_component__["a" /* UserLoginComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0_app_dash_board_dash_board_component__["a" /* DashBoardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0_app_dash_board_dash_board_component__["a" /* DashBoardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    },
    {
        path: 'currentweek',
        component: __WEBPACK_IMPORTED_MODULE_1_app_current_week_current_week_component__["a" /* CurrentWeekComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    },
    {
        path: 'nextweek',
        component: __WEBPACK_IMPORTED_MODULE_2_app_next_week_next_week_component__["a" /* NextWeekComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    },
    {
        path: 'viewwsr',
        component: __WEBPACK_IMPORTED_MODULE_3_app_wsr_view_wsr_view_component__["a" /* WsrViewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    },
    {
        path: 'createticket',
        component: __WEBPACK_IMPORTED_MODULE_4_app_create_ticket_create_ticket_component__["a" /* CreateTicketComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    },
    {
        path: 'viewticket',
        component: __WEBPACK_IMPORTED_MODULE_5_app_view_ticket_view_ticket_component__["a" /* ViewTicketComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__authManager__["a" /* AuthManager */]]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentService = (function () {
    function ComponentService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* baseURL */];
    }
    ComponentService.prototype.getComponents = function () {
        return this.http.get(this.baseUrl + "/components", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    /*
      save(person: Component): Observable<Response> {
        // this won't actually work because the StarWars API doesn't
        // is read-only. But it would look like this:
        return this.http
          .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), { headers: this.getHeaders() });
      }
    */
    ComponentService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    ComponentService.prototype.extractData = function (res) {
        console.log("res", res);
        var resbody = res.json();
        console.log(resbody, "data");
        return resbody;
    };
    ComponentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ComponentService;
}());
ComponentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ComponentService);

function mapPersons(response) {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');
    console.log("inside map");
    console.log(response.json());
    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toPerson);
}
function toPerson(res) {
    console.log("inside toperson");
    console.log(res);
    var person = ({
        component_id: res.component_id,
        component_type: res.component_type,
        active: res.active
    });
    console.log('Parsed component:', person);
    return person;
}
var _a;
//# sourceMappingURL=component.service.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTicketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditTicketComponent = (function () {
    function EditTicketComponent() {
    }
    EditTicketComponent.prototype.ngOnInit = function () {
    };
    return EditTicketComponent;
}());
EditTicketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-edit-ticket',
        template: __webpack_require__(199),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], EditTicketComponent);

//# sourceMappingURL=edit-ticket.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterTicketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterTicketComponent = (function () {
    function FilterTicketComponent(_viewTicket, tickService) {
        this._viewTicket = _viewTicket;
        this.tickService = tickService;
        this.selectedTicket = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.components = [];
        this.ticketType = [];
        this.milestones = [];
        this.users = [];
        this.priorities = [];
        this.ticketView = [];
        this.wsrPlan = {};
        this.totNoOfHrsPlan = {};
        this.totNoOfWeekPlan = {};
    }
    //send selected ticket to parant component
    FilterTicketComponent.prototype.sendSelTicket = function (selTicket) {
        var _this = this;
        this.tickService
            .getTotWeek(selTicket.ticket_id)
            .then(function (totNoOfWeekPlan) { return _this.totNoOfWeekPlan = totNoOfWeekPlan; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getTotTime(selTicket.ticket_id)
            .then(function (totNoOfHrsPlan) { return _this.totNoOfHrsPlan = totNoOfHrsPlan; }, function (error) { return _this.errorMessage = error; });
        this.wsrPlan["ticketId"] = selTicket.ticket_id;
        this.wsrPlan["summary"] = selTicket.summary;
        this.wsrPlan["total_time_spent"] = this.totNoOfHrsPlan;
        this.wsrPlan["no_of_week_planned"] = this.totNoOfWeekPlan;
        this.selectedTicket.emit(this.wsrPlan);
    };
    FilterTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickService
            .getComponents()
            .then(function (comp) { return _this.components = comp; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getTicketType()
            .then(function (ttype) { return _this.ticketType = ttype; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getMilestone()
            .then(function (milestone) { return _this.milestones = milestone; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getUser()
            .then(function (user) { return _this.users = user; }, function (error) { return _this.errorMessage = error; });
        console.log("isnside on init", this.ticketType);
        this.tickService
            .getPriority()
            .then(function (prioroity) { return _this.priorities = prioroity; }, function (error) { return _this.errorMessage = error; });
        this.viewTicket = this._viewTicket.group({
            component: [''],
            ticket_type: [''],
            owner: [''],
            priority: [''],
            target_date: [''],
            milestone: [''],
            tskclosed: false
        });
        console.log("visibleSelectOpt", this.visibleSelectOpt);
    };
    FilterTicketComponent.prototype.onSubmit = function () {
        var _this = this;
        var tmpParam;
        var queryParam;
        console.log("component val", this.viewTicket.get("component").value);
        var component = this.viewTicket.get("component").value;
        var tickType = this.viewTicket.get("ticket_type").value;
        var owner = this.viewTicket.get("owner").value;
        var priority = this.viewTicket.get("priority").value;
        var targetDate = this.viewTicket.get("target_date").value;
        var milestone = this.viewTicket.get("milestone").value;
        console.log("this.viewTicket.get tskclosed", this.viewTicket.get("tskclosed").value);
        queryParam = __WEBPACK_IMPORTED_MODULE_3__global__["b" /* qryParamHead */].concat("component=", component.join(","), __WEBPACK_IMPORTED_MODULE_3__global__["c" /* qryParamDelimit */], "ticketType=", tickType.join(","), __WEBPACK_IMPORTED_MODULE_3__global__["c" /* qryParamDelimit */], "owner=", owner.join(","), __WEBPACK_IMPORTED_MODULE_3__global__["c" /* qryParamDelimit */], "priority=", priority.join(","), __WEBPACK_IMPORTED_MODULE_3__global__["c" /* qryParamDelimit */], "targetDate=", targetDate, __WEBPACK_IMPORTED_MODULE_3__global__["c" /* qryParamDelimit */], "milestone=", milestone.join(","), __WEBPACK_IMPORTED_MODULE_3__global__["c" /* qryParamDelimit */], "closed=", this.viewTicket.get("tskclosed").value ? '0' : '1');
        console.log("queryParam ", queryParam);
        this.tickService.filterTickets(queryParam)
            .then(function (ticketView) {
            _this.ticketView = ticketView;
            if (null != _this.ticketView) {
                console.log("filtered result ", ticketView);
            }
            else {
                // Do Nothing
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return FilterTicketComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], FilterTicketComponent.prototype, "visibleSelectOpt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])('selTicket'),
    __metadata("design:type", Object)
], FilterTicketComponent.prototype, "selectedTicket", void 0);
FilterTicketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-filter-ticket',
        template: __webpack_require__(200),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */]) === "function" && _b || Object])
], FilterTicketComponent);

var _a, _b;
//# sourceMappingURL=filter-ticket.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonService = (function () {
    //="http://localhost:8080/persons/1";
    function PersonService(_http) {
        this._http = _http;
        this._url = 'http://date.jsontest.com';
    }
    PersonService.prototype.getAllPerson = function () {
        console.log("inside");
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    return PersonService;
}());
PersonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PersonService);

var _a;
//# sourceMappingURL=person.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-side-bar',
        template: __webpack_require__(202),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], SideBarComponent);

//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopBarComponent = (function () {
    function TopBarComponent(route) {
        this.route = route;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        this.userName = window.localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__global__["d" /* authKey */]);
        console.log("user Name", this.userName);
    };
    TopBarComponent.prototype.logOut = function () {
        window.localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_1__global__["d" /* authKey */]);
        this.route.navigate(['login']);
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-top-bar',
        template: __webpack_require__(203),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], TopBarComponent);

var _a;
//# sourceMappingURL=top-bar.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "body{\n    color: #337ab7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".createtcket-form{\n  width: auto;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.half-width {\n  width: 50%;\n}\n\n.topMargin{\n  margin-top: 25px;\n}\n\n.topMargin_sm{\n  margin-top: 15px;\n}\n\n.targetDatelbl{\n  color: #999;\n}\n\n.redbg{\n\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".nextweek-plan{\n  width: auto;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.half-width {\n  width: 50%;\n}\n\n.topMargin{\n  margin-top: 25px;\n}\n\n.topMargin_sm{\n  margin-top: 15px;\n}\n\n.targetDatelbl{\n  color: #999;\n}\n\n.redbg{\n\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".createtcket-form{\n  width: auto;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.half-width {\n  width: 50%;\n}\n\n.topMargin{\n  margin-top: 25px;\n}\n\n.topMargin_sm{\n  margin-top: 15px;\n}\n\n.targetDatelbl{\n  color: #999;\n}\n\n.redbg{\n\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".nextweek-plan{\n  width: auto;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.half-width {\n  width: 50%;\n}\n\n.topMargin{\n  margin-top: 25px;\n}\n\n.topMargin_sm{\n  margin-top: 15px;\n}\n\n.targetDatelbl{\n  color: #999;\n}\n\n.redbg{\n\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".side-nav>li>a {\n    color: #337ab7;\n    border-bottom: 1px solid #e7e7e7;\n}\n\n.side-nav>li>a:hover {\n    \n    background-color: #e7e7e7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".navbar-brand{\n  \n    color: #777;\n   \n}\n\n.navbar-brand:hover {\n    \n    color: #333;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".half-width{\n    max-width: 60%;\n}\n\n\n.full-width {\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".nextweek-plan{\n  width: auto;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.half-width {\n  width: 50%;\n}\n\n.topMargin{\n  margin-top: 25px;\n}\n\n.topMargin_sm{\n  margin-top: 15px;\n}\n\n.targetDatelbl{\n  color: #999;\n}\n\n.redbg{\n\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<script src=\"node_modules/angular2/bundles/http.dev.js\"></script>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-top-bar></app-top-bar>\n<md-card class=\"reatetcket-form\">\n  <h3>Create New Ticket</h3>\n  <form [formGroup]=\"createTicket\" class=\"form-group\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <md-input-container class=\"full-width\">\n          <input mdInput #summaryRef placeholder=\"Bike N.o - Summary\" formControlName=\"summary\">\n        </md-input-container>\n        <div *ngIf=\"createTicket.controls['summary'].touched && \n        createTicket.controls['summary'].dirty && \n        createTicket.controls['summary'].invalid\">\n          <div *ngIf=\"createTicket.controls['summary'].hasError('required')\" class=\"alert alert-danger\">\n            Please Enter Summary\n          </div>\n          <div *ngIf=\"createTicket.controls['summary'].hasError('minlength')\" class=\"alert alert-danger\">\n            Please enter atlease 20 characters of bike n.o / summary\n          </div>\n          <div *ngIf=\"createTicket.controls['summary'].hasError('maxlength')\" class=\"ale                                                                                                                                                                                                                                                                                                                                                                                                                                                                     rt alert-danger\">\n            Summary cant exceed 100 characters\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <md-input-container class=\"full-width\">\n          <textarea mdInput rows=\"5\" placeholder=\"Description\" formControlName=\"description\"></textarea>\n        </md-input-container>\n        <div *ngIf=\"createTicket.controls['description'].touched && \n        createTicket.controls['description'].dirty && \n        createTicket.controls['description'].invalid\">\n          <div *ngIf=\"createTicket.controls['description'].hasError('required')\" class=\"alert alert-danger\">\n            Please Enter Discription\n          </div>\n          <div *ngIf=\"createTicket.controls['description'].hasError('minlength')\" class=\"alert alert-danger\">\n            Please enter atlease 25 characters of summary\n          </div>\n          <div *ngIf=\"createTicket.controls['description'].hasError('maxlength')\" class=\"alert alert-danger\">\n            Description cant exceed 10000 characters\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 topMargin\">\n        <md-select placeholder=\"Component\" class=\"full-width\" formControlName=\"component\">\n          <md-option *ngFor=\"let comp of components\" [value]=\"comp.component_id\">\n            {{ comp.component_type }}\n          </md-option>\n        </md-select>\n        <div *ngIf=\"createTicket.controls['component'].touched && \n        createTicket.controls['component'].dirty && \n        createTicket.controls['component'].invalid\">\n          <div *ngIf=\"createTicket.controls['component'].hasError('required')\" class=\"alert alert-danger\">\n            Please Choose Component\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 topMargin\">\n        <md-select placeholder=\"Ticket Type\" class=\"full-width\" formControlName=\"ticket_type\">\n          <md-option *ngFor=\"let ticktyp of ticketType\" [value]=\"ticktyp.ticket_type_id\">\n            {{ ticktyp.ticket_type }}\n          </md-option>\n        </md-select>\n        <div *ngIf=\"createTicket.controls['ticket_type'].touched && \n        createTicket.controls['ticket_type'].dirty && \n        createTicket.controls['ticket_type'].invalid\">\n          <div *ngIf=\"createTicket.controls['ticket_type'].hasError('required')\" class=\"alert alert-danger\">\n            Please Choose Ticket Type\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 topMargin\">\n        <md-select placeholder=\"Owner\" class=\"full-width \" formControlName=\"owner\">\n          <md-option *ngFor=\"let user of users\" [value]=\"user.user_id\">\n            {{ user.userName }}\n          </md-option>\n        </md-select>\n        <div *ngIf=\"createTicket.controls['owner'].touched && \n        createTicket.controls['owner'].dirty && \n        createTicket.controls['owner'].invalid\">\n          <div *ngIf=\"createTicket.controls['owner'].hasError('required')\" class=\"alert alert-danger\">\n            Please Choose Owner\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 topMargin\">\n        <md-select multiple placeholder=\"CC\" class=\"full-width\" formControlName=\"cc\">\n          <md-option *ngFor=\"let user of users\" [value]=\"user.user_id\">\n            {{ user.userName }}\n          </md-option>\n        </md-select>\n        <div *ngIf=\"createTicket.controls['cc'].touched && \n        createTicket.controls['cc'].dirty && \n        createTicket.controls['cc'].invalid\">\n          <div *ngIf=\"createTicket.controls['cc'].hasError('required')\" class=\"alert alert-danger\">\n            Please Choose CC Peoples\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 topMargin_sm\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Keywords\" formControlName=\"keywords\">\n        </md-input-container>\n      </div>\n      <div class=\"col-md-6 topMargin\">\n        <md-select placeholder=\"Priority\" class=\"full-width\" formControlName=\"priority\">\n          <md-option *ngFor=\"let pri of priorities\" [value]=\"pri.priority_id\">\n            {{ pri.priority_type }}\n          </md-option>\n        </md-select>\n        <div *ngIf=\"createTicket.controls['priority'].touched && \n        createTicket.controls['priority'].dirty && \n        createTicket.controls['priority'].invalid\">\n          <div *ngIf=\"createTicket.controls['priority'].hasError('required')\" class=\"alert alert-danger\">\n            Please Choose Ticket Type\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Target Date\" type=\"date\" formControlName=\"target_date\">\n        </md-input-container>\n        <div *ngIf=\"createTicket.controls['target_date'].touched && \n        createTicket.controls['target_date'].dirty && \n        createTicket.controls['target_date'].invalid\">\n          <div *ngIf=\"createTicket.controls['target_date'].hasError('required')\" class=\"alert alert-danger\">\n            Please Enter Target Date\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 topMargin\">\n        <md-select placeholder=\"Milstone\" class=\"full-width\" formControlName=\"milestone\">\n          <md-option *ngFor=\"let milestone of milestones\" [value]=\"milestone.milestone_id\">\n            {{ milestone.milestone_type }}\n          </md-option>\n        </md-select>\n        <div *ngIf=\"createTicket.controls['milestone'].touched && \n        createTicket.controls['milestone'].dirty && \n        createTicket.controls['milestone'].invalid\">\n          <div *ngIf=\"createTicket.controls['milestone'].hasError('required')\" class=\"alert alert-danger\">\n            Please Choose Milestone\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 topMargin\">\n        <button type=\"submit\" [disabled]=\"!createTicket.valid\" md-raised-button>Create Ticket</button>\n      </div>\n    </div>\n  </form>\n  <div class=\"full-width alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n</md-card>\n</div>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-top-bar></app-top-bar>\n  <app-filter-ticket [visibleSelectOpt]=\"1\" (selTicket)='handleEvent($event)'></app-filter-ticket> \n  <md-card class=\"nextweek-plan\">\n  <h3>Plan Ticket</h3>  \n    <div class=\"row\">\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"From Date\" [(ngModel)]=\"fromDt\" type=\"date\">\n        </md-input-container>\n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"To Date\" [(ngModel)]=\"toDt\" type=\"date\">\n        </md-input-container>\n      </div>      \n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple placeholder=\"Task Type\" [(ngModel)]=\"taskTypeCode\" class=\"full-width\">\n          <md-option *ngFor=\"let task of taskType\" [value]=\"task.task_type_id\">\n            {{ task.task_type_name }}\n          </md-option>\n        </md-select>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Total Weeks [ Hours ]  Spent\" [(ngModel)]='totalWeeksHrsSpent' disabled>\n        </md-input-container>\n      </div>      \n    </div>  \n    \n    <div class=\"row\">      \n\n      <div class=\"col-md-3 topMargin\">        \n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Planned Time\" [(ngModel)]=\"plannedTimetoSpent\">\n        </md-input-container>\n      </div>\n\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Time Spent\" [(ngModel)]=\"timeSpent\">\n        </md-input-container>\n      </div>      \n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <textarea mdInput placeholder=\"Planned\" [(ngModel)]=\"planned\"></textarea>\n        </md-input-container>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <textarea mdInput placeholder=\"Completed\" [(ngModel)]=\"completed\"></textarea>\n        </md-input-container>        \n      </div>      \n    </div>\n    <div class=\"row\">      \n      <div class=\"col-md-3 topMargin\">\n         <md-checkbox class=\"full-width\" [(ngModel)]=\"unplanned\">Unplanned</md-checkbox>\n      </div>\n      <div class=\"col-md-3 topMargin\">\n         <md-checkbox class=\"full-width\" [(ngModel)]=\"closed\">Closed</md-checkbox>\n      </div>\n      <div class=\"col-md-6 topMargin\">\n          <button md-raised-button class=\"full-width\" (click)=\"addPlan()\" >Update to Plan</button>\n      </div>\n    </div>\n  </md-card>\n  <md-card>\n  <h4>Current Week #({{weekTagId}}) Plan</h4>\n  <div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>#Ticket ID</th>\n      <th>Bike N.o - Summary</th>\n      <th>From</th>\n      <th>To</th>      \n      <th>Hrs Planned </th>\n      <th>Hrs Spent</th>\n      <th>Tot Hrs Spent Prev</th>\n      <th>Tot Weeks Spent</th>\n      <th>Task Types</th>\n      <th>Is Unplanned</th>\n      <th>Is Closed</th>\n      <th>Planned</th>\n      <th>Completed</th>\n      <th>Option</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let currWeekPlan of currentWeekPlanRows\">\n        <td>{{currWeekPlan.ticketId}}</td>\n        <td>{{currWeekPlan.summary}}</td>\n        <td>{{currWeekPlan.fromDt}}</td>\n        <td>{{currWeekPlan.toDt}}</td>      \n        <td>{{currWeekPlan.hours_planned}}</td>  \n        <td>{{currWeekPlan.time_spent}}</td>\n        <td>{{currWeekPlan.total_time_spent}}</td>        \n        <td>{{currWeekPlan.no_of_week_planned}}</td>\n        <td>{{currWeekPlan.task_type}}</td>\n        <td>{{currWeekPlan.isunplanned}}</td>\n        <td>{{currWeekPlan.isclosed}}</td>\n        <td>{{currWeekPlan.planned}}</td>\n        <td>{{currWeekPlan.completed}}</td>\n        <td><span><a (click)=\"editWSR(currWeekPlan)\">Edit</a>\n        </span> | <span><a (click)=\"removeWSR(currWeekPlan)\">Remove</a></span></td>\n      </tr>\n    </tbody>\n  </table>  \n</div>\n<div class=\"topMargin\">\n    <button md-raised-button class=\"full-width\" (click)=\"saveNxtWeekPlan()\" >Save Current Week Plan</button>\n</div>\n</md-card>\n</div>\n\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-top-bar></app-top-bar>\n        <div id=\"page-wrapper\">\n\n            <div class=\"container-fluid\">\n\n                <!-- Page Heading -->\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <h1 class=\"page-header\">\n                            Current <small>Status Overview</small>\n                        </h1>\n                        <ol class=\"breadcrumb\">\n                            <li class=\"active\">\n                                <i class=\"fa fa-dashboard\"></i> Task Status\n                            </li>\n                        </ol>\n                    </div>\n                </div>\n                <!-- /.row -->\n\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"panel panel-primary\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-3\">\n                                        <i class=\"fa fa-tasks fa-5x\"></i>\n                                    </div>\n                                    <div class=\"col-xs-9 text-right\">\n                                        <div class=\"huge\">{{totTicket}}</div>\n                                        <div>Total Tickets</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <a routerLink=\"/viewticket\">\n                                <div class=\"panel-footer\">\n                                    <span class=\"pull-left\">View Details</span>\n                                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"panel panel-green\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-3\">\n                                        <i class=\"fa fa-tasks fa-5x\"></i>\n                                    </div>\n                                    <div class=\"col-xs-9 text-right\">\n                                        <div class=\"huge\">{{totCompTicket}}</div>\n                                        <div>Completed Tickets</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <a routerLink=\"/viewticket\">\n                                <div class=\"panel-footer\">\n                                    <span class=\"pull-left\">View Details</span>\n                                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"panel panel-yellow\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-3\">\n                                        <i class=\"fa fa-tasks fa-5x\"></i>\n                                    </div>\n                                    <div class=\"col-xs-9 text-right\">\n                                        <div class=\"huge\">{{totAtiveTicket}}</div>\n                                        <div>Active Tickets</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <a routerLink=\"/viewticket\">\n                                <div class=\"panel-footer\">\n                                    <span class=\"pull-left\">View Details</span>\n                                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"panel panel-red\">\n                            <div class=\"panel-heading\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-3\">\n                                        <i class=\"fa fa-tasks fa-5x\"></i>\n                                    </div>\n                                    <div class=\"col-xs-9 text-right\">\n                                        <div class=\"huge\">{{(totTicket- (totAtiveTicket + totCompTicket))}}</div>\n                                        <div>Pending Tickets</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <a routerLink=\"/viewticket\">\n                                <div class=\"panel-footer\">\n                                    <span class=\"pull-left\">View Details</span>\n                                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n       </div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-ticket works!\n</p>\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"reatetcket-form\">\n  <h3>View Ticket</h3>\n  <form [formGroup]=\"viewTicket\" class=\"form-group\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple placeholder=\"Component\" class=\"full-width\" formControlName=\"component\">\n          <md-option *ngFor=\"let comp of components\" [value]=\"comp.component_id\">\n            {{ comp.component_type }}\n          </md-option>\n        </md-select>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple placeholder=\"Ticket Type\" class=\"full-width\" formControlName=\"ticket_type\">\n          <md-option *ngFor=\"let ticktyp of ticketType\" [value]=\"ticktyp.ticket_type_id\">\n            {{ ticktyp.ticket_type }}\n          </md-option>\n        </md-select>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple placeholder=\"Owner\" class=\"full-width \" formControlName=\"owner\">\n          <md-option *ngFor=\"let user of users\" [value]=\"user.user_id\">\n            {{ user.userName }}\n          </md-option>\n        </md-select>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple  placeholder=\"Priority\" class=\"full-width\" formControlName=\"priority\">\n          <md-option *ngFor=\"let pri of priorities\" [value]=\"pri.priority_id\">\n            {{ pri.priority_type }}\n          </md-option>\n        </md-select>        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Target Date Lessthan Equal To ( < = )\" type=\"date\" formControlName=\"target_date\">\n        </md-input-container>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple placeholder=\"Milstone\" class=\"full-width\" formControlName=\"milestone\">\n          <md-option *ngFor=\"let milestone of milestones\" [value]=\"milestone.milestone_id\">\n            {{ milestone.milestone_type }}\n          </md-option>\n        </md-select>        \n      </div>\n\n      <div *ngIf=\"visibleSelectOpt==0\" class=\"col-md-3 topMargin\">\n         <md-checkbox class=\"full-width\"  formControlName=\"tskclosed\">Closed</md-checkbox>\n      </div>\n\n      <div class=\"col-md-3 topMargin\">\n        <button type=\"submit\" md-raised-button>View Ticket</button>\n      </div>\n    </div>\n  </form>\n  <div class=\"full-width alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n</md-card>\n<md-card>\n  <h4>Tickets</h4>\n<div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>#Ticket ID</th>\n      <th>Bike N.o - Summary</th>\n      <th>Description</th>\n      <th>Ticket Type</th>      \n      <th>Owner</th>\n      <th>Milestone</th>\n      <th>Priority</th>\n      <th>Target Date</th>\n      <th>Component</th>\n      <th *ngIf=\"visibleSelectOpt==0\">Is Closed</th>\n      <th *ngIf=\"visibleSelectOpt==1\">Option</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let ticket of ticketView\">\n        <td>{{ticket.ticket_id}}</td>\n        <td>{{ticket.summary}}</td>\n        <td>{{ticket.description}}</td>\n        <td>{{ticket.ticket_type}}</td>\n        <td>{{ticket.userName}}</td>\n        <td>{{ticket.milestone_type}}</td>\n        <td>{{ticket.priority_type}}</td>\n        <td>{{ticket.target_date}}</td>\n        <td>{{ticket.component_type}}</td>\n        <td *ngIf=\"visibleSelectOpt==0\">{{ticket.closed}}</td>\n        <td *ngIf=\"visibleSelectOpt==1\"><a (click)=\"sendSelTicket(ticket)\" > Select</a></td>\n\n      </tr>\n    </tbody>\n  </table>\n</div>\n</md-card>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-top-bar></app-top-bar>\n  <app-filter-ticket [visibleSelectOpt]=\"1\" (selTicket)='handleEvent($event)'></app-filter-ticket> \n  <md-card class=\"nextweek-plan\">\n  <h3>Plan Ticket</h3>  \n    <div class=\"row\">\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"From Date\" [(ngModel)]=\"fromDt\" type=\"date\">\n        </md-input-container>\n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"To Date\" [(ngModel)]=\"toDt\" type=\"date\">\n        </md-input-container>\n      </div>      \n      <div class=\"col-md-3 topMargin\">\n        <md-select multiple placeholder=\"Task Type\" [(ngModel)]=\"taskTypeCode\" class=\"full-width\">\n          <md-option *ngFor=\"let task of taskType\" [value]=\"task.task_type_id\">\n            {{ task.task_type_name }}\n          </md-option>\n        </md-select>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Total Weeks [ Hours ]  Planned Prev\" [(ngModel)]='totalWeeksHrsPlanned' disabled>\n        </md-input-container>\n      </div>      \n    </div>  \n    <div class=\"row\">      \n      <div class=\"col-md-3 topMargin\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"Planned Time to Spent\" [(ngModel)]=\"plannedTimetoSpent\">\n        </md-input-container>\n      </div>      \n      <div class=\"col-md-6 topMargin\">\n        <md-input-container class=\"full-width\">\n          <textarea mdInput placeholder=\"Next Week Plan\" [(ngModel)]=\"nextWeekPlan\"></textarea>\n        </md-input-container>        \n      </div>\n      <div class=\"col-md-3 topMargin\">\n          <button md-raised-button class=\"full-width\" (click)=\"addPlan()\" >Update to Plan</button>\n      </div>\n    </div>\n  </md-card>\n  <md-card>\n  <h4>Next Week Plan</h4>\n  <div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>#Ticket ID</th>\n      <th>Bike N.o - Summary</th>\n      <th>From</th>\n      <th>To</th>      \n      <th>Hours Planned</th>\n      <th>Weeks Planned</th>\n      <th>TaskTypes</th>\n      <th>Planned Time To Spent</th>\n      <th>Next week plan</th>\n      <th>Option</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let nextWeekComp of nextWeekPlanRows\">\n        <th>{{nextWeekComp.ticketId}}</th>\n        <th>{{nextWeekComp.summary}}</th>\n        <th>{{nextWeekComp.fromDt}}</th>\n        <th>{{nextWeekComp.toDt}}</th>      \n        <th>{{nextWeekComp.timeSpent}}</th>\n        <th>{{nextWeekComp.weekSpent}}</th>\n        <th>{{nextWeekComp.taskTyp}}</th>\n        <th>{{nextWeekComp.plannedTime}}</th>\n        <th>{{nextWeekComp.nextPlan}}</th>\n        <td><span><a (click)=\"editWSR(nextWeekComp)\">Edit</a>\n        </span> | <span><a (click)=\"removeWSR(nextWeekComp)\">Remove</a></span></td>\n      </tr>\n    </tbody>\n  </table>  \n</div>\n<div class=\"topMargin\">\n    <button md-raised-button class=\"full-width\" (click)=\"saveNxtWeekPlan()\" >Save Next Week Plan</button>\n</div>\n</md-card>\n</div>\n\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<!--\n Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\n \n            <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n                <ul class=\"nav navbar-nav side-nav\">                   \n                    <li>\n                        <a class=\"menu\" routerLink=\"/\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a>\n                    </li>                   \n                    <li>\n                        <a routerLink=\"/currentweek\"><i class=\"fa fa-fw fa-table\"></i> Current Week Task</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/nextweek\"><i class=\"fa fa-fw fa-table\"></i> Next Week Task</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/viewwsr\"><i class=\"fa fa-fw fa-table\"></i> View WSR</a>\n                    </li>                    \n                    <li>\n                        <a routerLink=\"/createticket\"><i class=\"fa fa-fw fa-table\"></i> Create Ticket</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"/viewticket\"><i class=\"fa fa-fw fa-table\"></i> View Ticket</a>\n                    </li>                                        \n                </ul>\n            </div>\n\n\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"index.html\">DRAW Task Manager</a>\n            </div>\n            <!-- Top Menu Items -->\n            <ul class=\"nav navbar-right top-nav\">\n                               \n                <li class=\"dropdown\">\n                    <a href=\"#\" >Welcome: {{userName}}</a>             \n                </li>\n                <li>\n                    <a href=\"#\" (click)=\"logOut()\" >Log Out</a>\n                </li>\n            </ul>\n            \n            \n            <app-side-bar></app-side-bar>            \n            <!-- /.navbar-collapse -->\n        </nav>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">                \n        <a class=\"navbar-brand\" href=\"index.html\">DRAW Task Manager</a>\n    </div>\n    <!-- /.navbar-collapse -->\n</nav>\n\n<div class=\"container\">\n  <div class=\"container-fluid half-width\">\n\n<md-card class=\"reatetcket-form\">\n  <h3>Welcome</h3>\n  <form [formGroup]=\"userLogin\" class=\"form-group\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <md-input-container class=\"full-width\">\n          <input mdInput placeholder=\"User Name\" formControlName=\"userName\" [(ngModel)]=\"authUser.userName\">\n        </md-input-container>\n        \n        \n        <div *ngIf=\"userLogin.controls['userName'].touched && \n        userLogin.controls['userName'].dirty && \n        userLogin.controls['userName'].invalid\" class=\"alert alert-danger\">\n          Please Enter User Name\n        </div>        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <md-input-container class=\"full-width\">\n          <input mdInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"authUser.password\">\n        </md-input-container>\n        <div *ngIf=\"userLogin.controls['password'].touched && \n        userLogin.controls['password'].dirty && \n        userLogin.controls['password'].invalid\" class=\"alert alert-danger\">\n          Please Enter Password\n        </div>        \n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 topMargin\">\n        <button type=\"submit\" [disabled]=\"!userLogin.valid\" md-raised-button (click)=\"login()\">Login</button>\n      </div>\n    </div>\n  </form>\n  <div class=\"full-width alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n</md-card>\n  </div>\n</div>"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-top-bar></app-top-bar>\n  <app-filter-ticket [visibleSelectOpt]=\"0\"></app-filter-ticket>\n</div>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-top-bar></app-top-bar>\n\n<md-card class=\"nextweek-plan\">\n  <h4>WSR View</h4>\n  <br/>\n  <div class=\"row\">\n    <div class=\"col-md-3 topMargin full-width\">\n      <md-select multiple placeholder=\"Week Tag Id\" [(ngModel)]=\"selWeekTag\" class=\"full-width\">\n        <md-option *ngFor=\"let week of wsrTagId\" [value]=\"week\">\n          {{ week }}\n        </md-option>\n      </md-select>        \n    </div>\n    <div  class=\"topMargin\">\n        <button md-raised-button class=\"full-width\" (click)=\"viewWSR()\" >View WSR</button>\n    </div>\n    <div class=\"full-width alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  </div>\n\n  <div class=\"table-responsive\">\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>#Ticket ID</th>\n      <th>Bike N.o - Summary</th>\n      <th>From</th>\n      <th>To</th>      \n      <th>Hrs Planned </th>\n      <th>Hrs Spent</th>\n      <th>Tot Hrs Spent Prev</th>\n      <th>Tot Weeks Spent</th>\n      <th>Task Types</th>\n      <th>Is Unplanned</th>\n      <th>Is Closed</th>\n      <th>Planned</th>      \n      <th>Completed</th>      \n      <th>Week</th>\n      <th>Tag ID</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let wsrView of wsrView\">\n        <td>{{wsrView.ticketId}}</td>\n        <td>{{wsrView.summary}}</td>\n        <td>{{wsrView.from_date}}</td>\n        <td>{{wsrView.to_date}}</td>      \n        <td>{{wsrView.hours_planned}}</td>  \n        <td>{{wsrView.time_spent}}</td>\n        <td>{{wsrView.total_time_spent}}</td>        \n        <td>{{wsrView.no_of_week_planned}}</td>\n        <td>{{wsrView.task_type}}</td>\n        <td>{{wsrView.unplanned}}</td>\n        <td>{{wsrView.closed}}</td>        \n        <td>{{wsrView.planned}}</td>\n        <td>{{wsrView.completed}}</td>        \n        <td>{{wsrView.week_flag}}</td>\n        <td>{{wsrView.tagId}}</td>        \n      </tr>\n    </tbody>\n  </table>  \n</div>\n\n</md-card>\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return authKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qryParamHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return qryParamDelimit; });

var authKey = "auth_key";
var baseURL = "https://drawtrac.herokuapp.com";
//export const baseURL="http://localhost:8080";
var qryParamHead = "?";
var qryParamDelimit = "&";
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_material_datepicker__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_bar_side_bar_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_bar_top_bar_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dash_board_dash_board_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__current_week_current_week_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authManager__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ticket_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__create_ticket_create_ticket_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__view_ticket_view_ticket_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_ticket_edit_ticket_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__next_week_next_week_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__wsr_view_wsr_view_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_login_user_login_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__filter_ticket_filter_ticket_component__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__top_bar_top_bar_component__["a" /* TopBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dash_board_dash_board_component__["a" /* DashBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__current_week_current_week_component__["a" /* CurrentWeekComponent */],
            __WEBPACK_IMPORTED_MODULE_17__create_ticket_create_ticket_component__["a" /* CreateTicketComponent */],
            __WEBPACK_IMPORTED_MODULE_18__view_ticket_view_ticket_component__["a" /* ViewTicketComponent */],
            __WEBPACK_IMPORTED_MODULE_19__edit_ticket_edit_ticket_component__["a" /* EditTicketComponent */],
            __WEBPACK_IMPORTED_MODULE_20__next_week_next_week_component__["a" /* NextWeekComponent */],
            __WEBPACK_IMPORTED_MODULE_21__wsr_view_wsr_view_component__["a" /* WsrViewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__user_login_user_login_component__["a" /* UserLoginComponent */], __WEBPACK_IMPORTED_MODULE_23__filter_ticket_filter_ticket_component__["a" /* FilterTicketComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_material_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* AppRoute */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__authManager__["a" /* AuthManager */], __WEBPACK_IMPORTED_MODULE_15__ticket_service__["a" /* TicketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthManager = (function () {
    function AuthManager(rout, authSer) {
        this.rout = rout;
        this.authSer = authSer;
    }
    AuthManager.prototype.canActivate = function (route, state) {
        console.log("before already", route.url.length);
        if (route.url.length > 0 && route.url[0].path == 'login') {
            console.log("inside already");
            if (window.localStorage.getItem('auth_key')) {
                console.log("you are already logged in");
                return false;
            }
        }
        if (window.localStorage.getItem('auth_key')) {
            return true;
        }
        console.log('you must be logged in');
        this.rout.navigate(['/login']);
        return false;
    };
    return AuthManager;
}());
AuthManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */]) === "function" && _b || Object])
], AuthManager);

var _a, _b;
//# sourceMappingURL=authManager.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTicketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateTicketComponent = (function () {
    function CreateTicketComponent(_createTicket, tickService) {
        this._createTicket = _createTicket;
        this.tickService = tickService;
        this.components = [];
        this.ticketType = [];
        this.milestones = [];
        this.users = [];
        this.priorities = [];
    }
    CreateTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickService
            .getComponents()
            .then(function (comp) { return _this.components = comp; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getTicketType()
            .then(function (ttype) { return _this.ticketType = ttype; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getMilestone()
            .then(function (milestone) { return _this.milestones = milestone; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getUser()
            .then(function (user) { return _this.users = user; }, function (error) { return _this.errorMessage = error; });
        console.log("isnside on init", this.ticketType);
        this.tickService
            .getPriority()
            .then(function (prioroity) { return _this.priorities = prioroity; }, function (error) { return _this.errorMessage = error; });
        this.createTicket = this._createTicket.group({
            summary: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(100)]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(25), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10000)]],
            component: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            ticket_type: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            owner: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            cc: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            keywords: [''],
            priority: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            target_date: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            milestone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
        console.log("before call");
    };
    CreateTicketComponent.prototype.onSubmit = function () {
        console.log(this.createTicket.value);
        var sts = this.tickService.saveTicket(this.createTicket.value);
        console.log("after save call", sts);
        if (0 == sts) {
            alert("Ticket Creation Failed!");
        }
        else {
            alert("Ticket Created");
        }
    };
    return CreateTicketComponent;
}());
CreateTicketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-create-ticket',
        template: __webpack_require__(196),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */]) === "function" && _b || Object])
], CreateTicketComponent);

var _a, _b;
//# sourceMappingURL=create-ticket.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentWeekComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentWeekComponent = (function () {
    function CurrentWeekComponent(tickService) {
        this.tickService = tickService;
        this.taskType = [];
        this.totalWeeksHrsSpent = "0 [ 0 ]";
        this.totalHoursSpent = "0";
        this.totalWeeksSpent = "0";
        this.ticketID = "";
        this.summary = "";
        this.fromDt = "";
        this.toDt = "";
        this.planned = "";
        this.completed = "";
        this.taskTypeCode = [];
        this.plannedTimetoSpent = "0";
        this.timeSpent = "0";
        this.LastWeekPlan = [];
        this.currentWeekPlanRows = [];
        this.currentWeekWSRSave = [];
        this.editMode = false;
        this.unplanned = false;
        this.closed = false;
    }
    CurrentWeekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickService
            .getTaskType()
            .then(function (taskType) { return _this.taskType = taskType; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getLastWeekTagId()
            .then(function (weekTagId) { return _this.weekTagId = weekTagId; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getLastWeekPlan()
            .then(function (LastWeekPlan) {
            _this.LastWeekPlan = LastWeekPlan;
            if (null != _this.LastWeekPlan) {
                console.log("pushWSRPlanRows len data ", _this.LastWeekPlan);
                var cWLen = _this.LastWeekPlan.length;
                console.log("pushWSRPlanRows len", cWLen);
                for (var i = 0; i < cWLen; i++) {
                    _this.pushWSRPlanRows(_this.LastWeekPlan[i]);
                    console.log("this.currentWeekPlanRows ", _this.currentWeekPlanRows);
                }
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    CurrentWeekComponent.prototype.pushWSRPlanRows = function (lwPlan) {
        /**
         * int ticketId, String summary, Date from_date, Date to_date, String task_type, char unplanned,
                int hours_planned, int time_spent, int total_time_spent, int no_of_week_planned,
          char tl_approval,
                String tl_comments, char stl_approval, String stl_comments, String planned, String completed,
          int tagId
         */
        console.log("pushWSRPlanRows loop", lwPlan);
        console.log("lwPlan.task_type.split(", ")", lwPlan.task_type.split(","));
        this.currentWeekPlanRows.push({ ticketId: lwPlan.ticketId,
            summary: lwPlan.summary, fromDt: lwPlan.from_date, toDt: lwPlan.to_date,
            hours_planned: lwPlan.hours_planned,
            time_spent: lwPlan.time_spent, total_time_spent: lwPlan.total_time_spent,
            no_of_week_planned: lwPlan.no_of_week_planned, task_type: lwPlan.task_type,
            isunplanned: lwPlan.unplanned, planned: lwPlan.planned,
            completed: lwPlan.completed, taskTypArr: lwPlan.task_type.split(",").map(Number),
            isclosed: lwPlan.closed });
        this.currentWeekWSRSave.push({ ticketId: lwPlan.ticketId, from_date: lwPlan.from_date,
            to_date: lwPlan.to_date, task_type: lwPlan.task_type, unplanned: lwPlan.unplanned,
            hours_planned: lwPlan.hours_planned,
            time_spent: lwPlan.time_spent, total_time_spent: lwPlan.total_time_spent,
            no_of_week_planned: lwPlan.no_of_week_planned,
            week_flag: 'C', planned: lwPlan.planned, completed: lwPlan.completed, closed: lwPlan.closed,
            tagId: lwPlan.tagId });
    };
    CurrentWeekComponent.prototype.onSubmit = function () {
    };
    CurrentWeekComponent.prototype.handleEvent = function (wsrPlan) {
        console.debug(wsrPlan, "from filtered ticket");
        // console.debug(wsrPlan.total_time_spent,"wsrPlan.total_time_spent");
        // console.debug(wsrPlan.no_of_week_planned,"wsrPlan.no_of_week_planned");
        this.editMode = false;
        this.totalHoursSpent = "0";
        this.totalWeeksSpent = "0";
        this.ticketID = "";
        this.summary = "";
        this.timeSpent = "0";
        this.plannedTimetoSpent = "0";
        this.ticketID = wsrPlan.ticketId;
        this.summary = wsrPlan.summary;
        this.totalHoursSpent = wsrPlan.total_time_spent;
        this.totalWeeksSpent = wsrPlan.no_of_week_planned;
        this.totalWeeksHrsSpent = wsrPlan.no_of_week_planned + " [ " + wsrPlan.total_time_spent + " ]";
    };
    CurrentWeekComponent.prototype.addPlan = function () {
        console.log(this.taskTypeCode, "this.taskTypeCode");
        console.log(this.taskTypeCode.join(","), "this.taskTypeCode join");
        console.log("this.editMode ", this.editMode);
        console.log(this.selEditIdx, "this.selEditIdx");
        var unplan = this.unplanned ? 'Y' : 'N';
        var tskclose = this.closed ? 'Y' : 'N';
        if (!this.editMode) {
            this.currentWeekPlanRows.push({ ticketId: this.ticketID,
                summary: this.summary, fromDt: this.fromDt, toDt: this.toDt,
                hours_planned: this.plannedTimetoSpent,
                time_spent: this.timeSpent, total_time_spent: this.totalHoursSpent,
                no_of_week_planned: this.totalWeeksSpent,
                task_type: this.taskTypeCode.join(","),
                isunplanned: unplan, planned: this.planned,
                completed: this.completed, taskTypArr: this.taskTypeCode,
                isclosed: tskclose });
            this.currentWeekWSRSave.push({ ticketId: this.ticketID, from_date: this.fromDt,
                to_date: this.toDt, task_type: this.taskTypeCode.join(","), unplanned: unplan,
                hours_planned: this.plannedTimetoSpent,
                time_spent: this.timeSpent, total_time_spent: this.timeSpent,
                no_of_week_planned: 0,
                week_flag: 'C', planned: this.planned, completed: this.completed,
                closed: tskclose, tagId: this.weekTagId });
        }
        else {
            this.currentWeekPlanRows.splice(this.selEditIdx, 1, { ticketId: this.ticketID,
                summary: this.summary, fromDt: this.fromDt, toDt: this.toDt,
                hours_planned: this.plannedTimetoSpent,
                time_spent: this.timeSpent, total_time_spent: this.totalHoursSpent,
                no_of_week_planned: this.totalWeeksSpent, task_type: this.taskTypeCode.join(","),
                isunplanned: unplan, planned: this.planned,
                completed: this.completed, taskTypArr: this.taskTypeCode, isclosed: tskclose });
            this.currentWeekWSRSave.splice(this.selEditIdx, 1, { ticketId: this.ticketID, from_date: this.fromDt,
                to_date: this.toDt, task_type: this.taskTypeCode.join(","), unplanned: unplan,
                hours_planned: this.plannedTimetoSpent,
                time_spent: this.timeSpent, total_time_spent: this.timeSpent,
                no_of_week_planned: 0,
                week_flag: 'C', planned: this.planned, completed: this.completed, closed: tskclose,
                tagId: this.weekTagId });
        }
        console.log("currentWeekPlanRows ", this.currentWeekPlanRows);
        this.fromDt = "";
        this.toDt = "";
        this.taskTypeCode = [];
        this.plannedTimetoSpent = "0";
        this.totalWeeksHrsSpent = "0 [ 0 ]";
        this.completed = "";
        this.planned = "";
        this.totalHoursSpent = "0";
        this.totalWeeksSpent = "0";
        this.unplanned = false;
        this.timeSpent = "0";
        this.closed = false;
    };
    //API used to save the next week plan
    CurrentWeekComponent.prototype.saveNxtWeekPlan = function () {
        console.log("before save WSR call", this.currentWeekWSRSave);
        var sts = this.tickService.saveCurrWSR(this.currentWeekWSRSave);
        console.log("after save WSR call", sts);
        if (sts) {
            alert("Current Week Plan Saved");
        }
        else {
            alert("Current Week Plan Save Failed!");
        }
        this.currentWeekWSRSave = [];
        this.currentWeekPlanRows = [];
    };
    CurrentWeekComponent.prototype.removeWSR = function (wsr) {
        if (confirm("Are you sure to delete " + wsr.ticketId + "?")) {
            var index = this.currentWeekPlanRows.indexOf(wsr);
            this.currentWeekWSRSave.splice(index, 1);
            this.currentWeekPlanRows.splice(index, 1);
        }
    };
    CurrentWeekComponent.prototype.editWSR = function (wsrPlan) {
        console.log("edit wsr", wsrPlan);
        this.selEditIdx = this.currentWeekPlanRows.indexOf(wsrPlan);
        this.editMode = true;
        this.ticketID = wsrPlan.ticketId;
        this.summary = wsrPlan.summary;
        this.plannedTimetoSpent = wsrPlan.hours_planned;
        this.timeSpent = wsrPlan.time_spent;
        this.totalHoursSpent = wsrPlan.total_time_spent;
        this.totalWeeksSpent = wsrPlan.no_of_week_planned;
        this.fromDt = wsrPlan.fromDt;
        this.toDt = wsrPlan.toDt;
        this.taskTypeCode = wsrPlan.taskTypArr;
        this.unplanned = wsrPlan.isunplanned == 'Y' ? true : false;
        this.planned = wsrPlan.planned;
        this.completed = wsrPlan.completed;
        this.closed = wsrPlan.isclosed == 'Y' ? true : false;
        this.totalWeeksHrsSpent = wsrPlan.no_of_week_planned + " [ " + wsrPlan.total_time_spent + " ]";
    };
    return CurrentWeekComponent;
}());
CurrentWeekComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-current-week',
        template: __webpack_require__(197),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */]) === "function" && _a || Object])
], CurrentWeekComponent);

var _a;
//# sourceMappingURL=current-week.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashBoardComponent = (function () {
    function DashBoardComponent(tickService) {
        this.tickService = tickService;
        this.errorMessage = "";
        this.totTicket = 0;
        this.totAtiveTicket = 0;
        this.totCompTicket = 0;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickService
            .getTotTicket()
            .then(function (totTicket) { return _this.totTicket = totTicket; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getTotActTicket()
            .then(function (totAtiveTicket) { return _this.totAtiveTicket = totAtiveTicket; }, function (error) { return _this.errorMessage = error; });
        this.tickService
            .getTotCompTicket()
            .then(function (totCompTicket) { return _this.totCompTicket = totCompTicket; }, function (error) { return _this.errorMessage = error; });
    };
    return DashBoardComponent;
}());
DashBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-dash-board',
        template: __webpack_require__(198),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */]) === "function" && _a || Object])
], DashBoardComponent);

var _a;
//# sourceMappingURL=dash-board.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextWeekComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NextWeekComponent = (function () {
    function NextWeekComponent(tickService) {
        this.tickService = tickService;
        this.taskType = [];
        this.totalWeeksHrsPlanned = "0 [ 0 ]";
        this.hoursSpent = "0";
        this.weeksSpent = "0";
        this.ticketID = "";
        this.summary = "";
        this.fromDt = "";
        this.toDt = "";
        this.nextWeekPlan = "";
        this.taskTypeCode = [];
        this.plannedTimetoSpent = "0";
        this.nextWeekPlanRows = [];
        this.nextWeekWSRSave = [];
    }
    NextWeekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickService
            .getTaskType()
            .then(function (taskType) { return _this.taskType = taskType; }, function (error) { return _this.errorMessage = error; });
    };
    NextWeekComponent.prototype.onSubmit = function () {
    };
    NextWeekComponent.prototype.handleEvent = function (wsrPlan) {
        console.debug(wsrPlan, "from filtered ticket");
        // console.debug(wsrPlan.total_time_spent,"wsrPlan.total_time_spent");
        // console.debug(wsrPlan.no_of_week_planned,"wsrPlan.no_of_week_planned");
        this.editMode = false;
        this.hoursSpent = "0";
        this.weeksSpent = "0";
        this.ticketID = "";
        this.summary = "";
        this.ticketID = wsrPlan.ticketId;
        this.summary = wsrPlan.summary;
        this.hoursSpent = wsrPlan.total_time_spent;
        this.weeksSpent = wsrPlan.no_of_week_planned;
        this.totalWeeksHrsPlanned = wsrPlan.no_of_week_planned + " [ " + wsrPlan.total_time_spent + " ]";
    };
    NextWeekComponent.prototype.addPlan = function () {
        console.log(this.taskTypeCode, "this.taskTypeCode");
        console.log(this.taskTypeCode.join(","), "this.taskTypeCode join");
        console.log("this.editMode ", this.editMode);
        console.log(this.selEditIdx, "this.selEditIdx");
        if (!this.editMode) {
            this.nextWeekPlanRows.push({ ticketId: this.ticketID,
                summary: this.summary, fromDt: this.fromDt, toDt: this.toDt, timeSpent: this.hoursSpent,
                weekSpent: this.weeksSpent, taskTyp: this.taskTypeCode.join(","), plannedTime: this.plannedTimetoSpent,
                nextPlan: this.nextWeekPlan, taskTypArr: this.taskTypeCode });
            this.nextWeekWSRSave.push({ ticketId: this.ticketID, from_date: this.fromDt,
                to_date: this.toDt, task_type: this.taskTypeCode.join(","), unplanned: 'N', hours_planned: this.plannedTimetoSpent,
                total_time_spent: this.hoursSpent, no_of_week_planned: 1,
                week_flag: 'N', planned: this.nextWeekPlan });
        }
        else {
            this.nextWeekPlanRows.splice(this.selEditIdx, 1, { ticketId: this.ticketID,
                summary: this.summary, fromDt: this.fromDt, toDt: this.toDt, timeSpent: this.hoursSpent,
                weekSpent: this.weeksSpent, taskTyp: this.taskTypeCode.join(","), plannedTime: this.plannedTimetoSpent,
                nextPlan: this.nextWeekPlan, taskTypArr: this.taskTypeCode });
            this.nextWeekWSRSave.splice(this.selEditIdx, 1, { ticketId: this.ticketID, from_date: this.fromDt,
                to_date: this.toDt, task_type: this.taskTypeCode.join(","), unplanned: 'N', hours_planned: this.plannedTimetoSpent,
                total_time_spent: this.hoursSpent, no_of_week_planned: 1,
                week_flag: 'N', planned: this.nextWeekPlan });
        }
        this.fromDt = "";
        this.toDt = "";
        this.nextWeekPlan = "";
        this.taskTypeCode = [];
        this.plannedTimetoSpent = "0";
        this.totalWeeksHrsPlanned = "0 [ 0 ]";
    };
    //API used to save the next week plan
    NextWeekComponent.prototype.saveNxtWeekPlan = function () {
        console.log("before save WSR call", this.nextWeekWSRSave);
        var sts = this.tickService.saveNextWeekWSR(this.nextWeekWSRSave);
        console.log("after save WSR call", sts);
        if (sts) {
            alert("Next Week Plan Saved");
        }
        else {
            alert("Next Week Plan Save Failed!");
        }
        this.nextWeekWSRSave = [];
        this.nextWeekPlanRows = [];
    };
    NextWeekComponent.prototype.removeWSR = function (wsr) {
        if (confirm("Are you sure to delete " + wsr.ticketId + "?")) {
            var index = this.nextWeekPlanRows.indexOf(wsr);
            this.nextWeekWSRSave.splice(index, 1);
            this.nextWeekPlanRows.splice(index, 1);
        }
    };
    NextWeekComponent.prototype.editWSR = function (wsrPlan) {
        console.log("edit wsr", wsrPlan);
        this.selEditIdx = this.nextWeekPlanRows.indexOf(wsrPlan);
        this.editMode = true;
        this.ticketID = wsrPlan.ticketId;
        this.summary = wsrPlan.summary;
        this.hoursSpent = wsrPlan.timeSpent;
        this.weeksSpent = wsrPlan.weekSpent;
        this.fromDt = wsrPlan.fromDt;
        this.toDt = wsrPlan.toDt;
        this.taskTypeCode = wsrPlan.taskTypArr;
        this.totalWeeksHrsPlanned = wsrPlan.weekSpent + " [ " + wsrPlan.timeSpent + " ]";
        this.plannedTimetoSpent = wsrPlan.plannedTime;
        this.nextWeekPlan = wsrPlan.nextPlan;
        /*
    
        {ticketId:this.ticketID,
          summary:this.summary,fromDt:this.fromDt,toDt:this.toDt,timeSpent:this.hoursSpent,
          weekSpent:this.weeksSpent,taskTyp:this.taskTypeCode.join(","),plannedTime:this.plannedTimetoSpent,
          nextPlan:this.nextWeekPlan}
          */
    };
    return NextWeekComponent;
}());
NextWeekComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-next-week',
        //directives: [FilterTicketComponent],
        template: __webpack_require__(201),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */]) === "function" && _a || Object])
], NextWeekComponent);

var _a;
//# sourceMappingURL=next-week.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = (function () {
    function UserLoginComponent(_userLogin, tickSer, route) {
        this._userLogin = _userLogin;
        this.tickSer = tickSer;
        this.route = route;
        this.authUser = {
            userName: '',
            password: ''
        };
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.userLogin = this._userLogin.group({
            userName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(200)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(200)]]
        });
    };
    UserLoginComponent.prototype.onSubmit = function () {
        console.log(this.userLogin.value);
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = '';
        this.tickSer
            .authenticateUser(this.authUser)
            .then(function (user) {
            _this.user = user;
            console.log("auth user", user);
            if (null != _this.user) {
                console.log("inside if auth", user);
                window.localStorage.setItem("auth_key", _this.authUser.userName);
                console.log("bf nav auth");
                _this.route.navigate(['']);
                console.log("af nav auth");
            }
            else {
                _this.errorMessage = "Login Failed, Please Check the UserName and Password";
                console.log("invalid user");
                window.localStorage.removeItem("auth_key");
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__(204),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ticket_service__["a" /* TicketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTicketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTicketComponent = (function () {
    function ViewTicketComponent(tickService) {
        this.tickService = tickService;
    }
    ViewTicketComponent.prototype.ngOnInit = function () { };
    return ViewTicketComponent;
}());
ViewTicketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-view-ticket',
        template: __webpack_require__(205),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */]) === "function" && _a || Object])
], ViewTicketComponent);

var _a;
//# sourceMappingURL=view-ticket.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticket_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsrViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WsrViewComponent = (function () {
    function WsrViewComponent(tickService) {
        this.tickService = tickService;
        this.errorMessage = "";
        this.wsrTagId = [];
        this.selWeekTag = [];
        this.wsrView = [];
    }
    WsrViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickService
            .getTagIdList()
            .then(function (wsrTagId) { return _this.wsrTagId = wsrTagId; }, function (error) { return _this.errorMessage = error; });
    };
    WsrViewComponent.prototype.viewWSR = function () {
        var _this = this;
        console.log("selected tag", this.selWeekTag.join(","));
        this.tickService.getMultiWSRPlan(this.selWeekTag.join(","))
            .then(function (wsrView) {
            _this.wsrView = wsrView;
            if (null != _this.wsrView) {
                console.log("filtered result ", wsrView);
            }
            else {
                // Do Nothing
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return WsrViewComponent;
}());
WsrViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-wsr-view',
        template: __webpack_require__(206),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticket_service__["a" /* TicketService */]) === "function" && _a || Object])
], WsrViewComponent);

var _a;
//# sourceMappingURL=wsr-view.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        // hold the base URL
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* baseURL */];
        this.isAuthenticated = false;
        this.nextWeekWSR = [];
    }
    // API to get the components
    TicketService.prototype.getComponents = function () {
        return this.http.get(this.baseUrl + "/components", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // API to get the ticket type
    TicketService.prototype.getTicketType = function () {
        return this.http.get(this.baseUrl + "/ticketType", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // API to get the ticket type
    TicketService.prototype.getTaskType = function () {
        return this.http.get(this.baseUrl + "/taskType", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    //getLastWeekTagId
    TicketService.prototype.getLastWeekTagId = function () {
        return this.http.get(this.baseUrl + "/getLastWeekTagId", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    //getLastWeekPlan
    TicketService.prototype.getLastWeekPlan = function () {
        return this.http.get(this.baseUrl + "/getLWSRPlan", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // API to get the Milestone
    TicketService.prototype.getMilestone = function () {
        return this.http.get(this.baseUrl + "/milestone", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // API to get the users
    TicketService.prototype.getUser = function () {
        return this.http.get(this.baseUrl + "/user", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // API to get the priority type
    TicketService.prototype.getPriority = function () {
        return this.http.get(this.baseUrl + "/priority", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    // API to get the headers
    TicketService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        return headers;
    };
    // API used to extract data to json object array
    TicketService.prototype.extractData = function (res) {
        console.log("res", res);
        var resbody = res.json();
        console.log(resbody, "data");
        return resbody;
    };
    // API used to extract data to json object
    TicketService.prototype.extractObjectData = function (res) {
        console.log("res", res);
        var resbody = null;
        if (res.text()) {
            console.log("inside json check");
            resbody = res.json();
        }
        console.log(resbody, "data");
        return resbody;
    };
    // API used to handle the error
    TicketService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    //API used to save the ticket
    TicketService.prototype.saveTicket = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(obj), "is save tic");
        return this.http.post(this.baseUrl + "/saveTicket", JSON.stringify(obj), options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe();
        //console.log("after post req");
    };
    // API to get the headers
    TicketService.prototype.getContentTypeHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    //API used to authenticate the user by userName & password
    TicketService.prototype.authenticateUser = function (usercreds) {
        var creds = 'userName=' + usercreds.userName + '&password=' + usercreds.password;
        return this.http.get(this.baseUrl + "/authuser?" + creds, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractObjectData)
            .catch(this.handleError);
    };
    //API used to filter the tickets
    TicketService.prototype.filterTickets = function (filterQryParam) {
        console.log("filterQryParam ", filterQryParam);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__global__["a" /* baseURL */] + "/getticket"
            + filterQryParam, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractObjectData)
            .catch(this.handleError);
    };
    // API to get the WSR plan of ticket ID
    TicketService.prototype.getWSRPlan = function (ticketID) {
        var ticketQry = 'ticketID=' + ticketID;
        return this.http.get(this.baseUrl + "/getWSR?" + ticketQry, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.getMultiWSRPlan = function (qry) {
        var ticketQry = 'weekTagList=' + qry;
        return this.http.get(this.baseUrl + "/getMultiWSR?" + ticketQry, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.getTotWeek = function (ticketID) {
        var ticketQry = 'ticketID=' + ticketID;
        return this.http.get(this.baseUrl + "/getTotWeek?" + ticketQry, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.getTotTime = function (ticketID) {
        var ticketQry = 'ticketID=' + ticketID;
        return this.http.get(this.baseUrl + "/getTotTime?" + ticketQry, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.saveNextWeekWSR = function (arrayWSR) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(arrayWSR), "save WSR");
        return this.http.post(this.baseUrl + "/saveWSR", JSON.stringify(arrayWSR), options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe();
    };
    TicketService.prototype.saveCurrWSR = function (arrayWSR) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log(JSON.stringify(arrayWSR), "save currWSR");
        return this.http.post(this.baseUrl + "/saveCurWSR", JSON.stringify(arrayWSR), options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe();
    };
    TicketService.prototype.getTagIdList = function () {
        return this.http.get(this.baseUrl + "/getTagIdList", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.getMultiWeekPlan = function (filterQryParam) {
        console.log("filterQryParam ", filterQryParam);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__global__["a" /* baseURL */] + "/getticket"
            + filterQryParam, { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractObjectData)
            .catch(this.handleError);
    };
    TicketService.prototype.getTotTicket = function () {
        return this.http.get(this.baseUrl + "/getTotTicket", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.getTotActTicket = function () {
        return this.http.get(this.baseUrl + "/getTotActTicket", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TicketService.prototype.getTotCompTicket = function () {
        return this.http.get(this.baseUrl + "/getTotCompTicket", { headers: this.getHeaders() })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    return TicketService;
}());
TicketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TicketService);

var _a;
//# sourceMappingURL=ticket.service.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.bundle.js.map