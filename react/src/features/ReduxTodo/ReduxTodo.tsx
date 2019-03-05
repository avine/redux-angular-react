import React, { Component, Fragment } from 'react';

import styles from './ReduxTodo.module.css';
import { ReduxTodoAdd } from './ReduxTodoAdd/ReduxTodoAdd';
import { ReduxTodoCategory } from './ReduxTodoCategory/ReduxTodoCategory';
import { ReduxTodoList } from './ReduxTodoList/ReduxTodoList';
import { ReduxTodoMessage } from './ReduxTodoMessage/ReduxTodoMessage';
import { ReduxTodoStatus } from './ReduxTodoStatus/ReduxTodoStatus';

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
