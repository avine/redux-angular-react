import { Dispatch } from 'redux';

import { Todo, TodoCategory } from '../../../domains';
import { RestService } from '../../../shared/RestService';

export enum ActionTypes {
  // Load           = '[Redux:Todos] Load',
  LoadSuccess    = '[Redux:Todos] LoadSuccess',

  // Add            = '[Redux:Todos] Add',
  AddSuccess     = '[Redux:Todos] AddSuccess',

  // Update         = '[Redux:Todos] Update',
  UpdateSuccess  = '[Redux:Todos] UpdateSuccess',

  // Remove         = '[Redux:Todos] Remove',
  RemoveSuccess  = '[Redux:Todos] RemoveSuccess',

  Text           = '[Redux:Todos] Text',
  Category       = '[Redux:Todos] Category',
  FilterEnabled  = '[Redux:Todos] FilterEnabled'
}

export const Load = () => async (dispatch: Dispatch) => {
  const { data } = await RestService.getTodos();
  dispatch(LoadSuccess(data));
};
export const LoadSuccess = (payload: Todo[]) => ({
  type: ActionTypes.LoadSuccess as typeof ActionTypes.LoadSuccess, payload
});

export const Add = (payload: Partial<Todo>) => async (dispatch: Dispatch) => {
  const { data } = await RestService.addTodo(payload);
  dispatch(AddSuccess(data));
};
export const AddSuccess = (payload: Todo) => ({
  type: ActionTypes.AddSuccess as typeof ActionTypes.AddSuccess, payload
});

export const Update = (payload: Todo) => async (dispatch: Dispatch) => {
  const { data } = await RestService.updateTodo(payload);
  if (data) {
    dispatch(UpdateSuccess(payload));
  }
};
export const UpdateSuccess = (payload: Todo) => ({
  type: ActionTypes.UpdateSuccess as typeof ActionTypes.UpdateSuccess, payload
});

export const Remove = (payload: Todo) => async (dispatch: Dispatch) => {
  const { data } = await RestService.removeTodo(payload);
  if (data) {
    dispatch(RemoveSuccess(payload));
  }
};
export const RemoveSuccess = (payload: Todo) => ({
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
  // | ReturnType<typeof Load>
  | ReturnType<typeof LoadSuccess>

  // | ReturnType<typeof Add>
  | ReturnType<typeof AddSuccess>

  // | ReturnType<typeof Update>
  | ReturnType<typeof UpdateSuccess>

  // | ReturnType<typeof Remove>
  | ReturnType<typeof RemoveSuccess>

  | ReturnType<typeof Text>
  | ReturnType<typeof Category>
  | ReturnType<typeof FilterEnabled>
;
