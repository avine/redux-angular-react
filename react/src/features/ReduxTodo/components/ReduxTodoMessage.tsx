import { connect, MapStateToProps } from 'react-redux';

import { IUiTodoMessageProps, UiTodoMessage } from '../../../components/ui';
import { AppState } from '../reducers';

const mapStateToProps: MapStateToProps<IUiTodoMessageProps, {}, AppState> = (state) => ({
  hiddenCategory: undefined
});

export const ReduxTodoMessage = connect(mapStateToProps, null)(UiTodoMessage);
