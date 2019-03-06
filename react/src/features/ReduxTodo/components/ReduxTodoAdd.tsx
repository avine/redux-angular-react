import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { IUiTodoAddProps, UiTodoAdd } from '../../../components/ui';
import { todoBuilder } from '../../../domains';
import { ActionsUnion, Add, FilterEnabled, Text } from '../actions/todo.actions';
import { AppState, getFilterEnabled, getText } from '../reducers';

type StateProps = Pick<IUiTodoAddProps, 'text' | 'filterEnabled'>;

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = (state) => ({
  text          : getText(state),
  filterEnabled : getFilterEnabled(state)
});

type DispatchProps = Pick<IUiTodoAddProps, 'textChange' | 'filterEnabledChange' | 'add'>;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch<ActionsUnion>) => ({
  textChange          : (text: string) => dispatch(Text(text)),
  filterEnabledChange : (filterEnabled: boolean) => dispatch(FilterEnabled(filterEnabled)),
  add                 : (text: string) => dispatch(Add(todoBuilder(text)))
});

export const ReduxTodoAdd = connect(mapStateToProps, mapDispatchToProps)(UiTodoAdd);
