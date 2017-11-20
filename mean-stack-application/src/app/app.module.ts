import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import {Http, HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


import { NavbarComponent } from './components/navbar/navbar.component';
import {ValidateService} from "../services/validate.service";
import {AuthService} from "../services/auth.service";
import {AuthGuard} from "../guards/auth.guard";
import { TodoComponent } from './components/todo/todo.component';
import {TodoService} from "../services/todo.service";
import { ToListComponent } from './components/to-list/to-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'newsfeed/:id',
    component: NewsfeedComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    NewsfeedComponent,
    ProfileComponent,
    ChatComponent,
    NavbarComponent,
    TodoComponent,
    ToListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
