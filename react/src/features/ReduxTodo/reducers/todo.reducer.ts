import { Reducer } from 'redux';

import { Todo } from '../../../domains';
import { ActionsUnion, ActionTypes } from '../actions/todo.actions';

export interface State {
  list: Todo[];
}

export const initialState: State = {
  list: []
};

export const reducer: Reducer<State> = (state = initialState, action: ActionsUnion) => {
  switch (action.type) {
    case ActionTypes.LoadSuccess: {
      return { ...state, list: action.payload };
    }

    case ActionTypes.AddSuccess: {
      return { ...state, list: [action.payload, ...state.list] };
    }

    default: {
      return state;
    }
  }
};
