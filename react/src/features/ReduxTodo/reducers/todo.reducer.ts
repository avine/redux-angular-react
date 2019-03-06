import { Reducer } from 'redux';

import { Todo, TodoCategory } from '../../../domains';
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

export const reducer: Reducer<State> = (state = initialState, action: ActionsUnion) => {
  switch (action.type) {
    case ActionTypes.LoadSuccess: {
      return { ...state, list: action.payload };
    }

    case ActionTypes.AddSuccess: {
      return { ...state, list: [action.payload, ...state.list] };
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
