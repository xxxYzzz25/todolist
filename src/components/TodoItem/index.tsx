import React from 'react';
import styled from 'styled-components';
import { Tag, List, Popconfirm, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { TODO } from 'store/todo/types/todo.type';

interface TODOItemProps {
  className: any;
  todo: TODO;
  onTodoDelete: (todo: TODO) => void;
  onTodoToggle: (todo: TODO) => void;
}

const TodoItem: React.FC<TODOItemProps> = ({
  className,
  todo,
  onTodoDelete,
  onTodoToggle,
}) => {
  const render = (
    <List.Item
      actions={[
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoDelete(todo);
          }}
        >
          <DeleteOutlined style={{ color: '#f5222d', fontSize: '16px' }} />
        </Popconfirm>,
      ]}
      className="listItem"
      key={todo.id}
    >
      <div className="todoItem">
        <Checkbox
          onChange={() => onTodoToggle(todo)}
          checked={todo.completed}
        ></Checkbox>
        <Tag color={todo.completed ? '#376420' : '#f5222d'} className="todoTag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );

  return <div className={className}>{render}</div>;
};

const styledTodoItem = styled(TodoItem)`
  .listItem {
    display: flex;
    justify-content: space-between;

    .todoItem {
      display: flex;
      align-items: center;

      .todoTag {
        margin: 10px;
        white-space: normal !important;
        max-width: 115px;
        word-break: break-all;
      }
    }
  }
`;

export default styledTodoItem;
