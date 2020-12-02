import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "../models/totdo";

import todoJson from "../../../../assets/todoList.json";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    todoJson.forEach(x => {
      this.todos.push(x);
    });
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  getTodo(id: number): Observable<Todo | any> {
    return of(this.todos.find(x => x.id === id));
  }

  addTodo(todo: Todo): void {
    todo.id = this.todos.length >= 1 ? Math.max.apply(Math, this.todos.map(x => x.id)) + 1 : 1;
    this.todos.push(todo);
  }

  changeTodo(todo: Todo): void {
    const index: number = this.todos.findIndex(x => x.id === todo.id);
    if (index > -1) {
      this.todos[index] = todo;
    }
  }

  deleteTodo(id: number): void {
    const index: number = this.todos.findIndex(x => x.id === id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
