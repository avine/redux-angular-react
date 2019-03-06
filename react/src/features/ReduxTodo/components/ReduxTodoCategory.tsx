import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IUiTodoCategoryProps, UiTodoCategory } from '../../../components/ui';
import { TodoCategory } from '../../../domains';
import { ActionsUnion, Category } from '../actions/todo.actions';
import { AppState } from '../reducers';

type StateProps = Pick<IUiTodoCategoryProps, 'category'>;

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = (state) => ({
  category: state.todo.category
});

type DispatchProps = Pick<IUiTodoCategoryProps, 'select'>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch<ActionsUnion>) => ({
  select: (category: TodoCategory) => dispatch(Category(category))
});

export const ReduxTodoCategory = connect(mapStateToProps, mapDispatchToProps)(UiTodoCategory);
