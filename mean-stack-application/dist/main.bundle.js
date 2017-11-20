webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_newsfeed_newsfeed_component__ = __webpack_require__("../../../../../src/app/components/newsfeed/newsfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("../../../../../src/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_todo_todo_component__ = __webpack_require__("../../../../../src/app/components/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_todo_service__ = __webpack_require__("../../../../../src/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_to_list_to_list_component__ = __webpack_require__("../../../../../src/app/components/to-list/to-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_todo_add_todo_add_component__ = __webpack_require__("../../../../../src/app/components/todo-add/todo-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
    },
    {
        path: 'newsfeed/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__components_newsfeed_newsfeed_component__["a" /* NewsfeedComponent */],
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_10__components_chat_chat_component__["a" /* ChatComponent */],
    },
    {
        path: 'todo',
        component: __WEBPACK_IMPORTED_MODULE_18__components_todo_todo_component__["a" /* TodoComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_newsfeed_newsfeed_component__["a" /* NewsfeedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_to_list_to_list_component__["a" /* ToListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_todo_add_todo_add_component__["a" /* TodoAddComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".msgbox {\r\n  height: 400px;\r\n  margin: 10px;\r\n  vertical-align: bottom;\r\n  display: table-cell;\r\n}\r\n\r\n.well {\r\n  height: 530px;\r\n}\r\n\r\n.user-heading {\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  text-decoration: underline;\r\n}\r\n\r\n.user-names {\r\n  font-size: 20px;\r\n}\r\n\r\n.msg-tag {\r\n  font-family: Lucida Sans Typewriter,Lucida Console,monaco,Bitstream Vera Sans Mono,monospace;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3 olusers well\">\n      <h3 class=\"user-heading\">Users in ChatRoom</h3>\n      <div class=\"user-names\" *ngFor = \"let user of olUsers\">\n        👉 {{user}}\n      </div>\n    </div>\n    <div class = \"col-md-9 chatbox\">\n      <div class=\"msgbox\">\n        <div *ngFor = \"let msg of chatmsg\">\n          <h4><strong>{{msg.user}}: </strong><span class=\"msg-tag\">{{msg.msg}}</span></h4>\n        </div>\n      </div>\n      <hr/>\n      <div class=\"msgbutton\">\n        <div class=\"form-group\" (keyup.enter) = \"send(chatip)\">\n          <label for=\"inputlg\">Enter Message:</label>\n          <input class=\"form-control input-lg\" [(ngModel)] = \"chatip\" type=\"text\" placeholder=\"Hit Enter to Send Message\"><br/>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent() {
        var _this = this;
        this.socket = null;
        this.chatip = '';
        this.chatmsg = new Array();
        this.port = "http://localhost:3000";
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('/');
        var listener = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(this.socket, 'message');
        listener.subscribe(function (payload) {
            _this.chatmsg.push(payload);
        });
        var userListener = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromEvent(this.socket, 'getUsers');
        userListener.subscribe(function (payload) {
            _this.olUsers = payload;
            console.log(payload);
        });
    }
    ChatComponent.prototype.send = function (msg) {
        this.chatip = '';
        this.socket.emit('message', msg);
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.socket.emit('newUser', this.currentUser.username);
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".site-sidebar {\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  overflow: hidden;\r\n  z-index: 2;\r\n  width: 25%;\r\n  font-size: 14px;\r\n  padding: 45px 40px;\r\n  color: #fff;\r\n  text-align: left;\r\n\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .site-sidebar {\r\n    top: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n    right: auto;\r\n    position: relative;\r\n    width: auto;\r\n    padding-top: 40px;\r\n    padding-bottom: 0\r\n  }\r\n  .site-sidebar:before {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: -50px;\r\n    content: \" \";\r\n    display: block;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 850px\r\n  }\r\n  .parent-home .site-sidebar:before {\r\n    display: none\r\n  }\r\n}\r\n\r\n.site-sidebar .site-sidebar-bg {\r\n  background-color: #009999;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0\r\n}\r\n\r\n.site-sidebar .site-sidebar-inner {\r\n  position: relative\r\n}\r\n\r\n.site-sidebar .block+.block {\r\n  margin-top: 45px\r\n}\r\n\r\n.site-sidebar .block .block-title {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 300;\r\n  color: #aaa;\r\n  color: rgba(255, 255, 255, .5);\r\n  margin-bottom: 15px\r\n}\r\n\r\n.site-sidebar .block-social {\r\n  font-size: 22px\r\n}\r\n\r\n.site-sidebar .posts-list {\r\n  list-style: none\r\n}\r\n\r\n.site-sidebar .posts-list,\r\n.site-sidebar .posts-list>li {\r\n  margin: 0;\r\n  padding: 0\r\n}\r\n\r\n.site-sidebar .posts-list>li {\r\n  display: block\r\n}\r\n\r\n.site-sidebar .posts-list li {\r\n  margin: 15px 0\r\n}\r\n\r\n.site-sidebar .posts-list a {\r\n  text-decoration: none;\r\n  color: inherit\r\n}\r\n\r\n.site-sidebar .posts-list a:hover .post-title {\r\n  text-decoration: underline\r\n}\r\n\r\n.site-sidebar .posts-list .post-title {\r\n  font-size: 14px;\r\n  font-weight: 300\r\n}\r\n\r\n.site-sidebar .posts-list .post-date {\r\n  color: #aaa;\r\n  color: rgba(204, 204, 204, .7);\r\n  font-size: 13px;\r\n  line-height: 24px;\r\n  font-weight: 300;\r\n  font-style: italic\r\n}\r\n\r\n.person {\r\n  display: block;\r\n  -webkit-font-smoothing: antialiased;\r\n  color: inherit\r\n}\r\n\r\n.person,\r\n.person:hover {\r\n  text-decoration: none\r\n}\r\n\r\n.site-sidebar .person {\r\n  text-align: center\r\n}\r\n\r\n.person .person-avatar {\r\n  border-radius: 50%;\r\n  margin-bottom: 10px\r\n}\r\n\r\n.person .person-avatar img {\r\n  width: 152px;\r\n  height: 152px\r\n}\r\n\r\n.person .person-content {\r\n  margin-left: -40px;\r\n  margin-right: -40px\r\n}\r\n\r\n.person .person-content .person-title {\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  text-transform: uppercase\r\n}\r\n\r\n.person .person-content .person-subtitle {\r\n  font-size: 16px;\r\n  font-weight: 300;\r\n  text-transform: uppercase\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .person .person-avatar img {\r\n    width: 120px;\r\n    height: 120px\r\n  }\r\n}\r\n\r\n.main-navigation {\r\n  margin: 45px -40px;\r\n  line-height: 30px;\r\n  position: relative;\r\n  font-size: 14px;\r\n  text-transform: uppercase\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .main-navigation {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    line-height: 50px;\r\n    text-align: right;\r\n    margin: 20px -40px 0\r\n  }\r\n}\r\n\r\n.main-navigation .navigation-extend-bar {\r\n  font-size: 18px;\r\n  border: 1px solid rgba(255, 255, 255, .2);\r\n  border-width: 1px 0;\r\n  padding: 0 20px;\r\n  display: none\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .main-navigation .navigation-extend-bar {\r\n    display: block\r\n  }\r\n}\r\n\r\n.main-navigation .navigation-extend-bar a {\r\n  display: inline-block\r\n}\r\n\r\n.main-navigation .navigation-extend-bar .social-icons {\r\n  float: left\r\n}\r\n\r\n.main-navigation .navigation-extend-bar .navigation-extend-button {\r\n  width: 50%\r\n}\r\n\r\n.main-navigation ul {\r\n  list-style: none\r\n}\r\n\r\n.main-navigation ul,\r\n.main-navigation ul>li {\r\n  margin: 0;\r\n  padding: 0\r\n}\r\n\r\n.main-navigation ul>li {\r\n  display: block\r\n}\r\n\r\n.main-navigation ul+ul {\r\n  margin-top: 30px\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .main-navigation ul+ul {\r\n    margin-top: 0\r\n  }\r\n}\r\n\r\n.main-navigation ul li {\r\n  position: relative;\r\n  padding: 0 40px\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .main-navigation ul li {\r\n    padding: 0 20px\r\n  }\r\n}\r\n\r\n.main-navigation ul li a:hover,\r\n.main-navigation ul li.current a {\r\n  color: #fff\r\n}\r\n\r\n@media (min-width:1024px) {\r\n  .main-navigation ul li.current:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 9px solid transparent;\r\n    border-bottom: 9px solid transparent;\r\n    border-right: 8px solid #fff;\r\n    bottom: 6px;\r\n    left: auto;\r\n    right: 0\r\n  }\r\n}\r\n\r\n.main-navigation a {\r\n  color: #ccc;\r\n  color: rgba(255, 255, 255, .6);\r\n  text-decoration: none;\r\n  display: block\r\n}\r\n\r\n.main-navigation a:focus,\r\n.main-navigation a:hover {\r\n  color: #fff\r\n}\r\n\r\n@media (min-width:1024px) {\r\n  .main-navigation .current a:after,\r\n  .main-navigation a:hover:after {\r\n    content: \" \\F105   \";\r\n    padding-left: 3px;\r\n    font-family: FontAwesome\r\n  }\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  .main-navigation .navigation-extendable {\r\n    height: 0;\r\n    transition: height .5s\r\n  }\r\n  .main-navigation.extended .navigation-extendable {\r\n    height: 200px\r\n  }\r\n}\r\n\r\n@media (max-width:1023px) {\r\n  body.parent-home .site-sidebar {\r\n    padding-top: 0\r\n  }\r\n  body.parent-home .site-sidebar .person {\r\n    display: none\r\n  }\r\n  body.parent-home .site-sidebar .main-navigation {\r\n    margin-top: 0\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- SIDEBAR -->\n<aside class=\"site-sidebar\">\n  <div class=\"site-sidebar-bg\"></div>\n\n  <div class=\"site-sidebar-inner\">\n    <a href=\"/\" class=\"person\">\n      <div class=\"person-avatar\">\n        <img src=\"/assets/IMG_3609.jpg\" alt=\"\" class=\"img-rounded\">\n      </div>\n      <div class=\"person-content\">\n        <h1 class=\"person-title\"><strong>Dashboard</strong></h1>\n        <h2 class=\"person-subtitle\">Select the 📰  Channel to Proceed ⏩</h2>\n      </div>\n    </a>\n<hr>\n    <nav class=\"block main-navigation\">\n\n      <div class=\"navigation-extendable\">\n        <ul>\n          <li class=\"\" ><a routerLink=\"#\" (click)=\"loadNews('business')\">Business</a></li>\n          <li class=\"\" ><a routerLink=\"/skills-and-offer\" (click)=\"loadNews('entertainment')\" >Entertainment</a></li>\n          <li class=\"\" ><a routerLink=\"/skills-and-offer\" (click)=\"loadNews('gaming')\">Gaming</a></li>\n          <li class=\"\" ><a routerLink=\"/skills-and-offer\" (click)=\"loadNews('general')\">General</a></li>\n          <li class=\"\" ><a routerLink=\"/skills-and-offer\" (click)=\"loadNews('sports')\">Sports</a></li>\n          <li class=\"\" ><a routerLink=\"/skills-and-offer\" (click)=\"loadNews('technology')\">Technology</a></li>\n            <li class=\"\" ><a routerLink=\"/skills-and-offer\" (click)=\"loadNews('science')\">Science</a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</aside>\n\n\n<hr/>\n<div class=\"news-channel\">\n  <div class=\"row\">\n    <div *ngIf = \"newsJson\">\n      <div *ngFor = \"let channel of newsJson.sources\">\n        <div class=\"col-md-3 \" >\n          <div class=\"well channel\" style=\"height: 100px\">\n            <h1 class=\"btn btn-block btn-warning\" [routerLink] = \"['/newsfeed', channel.id]\">{{channel.name}}</h1>\n            <p class=\"text-justify\" style=\"font-size: x-small\">{{channel.description}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br/>\n<br/>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__("../../../../../src/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(newsService) {
        this.newsService = newsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.loadChannels('none').subscribe(function (res) {
            _this.newsJson = res;
            console.log(_this.newsJson.sources[0]);
            console.log(_this.newsJson);
        });
    };
    DashboardComponent.prototype.loadNews = function (category) {
        var _this = this;
        this.newsService.loadChannels(category).subscribe(function (res) {
            _this.newsJson = res;
            console.log(_this.newsJson);
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>A demo Application</h1>\n\n  <div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n    <div class=\"panel panel-info\" >\n      <div class=\"panel-heading\" style=\"background-color: chocolate\">\n        <div class=\"panel-title\">Sign In</div>\n        <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#\">Forgot password?</a></div>\n      </div>\n\n      <div style=\"padding-top:30px\" class=\"panel-body\" >\n\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n\n        <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" (submit)=\"onLoginSubmit()\">\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username or email\" [(ngModel)]=\"username\">\n          </div>\n\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\">\n          </div>\n          <div class=\"input-group\">\n            <div class=\"checkbox\">\n              <label>\n                <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\n              </label>\n            </div>\n          </div>\n\n          <div style=\"margin-top:10px\" class=\"form-group\">\n            <!-- Button -->\n\n            <div class=\"col-sm-12 controls\">\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\"/>\n\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n            <div class=\"col-md-12 control\">\n              <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\n                Don't have an account!\n                <a href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">\n                  Sign Up Here\n                </a>\n              </div>\n            </div>\n          </div>\n        </form>\n\n\n\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(user);
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.authService.storeUserData(data.token, data.user);
                console.log(data.user);
                //this.flashMessage.show(data.user.name + ' logged in Successfully', {cssClass: 'alert-success', timeout: 5000});
                _this.router.navigate(['/dashboard']);
            }
            else {
                //this.flashMessage.show('Something went wrong, Please try again', {cssClass: 'alert-danger', timeout: 5000});
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/\">App</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" >\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li class=\"active\"><li *ngIf=\"!authService.loggedIn()\" class=\"active\"><a [routerLink] = \"['/']\">Home</a></li>\n      </ul>\n     <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink] = \"['/login']\">Login</a></li>\n        <li><a [routerLink] = \"['/dashboard']\">Dashboard</a></li>\n        <li><a [routerLink] = \"['/chat']\">ChatRoom</a></li>\n        <li><a [routerLink] = \"['/profile']\">Profile</a></li>\n        <li><a [routerLink] = \"['/register']\">Register</a></li>\n        <li><a (click) = \"onLogoutClick()\">Logout</a></li>\n      </ul>-->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"><a [routerLink] = \"['/login']\">Login</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink] = \"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink] = \"['/chat']\">ChatRoom</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink] = \"['/profile']\">Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink] = \"['/todo']\">Todos</a></li>\n        <li *ngIf=\"!authService.loggedIn()\"><a [routerLink] = \"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click) = \"onLogoutClick()\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this.flashMessage.show('Logged out successfully', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/newsfeed/newsfeed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newsfeed/newsfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf = \"newsFeeds\">\n      <div *ngFor = \"let news of newsFeeds.articles\">\n        <div class=\"list-group-item clearfix\">\n          <div class=\"col-md-3 pull-left\">\n            <img class=\"img-thumbnail news-thumb img-responsive\" src=\"{{news.urlToImage}}\"/>\n          </div>\n          <div class=\"col-md-9\">\n            <div class=\"list-group-item-heading\">\n              <a href=\"{{news.url}}\" target=\"_blank\"><h5 class=\"news-title\">{{news.title}}</h5></a>\n              <div class=\"row\">\n                <div class=\"col-md-5 bg-info\" style=\"float: left;\">\n                  <p><strong>Author: </strong>{{news.author}}</p>\n                </div>\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-4 right-float top-right\">\n                  <p>Published at:{{news.publishedAt | date: 'medium'}}</p>\n                </div>\n              </div>\n              <div class=\"row\" id=\"row-description\">\n                <div class=\"col-md-12 list-group-item-text\">{{news.description}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/newsfeed/newsfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__("../../../../../src/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsfeedComponent = (function () {
    function NewsfeedComponent(route, news) {
        this.route = route;
        this.news = news;
    }
    NewsfeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.source = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        console.log('Getting Channel - ' + this.id);
        this.news.loadNewsFeeds(this.id).subscribe(function (res) {
            _this.newsFeeds = res;
            console.log(_this.newsFeeds);
        });
    };
    NewsfeedComponent.prototype.ngOnDestroy = function () {
        this.source.unsubscribe();
    };
    NewsfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newsfeed',
            template: __webpack_require__("../../../../../src/app/components/newsfeed/newsfeed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/newsfeed/newsfeed.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]])
    ], NewsfeedComponent);
    return NewsfeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }),
            function (err) {
                console.log(err);
                return false;
            };
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"signupbox\"   class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\" style=\"background-color: #888888\">\n      <div class=\"panel-title\">Sign Up</div>\n      <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" href=\"#\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\">Sign In</a></div>\n    </div>\n    <div class=\"panel-body\" >\n      <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" (submit)= \"onRegisterSubmit()\">\n\n        <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\n          <p>Error:</p>\n          <span></span>\n        </div>\n\n\n\n        <div class=\"form-group\">\n          <label  class=\"col-md-3 control-label\">Email</label>\n          <div class=\"col-md-9\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"email\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label  class=\"col-md-3 control-label\">UserName*</label>\n          <div class=\"col-md-9\">\n            <input type=\"text\" class=\"form-control\"  placeholder=\"First Name\" [(ngModel)]=\"username\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label  class=\"col-md-3 control-label\">Full Name</label>\n          <div class=\"col-md-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label  class=\"col-md-3 control-label\">Password</label>\n          <div class=\"col-md-9\">\n            <input   type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\" [(ngModel)]=\"password\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <!-- Button -->\n          <div class=\"col-md-offset-3 col-md-9\">\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"SignUp\"/>\n\n          </div>\n        </div>\n\n\n\n\n\n      </form>\n    </div>\n  </div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FlashMessagesService } from 'angular2-flash-messages';

var SignupComponent = (function () {
    function SignupComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            // this.flashMessage.show("Please Fill Out all the Details", {cssClass: 'alert-danger', timeout: 4000});
            return false;
        }
        else {
            //Validate email
            if (!this.validateService.validateEmail(user.email)) {
                // this.flashMessage.show('Incorrect Email Format', {cssClass: 'alert-danger', timeout: 4000});
                return false;
            }
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log(data.success, "succesfull");
                //  this.flashMessage.show('You are now Registered and can log in', {cssClass: 'alert-success', timeout: 5000});
                _this.router.navigate(['/login']);
            }
            else {
                console.log("unsuccesfull");
                //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});
                _this.router.navigate(['/register']);
            }
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/to-list/to-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/to-list/to-list.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/to-list/to-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToListComponent = (function () {
    function ToListComponent() {
    }
    ToListComponent.prototype.ngOnInit = function () {
    };
    ToListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-to-list',
            template: __webpack_require__("../../../../../src/app/components/to-list/to-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/to-list/to-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToListComponent);
    return ToListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo-add/todo-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo-add/todo-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 pull-left\">\n  <div id=\"signupbox\"   class=\"mainbox col-md-6 col-sm-8 \">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\" style=\"background-color: #888888\">\n        <div class=\"panel-title\">Create Todo</div>\n      </div>\n      <div class=\"panel-body\" >\n        <form id=\"signupform\" class=\"form-horizontal\" role=\"form\"(submit)=\"addTodo()\" >\n\n          <div class=\"form-group\">\n            <label  class=\"col-md-3 control-label\">Todo</label>\n            <div class=\"col-md-9\">\n              <textarea type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Enter Todo\" [(ngModel)]=\"todotext\" ></textarea>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <!-- Button -->\n            <div class=\"col-md-offset-3 col-md-9\">\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"ADD TODO\"/>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo-add/todo-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoAddComponent = (function () {
    function TodoAddComponent(todoservice, router) {
        this.todoservice = todoservice;
        this.router = router;
        this.onupdating = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ;
    TodoAddComponent.prototype.ngOnInit = function () {
    };
    TodoAddComponent.prototype.addTodo = function () {
        var _this = this;
        var todo = {
            text: this.todotext,
        };
        this.todoservice.addTodo(todo).subscribe(function (doc) {
            if (doc) {
                console.log(doc + "added new todo");
                _this.router.navigate(['/todo']);
                _this.onupdating.emit("updated");
            }
            else {
                console.log("notadded");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], TodoAddComponent.prototype, "onupdating", void 0);
    TodoAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-add',
            template: __webpack_require__("../../../../../src/app/components/todo-add/todo-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo-add/todo-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TodoAddComponent);
    return TodoAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 pull-left\">\n    <app-todo-add (onupdating)=\"onOpen($event)\"></app-todo-add>\n  </div>\n</div>\n<div class=\"row\" style=\"padding-left: 15px\">\n  <div class=\"col-md-6\" ><h1>To Be Completed</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n\n  <div class=\"row\" style=\"padding-left: 15px\" *ngFor=\"let todos of todoList\">\n    <div class=\"col-md-8 center-block\"  >\n      <a  class=\"list-group-item clearfix\"  style=\"cursor: pointer\" >\n        <div class=\"text-info\" style=\"padding-left: 15px\">\n          <div class=\"list-group-item-heading\">{{ todos.text}}</div>\n        </div>\n        <div *ngIf=\"todos.completed\"  class=\"col-md-5 bg-info\" style=\"float: left;\">\n          <p style=\"font-size: x-small\"><strong>CompletedAt: </strong>{{todos.completedAt |  date:'short'}}</p>\n        </div>\n        <div class=\"pull-right\" >\n\n          <button *ngIf=\"!todos.completed\" (click)=\"onTodoCompleted(todos)\" type=\"button\" class=\"btn btn-success\" >Completed</button>\n          <button (click)=\"onTodoDeleted(todos)\" type=\"button\" class=\"btn btn-danger\" >Delete</button>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = (function () {
    function TodoComponent(todoservice, router, authService) {
        this.todoservice = todoservice;
        this.router = router;
        this.authService = authService;
        this.todoList = [];
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoservice.getTodo().subscribe(function (todos) {
            if (todos) {
                console.log(todos.todos);
                _this.todoList = todos.todos;
            }
            else {
                console.log("not successfull");
            }
        });
    };
    TodoComponent.prototype.onOpen = function (e) {
        var _this = this;
        this.todoservice.getTodo().subscribe(function (todos) {
            if (todos) {
                console.log(todos.todos);
                _this.todoList = todos.todos;
            }
            else {
                console.log("not successfull");
            }
        });
    };
    TodoComponent.prototype.onTodoDeleted = function (todos) {
        var _this = this;
        this.todoservice.deleteTodo(todos).subscribe(function (doc) {
            if (doc) {
                console.log(todos.todos);
                _this.onOpen("any");
            }
            else {
                console.log("not successfull");
            }
        });
    };
    TodoComponent.prototype.onTodoCompleted = function (todos) {
        var _this = this;
        this.todoservice.completeTodo(todos).subscribe(function (doc) {
            if (doc) {
                console.log(todos.todos);
                _this.onOpen("any");
            }
            else {
                console.log("not successfull");
            }
        });
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        // export class AuthGuard implements CanActivate {
        //     constructor(private authService: AuthService,
        //                 private router: Router) {
        //     }
        //     CanActivate() {
        //         if(this.authService.loggedIn()) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // }
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.port = "http://localhost:3000";
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/users/register';
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        console.log('authenticate func');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/users/authenticate';
        return this.http.post('/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
        //returns json with success and token and also user info
    };
    //this.http.get(this.newUrl).map(res => res.json())
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/users/profile';
        return this.http.get('/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loadTokens = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        return token;
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.loadTokens();
        if (token == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.loadChannels = function (category) {
        if (category === 'none' || undefined || null) {
            this.newUrl = 'https://newsapi.org/v1/sources?language=en';
            return this.http.get(this.newUrl).map(function (res) { return res.json(); });
        }
        else {
            this.newUrl = 'https://newsapi.org/v1/sources?language=en&country=us&category=' + category;
            return this.http.get(this.newUrl).map(function (res) { return res.json(); });
        }
    };
    NewsService.prototype.loadNewsFeeds = function (id) {
        this.newUrl = 'https://newsapi.org/v1/articles?source=' + id + '&sortBy=top&apiKey=46ea18ac6d9c4101838de39f18e512cb';
        return this.http.get(this.newUrl).map(function (res) { return res.json(); });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.port = "http://localhost:3000";
    }
    TodoService.prototype.addTodo = function (todo) {
        console.log(todo);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/todos/addtodo';
        return this.http.post('/todos/addtodo', todo, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.getTodo = function () {
        console.log("gettodo");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/todos/todo';
        return this.http.get('/todos/todo', { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    TodoService.prototype.completeTodo = function (todos) {
        console.log(todos);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/todos/';
        return this.http.patch(url + todos._id, todos, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService.prototype.deleteTodo = function (todos) {
        console.log(todos);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var url = 'http://localhost:4000/todos/';
        return this.http.delete('/todos/' + todos._id, { headers: headers }).map(function (res) { return res.json(); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.username === undefined || user.email === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map