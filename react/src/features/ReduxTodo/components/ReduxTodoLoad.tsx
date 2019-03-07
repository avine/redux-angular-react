import { connect, MapDispatchToProps } from 'react-redux';

import { Load } from '../actions/todo.actions';

type DispatchProps = { load: () => any };

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: any) => ({
  load: () => dispatch(Load())
});

export const ReduxTodoLoad = connect(null, mapDispatchToProps)((props: DispatchProps) => {
  props.load();
  return null;
});
