import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoListComponent, TodoModalComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
