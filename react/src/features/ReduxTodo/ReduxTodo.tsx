import React, { Component, Fragment } from 'react';

import styles from './ReduxTodo.module.css';
import { ReduxTodoAdd } from './components/ReduxTodoAdd';
import { ReduxTodoCategory } from './components/ReduxTodoCategory';
import { ReduxTodoList } from './components/ReduxTodoList';
import { ReduxTodoMessage } from './components/ReduxTodoMessage';
import { ReduxTodoStatus } from './components/ReduxTodoStatus';

export class ReduxTodo extends Component<{}, {}> {
  render() {
    return (
      <Fragment>
        <div className={styles['top']}>
          <ReduxTodoAdd />
          <ReduxTodoMessage />
        </div>

        <ReduxTodoList />

        <div className={styles['bottom']}>
          <ReduxTodoStatus />
          <ReduxTodoCategory />
        </div>
      </Fragment>
    );
  }
}

export default ReduxTodo;
