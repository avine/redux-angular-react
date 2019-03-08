import { connect, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { ActionsUnion, Load } from '../actions/todo.actions';

type DispatchProps = { load: () => void; };

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: Dispatch<ActionsUnion>) => ({
  load: () => dispatch(Load())
});

export const ReduxTodoLoad = connect(null, mapDispatchToProps)((props: DispatchProps) => {
  props.load();
  return null;
});
