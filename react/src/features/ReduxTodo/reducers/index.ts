import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as fromTodos from './todo.reducer';

export interface AppState {
  todo: fromTodos.State;
}

export const reducers = combineReducers<AppState>({
  todo: fromTodos.reducer
});

export const getTodosState = (state: AppState) => state.todo;

export const getTodos           = createSelector(getTodosState, fromTodos._getTodos);
export const getText            = createSelector(getTodosState, fromTodos._getText);
export const getCategory        = createSelector(getTodosState, fromTodos._getCategory);
export const getFilterEnabled   = createSelector(getTodosState, fromTodos._getFilterEnabled);
export const getFilter          = createSelector(getTodosState, fromTodos._getFilter);
export const getTodosFiltered   = createSelector(getTodosState, fromTodos._getTodosFiltered);
export const getIsTextFree      = createSelector(getTodosState, fromTodos._getIsTextFree);
export const getHiddenCategory  = createSelector(getTodosState, fromTodos._getHiddenCategory);
