import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../../services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  constructor( private todoservice: TodoService, private router: Router) { }
  todotext: String;
;
  @Output() onupdating: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }
  addTodo(){
    const todo = {
      text: this.todotext,
    };
    this.todoservice.addTodo(todo).subscribe(doc => {
        if (doc) {
          console.log(doc+"added new todo");
          this.router.navigate(['/todo']);
          this.onupdating.emit("updated");

        } else {
          console.log("notadded");
        }
      }
    );
  }

}
