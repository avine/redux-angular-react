import { ApiService } from 'src/app/services/api.service';
import { TodosService } from 'src/app/services/todos.service';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rxjs-todo-add',
  templateUrl: './rxjs-todo-add.component.html',
  styleUrls: ['./rxjs-todo-add.component.css']
})
export class RxjsTodoAddComponent {
  @Input() text = '';
  @Output() textChange = new EventEmitter<string>();

  constructor(
    private apiService: ApiService,
    private todosService: TodosService
  ) { }

  emitText(text: string) {
    this.text = text;
    this.textChange.emit(text);
  }

  add(text: string) {
    this.apiService
      .addTodo({ id: null, text, done: false })
      .subscribe(() => this.todosService.sync());
  }
}