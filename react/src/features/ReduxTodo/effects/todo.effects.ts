import { all, put, takeEvery } from 'redux-saga/effects';

import { RestService } from '../../../shared/RestService';
import {
    ActionTypes, Add, AddSuccess, LoadSuccess, Remove, RemoveSuccess, Update, UpdateSuccess
} from '../actions/todo.actions';

function* getTodos() {
  const todos = yield RestService.getTodos().then(({ data }) => data);
  yield put(LoadSuccess(todos));
}
function* getTodosEffects() {
  yield takeEvery(ActionTypes.Load, getTodos);
}

function* addTodo(action: ReturnType<typeof Add>) {
  const todo = yield RestService.addTodo(action.payload).then(({ data }) => data);
  yield put(AddSuccess(todo));
}
function* addTodoEffects() {
  yield takeEvery(ActionTypes.Add, addTodo);
}

function* updateTodo(action: ReturnType<typeof Update>) {
  const success = yield RestService.updateTodo(action.payload).then(({ data }) => data);
  yield put(UpdateSuccess(action.payload));
}
function* updateTodoEffects() {
  yield takeEvery(ActionTypes.Update, updateTodo);
}

function* removeTodo(action: ReturnType<typeof Remove>) {
  const success = yield RestService.removeTodo(action.payload).then(({ data }) => data);
  yield put(RemoveSuccess(action.payload));
}
function* removeTodoEffects() {
  yield takeEvery(ActionTypes.Remove, removeTodo);
}

export function* todoEffects() {
  yield all([
    getTodosEffects(),
    addTodoEffects(),
    updateTodoEffects(),
    removeTodoEffects()
  ]);
}
