import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  FetchTodos = "fetchTodos",
  DeleteTodo = "deleteTodo"
}

export type Action = FetchTodosAction | DeleteTodoAction