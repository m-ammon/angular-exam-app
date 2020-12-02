import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { todoRoutes } from './todoRoutes';

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
