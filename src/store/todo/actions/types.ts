import { TODO_ACTION_TYPES } from 'store/todo/constants';
import { TODO } from 'store/todo/types/todo.type';

interface IAddTodoAction {
  type: typeof TODO_ACTION_TYPES.ADD_TODO_SUCCESS;
  payload: TODO;
}

interface IToggleTodoAction {
  type: typeof TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS;
  payload: TODO;
}

interface IRemoveTodoAction {
  type: typeof TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS;
  payload: TODO;
}

interface IChangeTodoAction {
  type: typeof TODO_ACTION_TYPES.CHANGE_TODO_SUCCESS;
  payload: string;
}

export type TodoActionTypes =
  | IAddTodoAction
  | IRemoveTodoAction
  | IToggleTodoAction
  | IChangeTodoAction;
