import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import { LocalStorageService } from 'angular-2-local-storage';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  private jwtHelper: JwtHelper;
  port = "http://localhost:3000";

  constructor(private http: Http,
             ) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url ='http://localhost:4000/users/register';
    return this.http.post('/users/register', user, {headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    console.log('authenticate func');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url ='http://localhost:4000/users/authenticate';
    return this.http.post('/users/authenticate', user, {headers}).map(res => res.json());
      //returns json with success and token and also user info
  }
//this.http.get(this.newUrl).map(res => res.json())
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:4000/users/profile';
    return this.http.get('/users/profile', {headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  loadTokens() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    return token;
  }

  loggedIn() {

    const token = this.loadTokens();
    if(token == null) {
      return false;
    }
    else {
      return true;
    }
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
