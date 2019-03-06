import { connect, MapStateToProps } from 'react-redux';

import { IUiTodoMessageProps, UiTodoMessage } from '../../../components/ui';
import { AppState, getHiddenCategory } from '../reducers';

const mapStateToProps: MapStateToProps<IUiTodoMessageProps, {}, AppState> = (state) => ({
  hiddenCategory: getHiddenCategory(state)
});

export const ReduxTodoMessage = connect(mapStateToProps, null)(UiTodoMessage);
