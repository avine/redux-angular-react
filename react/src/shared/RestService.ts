import axios, { AxiosPromise } from 'axios';

import { Todo } from '../domains';

const apiBaseUrl = 'http://127.0.0.1:3100/';

const getUrl = (url: string) => apiBaseUrl + url;

const getTodos = () => axios.get<Todo[]>(getUrl('todos'));

const getTodo = (todo: Todo) => axios.get<Todo>(getUrl(`todos/${todo.id}`));

const addTodo = (todo: Partial<Todo>) => axios.post<Todo>(getUrl('todos'), todo);

const updateTodo = (todo: Todo) => axios.put<boolean>(getUrl(`todos/${todo.id}`), todo);

const removeTodo = (todo: Todo): AxiosPromise<boolean> => axios.delete(getUrl(`todos/${todo.id}`));

export default {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  removeTodo
};
