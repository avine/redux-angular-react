import { todoBuilder } from 'App/domains';
import { AppState } from 'App/reducers';

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as todosActions from '../../actions/todo.actions';
import { getFilterEnabled, getIsTextFree, getText } from '../../reducers';

@Component({
  selector: 'app-redux-todo-add',
  template: `
    <app-ui-todo-add
      [filterEnabled]="filterEnabled$ | async"
      [text]="text$ | async"
      [addDisabled]="!(isTextFree$ | async)"
      (filterEnabledChange)="filterEnabledChange($event)"
      (textChange)="textChange($event)"
      (add)="add($event)">
    </app-ui-todo-add>
  `
})
export class ReduxTodoAddComponent {
  filterEnabled$  = this.store.pipe(select(getFilterEnabled));
  text$           = this.store.pipe(select(getText));
  isTextFree$     = this.store.pipe(select(getIsTextFree));

  constructor(private store: Store<AppState>) { }

  filterEnabledChange(filterEnabled: boolean) {
    this.store.dispatch(new todosActions.FilterEnabled(filterEnabled));
  }

  textChange(text: string) {
    this.store.dispatch(new todosActions.Text(text));
  }

  add(text: string) {
    this.store.dispatch(new todosActions.Add(todoBuilder(text)));
  }
}
