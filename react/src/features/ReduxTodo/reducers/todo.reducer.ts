import { Reducer } from 'redux';
import { createSelector } from 'reselect';

import { Todo, TodoCategory, filterByCategoryAndText, isTextFree, hiddenCategory } from '../../../domains';
import { ActionsUnion, ActionTypes } from '../actions/todo.actions';

export interface State {
  list: Todo[];
  text: string;
  category: TodoCategory;
  filterEnabled: boolean;
}

export const initialState: State = {
  list: [],
  text: '',
  category: 'all',
  filterEnabled: false
};

export const reducer: Reducer<State, ActionsUnion> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LoadSuccess: {
      return { ...state, list: action.payload };
    }

    case ActionTypes.AddSuccess: {
      return { ...state, list: [action.payload, ...state.list], text: '' };
    }

    case ActionTypes.UpdateSuccess: {
      const index = state.list.findIndex(bookmark => bookmark.id === action.payload.id);
      if (index !== -1) {
        const list = [...state.list];
        list.splice(index, 1, action.payload);
        return { ...state, list };
      }
      return state;
    }

    case ActionTypes.RemoveSuccess: {
      const index = state.list.findIndex(bookmark => bookmark.id === action.payload.id);
      if (index !== -1) {
        const list = [...state.list];
        list.splice(index, 1);
        return { ...state, list };
      }
      return state;
    }

    case ActionTypes.Text: {
      return { ...state, text: action.payload };
    }

    case ActionTypes.Category: {
      return { ...state, category: action.payload };
    }

    case ActionTypes.FilterEnabled: {
      return { ...state, filterEnabled: action.payload };
    }

    default: {
      return state;
    }
  }
};

export const _getTodos = (state: State) => state.list;

export const _getText = (state: State) => state.text;

export const _getCategory = (state: State) => state.category;

export const _getFilterEnabled = (state: State) => state.filterEnabled;

export const _getFilter = createSelector(
  _getText, _getFilterEnabled,
  (text, filterEnabled) => filterEnabled ? text : ''
);

export const _getTodosFiltered = createSelector(
  _getTodos, _getCategory, _getFilter,
  (todos, category, filter) => filterByCategoryAndText(todos, category, filter)
);

export const _getIsTextFree = createSelector(
  _getTodos, _getText,
  (todos, text) => isTextFree(todos, text)
);

export const _getHiddenCategory = createSelector(
  _getTodos, _getText, _getCategory,
  (todos, text, category) => hiddenCategory(todos, text, category)
);
