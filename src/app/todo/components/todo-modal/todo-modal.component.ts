import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Todo } from "src/app/core/api/models/totdo";
import { TodoService } from "src/app/core/api/services/todo.service";

@Component({
  selector: "aea-todo-modal",
  templateUrl: "./todo-modal.component.html",
  styleUrls: ["./todo-modal.component.css"]
})
export class TodoModalComponent implements OnInit {
  @Input() id: any;

  @Output() saveClicked = new EventEmitter<any>();
  @Output() cancelClicked = new EventEmitter();

  todoForm: any;

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {
    this.createForm();
    this.loadForm();
  }

  createForm(): void {
    this.todoForm = this.fb.group({
      id: 0,
      name: [null, Validators.required],
      date: [null, Validators.required],
      status: [false, Validators.requiredTrue]
    });
  }

  async loadForm(): Promise<any> {
    let item: Todo = await this.todoService.getTodo(this.id).toPromise();
    this.todoForm.setValue(item);
  }

  get nameControl(): AbstractControl | null { return this.todoForm.get("name"); }
  get dateControl(): AbstractControl | null { return this.todoForm.get("date"); }
}
