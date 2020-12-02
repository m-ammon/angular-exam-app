import { Routes } from "@angular/router";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';

export const todoRoutes: Routes = [
    { path: 'todo', component: TodoListComponent },
]