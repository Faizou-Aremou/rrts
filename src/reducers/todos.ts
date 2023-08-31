
import {Action, FetchTodosAction, Todo } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return (action as FetchTodosAction).payload;
    default:
      return state;
  }
};
