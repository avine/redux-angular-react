import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ReduxTodoAdd } from './components/ReduxTodoAdd';
import { ReduxTodoCategory } from './components/ReduxTodoCategory';
import { ReduxTodoList } from './components/ReduxTodoList';
import { ReduxTodoLoad } from './components/ReduxTodoLoad';
import { ReduxTodoMessage } from './components/ReduxTodoMessage';
import { ReduxTodoStatus } from './components/ReduxTodoStatus';
import { reducers } from './reducers';
import styles from './ReduxTodo.module.css';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export class ReduxTodo extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <ReduxTodoLoad />

        <div className={styles['top']}>
          <ReduxTodoAdd />
          <ReduxTodoMessage />
        </div>

        <ReduxTodoList />

        <div className={styles['bottom']}>
          <ReduxTodoStatus />
          <ReduxTodoCategory />
        </div>
      </Provider>
    );
  }
}

export default ReduxTodo;
