import React, { Component, Fragment } from 'react';

import { UiTodoAdd, UiTodoCategory, UiTodoList, UiTodoMessage, UiTodoStatus } from '../../components/ui';
import {
    editText, filterByCategoryAndText, getStatus, hiddenCategory, isTextFree, Todo, todoBuilder, TodoCategory, toggleDone
} from '../../domains';
import { RestService } from '../../shared/RestService';
import styles from './VanillaTodo.module.css';

export interface IVanillaTodoState {
  todos: Todo[];
  filterEnabled: boolean;
  text: string;
  category: TodoCategory;
}

export class VanillaTodo extends Component<{}, IVanillaTodoState> {
  state: IVanillaTodoState = {
    todos: [],
    filterEnabled: false,
    text: '',
    category: 'all'
  };

  get addDisabled() {
    return !isTextFree(this.state.todos, this.state.text);
  }

  get hiddenCategory() {
    return hiddenCategory(this.state.todos, this.state.text, this.state.category);
  }

  get filter() {
    return this.state.filterEnabled ? this.state.text : '';
  }

  get todosFiltered() {
    return filterByCategoryAndText(this.state.todos, this.state.category, this.filter);
  }

  get status() {
    return getStatus(this.state.todos);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    RestService.getTodos().then(({ data }) => this.setState({ todos: data }));
  }

  add = (text: string) => {
    RestService.addTodo(todoBuilder(text)).then(this.refresh);
    this.setState({ text: '' });
  }

  toggleDone = (todo: Todo) => {
    RestService.updateTodo(toggleDone(todo)).then(this.refresh);
  }

  editText = (todo: Todo, text: string) => {
    if (text) {
      RestService.updateTodo(editText(todo, text)).then(this.refresh);
    } else {
      this.remove(todo);
    }
  }

  remove = (todo: Todo) => {
    RestService.removeTodo(todo).then(this.refresh);
  }

  filterEnabledChange = (filterEnabled: boolean) => this.setState({ filterEnabled });

  textChange = (text: string) => this.setState({ text });

  selectCategory = (category: TodoCategory) => this.setState({ category });

  render() {
    return (
      <Fragment>
        <div className={styles['top']}>
          <UiTodoAdd
            filterEnabled={this.state.filterEnabled}
            filterEnabledChange={this.filterEnabledChange}
            text={this.state.text}
            textChange={this.textChange}
            addDisabled={this.addDisabled}
            add={this.add} />
          <UiTodoMessage hiddenCategory={this.hiddenCategory} />
        </div>

        <UiTodoList
          toggleDone={this.toggleDone}
          remove={this.remove}
          editText={this.editText}
          todos={this.todosFiltered} />

        <div className={styles['bottom']}>
          <UiTodoStatus status={this.status} />
          <UiTodoCategory category={this.state.category} select={this.selectCategory} />
        </div>
      </Fragment>
    );
  }
}

export default VanillaTodo;
