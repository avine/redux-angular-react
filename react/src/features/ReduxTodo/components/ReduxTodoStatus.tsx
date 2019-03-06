import { connect, MapStateToProps } from 'react-redux';

import { IUiTodoStatusProps, UiTodoStatus } from '../../../components/ui';
import { getStatus } from '../../../domains';
import { AppState, getTodos } from '../reducers';

const mapStateToProps: MapStateToProps<IUiTodoStatusProps, {}, AppState> = (state) => ({
  status: getStatus(getTodos(state)) // TODO: create a selector for getStatus (in both React and Angular versions)...
});

export const ReduxTodoStatus = connect(mapStateToProps, null)(UiTodoStatus);
