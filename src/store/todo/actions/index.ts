import { TODO } from '../types/todo.type';
import { TodoActionTypes } from './types';
import { TODO_ACTION_TYPES } from '../constants';

export function addTodo(todo: TODO): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function removeTodo(todo: TODO): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS,
    payload: todo,
  };
}

export function toggleTodoStatus(todo: TODO): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS,
    payload: todo,
  };
}

export function changeTodo(status:string): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.CHANGE_TODO_SUCCESS,
    payload: status,
  };
}
