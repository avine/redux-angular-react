import { connect, MapDispatchToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsUnion, Load } from '../actions/todo.actions';
import { AppState } from '../reducers';

type DispatchProps = { load: () => void; };

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<AppState, {}, ActionsUnion>) => ({
  load: () => dispatch(Load())
});

export const ReduxTodoLoad = connect(null, mapDispatchToProps)((props: DispatchProps) => {
  props.load();
  return null;
});
