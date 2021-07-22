import { TODO_ACTION_TYPES } from '../constants';
import { TODO } from '../types/todo.type';
import { TodoActionTypes } from '../actions/types';

interface TODOReducerInterface {
  todos: TODO[];
  todoStatusNow: string;
}

export const initialState: TODOReducerInterface = {
  todos: [],
  todoStatusNow: 'all',
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: state.todos.length,
          },
        }),
      });
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        todos: state.todos.map((todo: TODO) => {
          console.log(todo);
          return todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        }),
      });
    case TODO_ACTION_TYPES.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: TODO) => todo.id !== action.payload.id
        ),
      };
    case TODO_ACTION_TYPES.CHANGE_TODO_SUCCESS:
      return {
        ...state,
        todoStatusNow: action.payload,
      };
    default:
      return state;
  }
};
