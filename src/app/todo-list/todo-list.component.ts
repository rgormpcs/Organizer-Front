import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done: Boolean,
    public targetDate: Date,
  ){

  }

}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos=[
    // {id:1,description:'Learn Angular and Spring Microservices'},
    new Todo(1,'Learn Angular and Spring Microservices',false, new Date()),
    new Todo(2,'Play IGI project game',false, new Date()),
    new Todo(3,'Become an expert at Spring Boot',false, new Date()),
   
  ]
 

  constructor() { }

  ngOnInit(): void {
  }

}
