import React from 'react';

import { List } from 'antd';

import { TODO } from 'store/todo/types/todo.type';
import TodoItem from 'components/TodoItem';

interface TodoListProps {
  className: any;
  todos: TODO[];
  todoStatusNow: string;
  onTodoDelete: (todo: TODO) => void;
  onTodoToggle: (todo: TODO) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  className,
  todos,
  todoStatusNow,
  onTodoDelete,
  onTodoToggle,
}) => {
  let finalTodo;
  if (todoStatusNow === 'all') {
    finalTodo = todos;
  } else if (todoStatusNow === 'completed') {
    finalTodo = todos.filter((todo: TODO) => todo.completed === true);
  } else {
    finalTodo = todos.filter((todo: TODO) => todo.completed !== true);
  }

  return (
    <div className={className}>
      <List
        locale={{
          emptyText: "There's nothing to do",
        }}
        dataSource={finalTodo}
        renderItem={(todo) => (
          <TodoItem
            todo={todo}
            onTodoToggle={onTodoToggle}
            onTodoDelete={onTodoDelete}
            className="true"
          />
        )}
        pagination={{
          position: 'bottom',
          pageSize: 10,
        }}
      />
    </div>
  );
};
