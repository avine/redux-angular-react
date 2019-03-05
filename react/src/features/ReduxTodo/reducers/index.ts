import { combineReducers } from 'redux';

import * as fromTodos from './todo.reducer';

export interface AppState {
  todo: fromTodos.State;
}

export const reducers = combineReducers<AppState>({
  todo: fromTodos.reducer
});
