import React from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import { IUiTodoListProps, UiTodoList } from '../../../components/ui';
import { Remove, Update } from '../actions/todo.actions';
import { AppState } from '../reducers';

type StateProps = Pick<IUiTodoListProps, 'todos'>;

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = (state) => ({
  todos: state.todo.list
});

type DispatchProps = Pick<IUiTodoListProps, 'toggleDone' | 'editText' | 'remove'>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: any) => ({
  editText    : () => dispatch(Update({ id: 1, text: 'dummy', done: false })),
  toggleDone  : () => dispatch(Update({ id: 1, text: 'dummy', done: true })),
  remove      : () => dispatch(Remove({ id: 1, text: 'dummy', done: false }))
});

export const ReduxTodoList = connect(mapStateToProps, mapDispatchToProps)(UiTodoList);
