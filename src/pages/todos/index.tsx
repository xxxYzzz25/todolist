import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { TODO } from 'store/todo/types/todo.type';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodoStatus,
  changeTodo,
} from 'store/todo/actions';
import { RootState } from 'store/todo/reducers';
import AddTodoForm from 'components/AddTodoForm';
import { TodoList } from 'components/TodoList';
import { message } from 'antd';

interface TODOsContainerProps {
  className: any;
}

const TodosContainer: React.FunctionComponent<TODOsContainerProps> = ({
  className,
}) => {
  const todos: TODO[] = useSelector((state: RootState) => state.todo.todos);
  const todoStatusNow: string = useSelector(
    (state: RootState) => state.todo.todoStatusNow
  );

  const dispatch = useDispatch();

  const handleFormSubmit = (todo: TODO): void => {
    dispatch(addTodo(todo));
    message.success('Todo added!');
  };

  const handleRemoveTodo = (todo: TODO): void => {
    dispatch(removeTodo(todo));
    message.warn('Todo removed!');
  };

  const handleToggleTodoStatus = (todo: TODO): void => {
    dispatch(toggleTodoStatus(todo));
    message.info('Todo state updated!');
  };

  const handleChangeTodo = (status: string): void => {
    dispatch(changeTodo(status));
  };

  return (
    <div className={className}>
      <h3>My Todo</h3>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="todoContainer"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 22 }}
          md={{ span: 20 }}
          lg={{ span: 19 }}
          xl={{ span: 18 }}
        >
          <AddTodoForm onFormSubmit={handleFormSubmit} className />
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 22 }}
          md={{ span: 20 }}
          lg={{ span: 19 }}
          xl={{ span: 18 }}
        >
          <h4>Todo List</h4>
          <Row className="filter" justify="space-around">
            <Col
              span={6}
              className={
                todoStatusNow === 'all' ? 'active filterItem' : 'filterItem'
              }
              onClick={() => handleChangeTodo('all')}
            >
              All
            </Col>
            <Col
              span={6}
              className={
                todoStatusNow === 'completed'
                  ? 'active filterItem'
                  : 'filterItem'
              }
              onClick={() => handleChangeTodo('completed')}
            >
              Completed
            </Col>
            <Col
              span={6}
              className={
                todoStatusNow === 'notCompleted'
                  ? 'active filterItem'
                  : 'filterItem'
              }
              onClick={() => handleChangeTodo('notCompleted')}
            >
              Not Completed
            </Col>
          </Row>
          <TodoList
            className="true"
            todos={todos}
            todoStatusNow={todoStatusNow}
            onTodoDelete={handleRemoveTodo}
            onTodoToggle={handleToggleTodoStatus}
          />
        </Col>
      </Row>
    </div>
  );
};

const styledTodosContainer = styled(TodosContainer)`
  h3 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: 5%;
    color: #006699;
  }
  .todoContainer {
    h4 {
      font-size: 30px;
      font-weight: bold;
      color: #006699;
    }
    .filter {
      margin-bottom: 3%;
      .filterItem {
        text-align: center;
        border-bottom: 3px solid #999;
        color: #999;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      .active {
        color: #006699;
        border-color: #006699;
      }
    }
  }
`;

export default styledTodosContainer;
