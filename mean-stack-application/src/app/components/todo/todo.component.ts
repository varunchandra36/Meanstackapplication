import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../../services/todo.service';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor( private todoservice: TodoService,private router: Router,
               private authService: AuthService) { }
  todoList = [];
  ngOnInit() {
this.todoservice.getTodo().subscribe(todos=>{
  if(todos){
    console.log(todos.todos)
    this.todoList = todos.todos;

  }else {
    console.log("not successfull");
  }
});
  }
  onOpen(e){
    this.todoservice.getTodo().subscribe(todos=>{
      if(todos){
        console.log(todos.todos)
        this.todoList = todos.todos;

      }else {
        console.log("not successfull");
      }
    });
  }
  onTodoDeleted(todos){
    this.todoservice.deleteTodo(todos).subscribe(doc=>{
      if(doc){
        console.log(todos.todos);
        this.onOpen("any");
      }
      else {
        console.log("not successfull");
      }
    })
  }
  onTodoCompleted(todos){
    this.todoservice.completeTodo(todos).subscribe(doc=>{
      if(doc){
        console.log(todos.todos);
        this.onOpen("any");
      }
      else {
        console.log("not successfull");
      }
    })
  }


}
