import { all, call, put, takeEvery } from 'redux-saga/effects';

import RestService from '../../../shared/RestService';
import { ActionTypes, Add, AddSuccess, LoadSuccess, Remove, RemoveSuccess, Update, UpdateSuccess } from '../actions/todo.actions';

function* getTodos() {
  const { data } = yield call(RestService.getTodos);
  yield put(LoadSuccess(data));
}
function* getTodosEffect() {
  yield takeEvery(ActionTypes.Load, getTodos);
}

function* addTodo(action: ReturnType<typeof Add>) {
  const { data } = yield call(RestService.addTodo, action.payload);
  yield put(AddSuccess(data));
}
function* addTodoEffect() {
  yield takeEvery(ActionTypes.Add, addTodo);
}

function* updateTodo(action: ReturnType<typeof Update>) {
  const { data } = yield call(RestService.updateTodo, action.payload);
  yield put(UpdateSuccess(action.payload));
}
function* updateTodoEffect() {
  yield takeEvery(ActionTypes.Update, updateTodo);
}

function* removeTodo(action: ReturnType<typeof Remove>) {
  const { data } = yield call(RestService.removeTodo, action.payload);
  yield put(RemoveSuccess(action.payload));
}
function* removeTodoEffect() {
  yield takeEvery(ActionTypes.Remove, removeTodo);
}

export function* todoEffects() {
  yield all([
    getTodosEffect(),
    addTodoEffect(),
    updateTodoEffect(),
    removeTodoEffect()
  ]);
}
