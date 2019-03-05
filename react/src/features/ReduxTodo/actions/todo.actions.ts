import { Todo, TodoCategory } from '../../../domains';

export enum ActionTypes {
  Load           = '[Redux:Todos] Load',
  LoadSuccess    = '[Redux:Todos] LoadSuccess',

  Add            = '[Redux:Todos] Add',
  AddSuccess     = '[Redux:Todos] AddSuccess',

  Update         = '[Redux:Todos] Update',
  UpdateSuccess  = '[Redux:Todos] UpdateSuccess',

  Remove         = '[Redux:Todos] Remove',
  RemoveSuccess  = '[Redux:Todos] RemoveSuccess',

  Text           = '[Redux:Todos] Text',
  Category       = '[Redux:Todos] Category',
  FilterEnabled  = '[Redux:Todos] FilterEnabled',
}

export const Load = () => ({ type: ActionTypes.Load });
export const LoadSuccess = (payload: Todo[]) => ({ type: ActionTypes.LoadSuccess, payload });

export const Add = (payload: Partial<Todo>) => ({ type: ActionTypes.Add, payload });
export const AddSuccess = (payload: Todo) => ({ type: ActionTypes.AddSuccess, payload });

export const Update = (payload: Todo) => ({ type: ActionTypes.Update, payload });
export const UpdateSuccess = (payload: Todo) => ({ type: ActionTypes.UpdateSuccess, payload });

export const Remove = (payload: Todo) => ({ type: ActionTypes.Remove, payload });
export const RemoveSuccess = (payload: Todo) => ({ type: ActionTypes.RemoveSuccess, payload });

export const Text = (payload: string) => ({ type: ActionTypes.Text, payload });

export const Category = (payload: TodoCategory) => ({ type: ActionTypes.Category, payload });

export const FilterEnabled = (payload: boolean) => ({ type: ActionTypes.FilterEnabled, payload });

export type ActionsUnion =
  | ReturnType<typeof Load>
  | ReturnType<typeof LoadSuccess>

  | ReturnType<typeof Add>
  | ReturnType<typeof AddSuccess>

  | ReturnType<typeof Update>
  | ReturnType<typeof UpdateSuccess>

  | ReturnType<typeof Remove>
  | ReturnType<typeof RemoveSuccess>

  | ReturnType<typeof Text>
  | ReturnType<typeof Category>
  | ReturnType<typeof FilterEnabled>
;
