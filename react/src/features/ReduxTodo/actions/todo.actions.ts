import { ActionCreator } from 'redux';

import { Todo, TodoCategory } from '../../../domains';
import { RestService } from '../../../shared/RestService';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';

export enum ActionTypes {
  LoadSuccess    = '[Redux:Todos] LoadSuccess',
  AddSuccess     = '[Redux:Todos] AddSuccess',
  UpdateSuccess  = '[Redux:Todos] UpdateSuccess',
  RemoveSuccess  = '[Redux:Todos] RemoveSuccess',

  Text           = '[Redux:Todos] Text',
  Category       = '[Redux:Todos] Category',
  FilterEnabled  = '[Redux:Todos] FilterEnabled'
}

type ThunkActionCreator = ActionCreator<ThunkAction<{}, AppState, {}, ActionsUnion>>;

export const Load: ThunkActionCreator = () => async (dispatch) => {
  const { data } = await RestService.getTodos();
  dispatch(LoadSuccess(data));
};
const LoadSuccess = (payload: Todo[]) => ({ 
  type: ActionTypes.LoadSuccess as typeof ActionTypes.LoadSuccess, payload
});

export const Add: ThunkActionCreator = (payload: Partial<Todo>) => async (dispatch) => {
  const { data } = await RestService.addTodo(payload);
  dispatch(AddSuccess(data));
};
const AddSuccess = (payload: Todo) => ({ 
  type: ActionTypes.AddSuccess as typeof ActionTypes.AddSuccess, payload
});

export const Update: ThunkActionCreator = (payload: Todo) => async (dispatch) => {
  const { data } = await RestService.updateTodo(payload);
  if (data) {
    dispatch(UpdateSuccess(payload));
  }
};
const UpdateSuccess = (payload: Todo) => ({
  type: ActionTypes.UpdateSuccess as typeof ActionTypes.UpdateSuccess, payload
});

export const Remove: ThunkActionCreator = (payload: Todo) => async (dispatch) => {
  const { data } = await RestService.removeTodo(payload);
  if (data) {
    dispatch(RemoveSuccess(payload));
  }
};
const RemoveSuccess = (payload: Todo) => ({
   type: ActionTypes.RemoveSuccess as typeof ActionTypes.RemoveSuccess, payload
});

export const Text = (payload: string) => ({
  type: ActionTypes.Text as typeof ActionTypes.Text, payload
});

export const Category = (payload: TodoCategory) => ({
  type: ActionTypes.Category as typeof ActionTypes.Category, payload
});

export const FilterEnabled = (payload: boolean) => ({
  type: ActionTypes.FilterEnabled as typeof ActionTypes.FilterEnabled, payload
});

export type ActionsUnion =
  | ReturnType<typeof LoadSuccess>
  | ReturnType<typeof AddSuccess>
  | ReturnType<typeof UpdateSuccess>
  | ReturnType<typeof RemoveSuccess>

  | ReturnType<typeof Text>
  | ReturnType<typeof Category>
  | ReturnType<typeof FilterEnabled>
;
