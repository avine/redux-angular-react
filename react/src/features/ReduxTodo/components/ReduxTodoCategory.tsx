import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IUiTodoCategoryProps, UiTodoCategory } from '../../../components/ui';
import { TodoCategory } from '../../../domains';
import { ActionsUnion, Category } from '../actions/todo.actions';
import { AppState, getCategory } from '../reducers';

type StateProps = Pick<IUiTodoCategoryProps, 'category'>;

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = (state) => ({
  category: getCategory(state)
});

type DispatchProps = Pick<IUiTodoCategoryProps, 'select'>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<AppState, {}, ActionsUnion>) => ({
  select: (category: TodoCategory) => dispatch(Category(category))
});

export const ReduxTodoCategory = connect(mapStateToProps, mapDispatchToProps)(UiTodoCategory);
