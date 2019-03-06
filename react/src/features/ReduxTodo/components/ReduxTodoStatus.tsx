import { connect, MapStateToProps } from 'react-redux';

import { IUiTodoStatusProps, UiTodoStatus } from '../../../components/ui';
import { AppState } from '../reducers';

const mapStateToProps: MapStateToProps<IUiTodoStatusProps, {}, AppState> = (state) => ({
  status: { remainCount: 0, totalCount: 0 }
});

export const ReduxTodoStatus = connect(mapStateToProps, null)(UiTodoStatus);
