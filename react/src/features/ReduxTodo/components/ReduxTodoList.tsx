import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IUiTodoListProps, UiTodoList } from '../../../components/ui';
import { editText, toggleDone } from '../../../domains';
import { ActionsUnion, Remove, Update } from '../actions/todo.actions';
import { AppState, getTodosFiltered } from '../reducers';

type StateProps = Pick<IUiTodoListProps, 'todos'>;

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = (state) => ({
  todos: getTodosFiltered(state)
});

type DispatchProps = Pick<IUiTodoListProps, 'toggleDone' | 'editText' | 'remove'>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch<ActionsUnion>) => ({
  editText    : (todo, text) => dispatch(Update(editText(todo, text))),
  toggleDone  : (todo) => dispatch(Update(toggleDone(todo))),
  remove      : (todo) => dispatch(Remove(todo))
});

export const ReduxTodoList = connect(mapStateToProps, mapDispatchToProps)(UiTodoList);
