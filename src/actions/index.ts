import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  cmpleted: boolean;
}

export interface FetchTodosAction extends Action {
  type: ActionTypes.FetchTodos;
  payload: Todo[];
}

export interface Action {
  type: ActionTypes;
  payload: any;
}
const url = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FetchTodos,
      payload: response.data,
    });
  };
};
