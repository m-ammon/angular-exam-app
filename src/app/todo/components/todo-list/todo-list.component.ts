import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/core/api/models/totdo";
import { TodoService } from "src/app/core/api/services/todo.service";

@Component({
  selector: "aea-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  editModal: {enabled: boolean, todoId: number} = {enabled: false, todoId: 0};

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteClicked(id: number): void {
    this.todoService.deleteTodo(id);
  }

  todoStatusChanged(todo: Todo, event: any): void {
    todo.status = event.currentTarget.checked;
    this.saveTodo(todo);
  }

  saveTodo(todo: Todo): void {
    if (todo.id === 0) {
      this.todoService.addTodo(todo);
    } else {
      this.todoService.changeTodo(todo);
    }
    this.hideEditModal();
  }

  showEditModal(todoId: number): void {
    this.editModal.todoId = todoId;
    this.editModal.enabled = true;
  }

  hideEditModal(): void {
    this.editModal.enabled = false;
  }
}
