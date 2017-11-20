import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
//import { LocalStorageService } from 'angular-2-local-storage';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';



@Injectable()
export class TodoService {
  authToken: any;
  user: any;

  port = "http://localhost:3000";

  constructor(private http: Http) { }
  addTodo(todo) {
    console.log(todo);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:4000/todos/addtodo';
    return this.http.post('/todos/addtodo', todo,{headers}).map(res => res.json());
  }
  getTodo() {
    console.log("gettodo");
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:4000/todos/todo';
    return this.http.get('/todos/todo',{headers}).map(res => res.json());
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
completeTodo(todos) {
    console.log(todos)
    let headers =  new Headers();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  const url = 'http://localhost:4000/todos/';
  return this.http.patch(url + todos._id, todos ,{headers}).map(res => res.json());
}
  deleteTodo(todos) {
    console.log(todos)
    let headers =  new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const url = 'http://localhost:4000/todos/';
    return this.http.delete('/todos/' + todos._id ,{headers}).map(res => res.json());
  }


}
