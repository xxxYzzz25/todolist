import React from 'react';
import styled from 'styled-components';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TODO } from 'store/todo/types/todo.type';

interface IAddTodoFormProps {
  className: any;
  onFormSubmit: (todo: TODO) => void;
}

const AddTodoForm: React.FC<IAddTodoFormProps> = ({
  onFormSubmit,
  className,
}) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    onFormSubmit({
      name: form.getFieldValue('name'),
    });

    form.resetFields();
  };

  return (
    <div className={className}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        className="todoNew"
      >
        <Row gutter={20}>
          <Col xs={24} sm={24} md={18} lg={20} xl={21}>
            <Form.Item
              name={'name'}
              rules={[{ required: true, message: 'Please enter a todo' }]}
            >
              <Input placeholder="Input Your Todo" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={6} lg={4} xl={3}>
            <Button type="primary" htmlType="submit" block>
              <PlusOutlined style={{ fontSize: '16px' }} />
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const styledAddTodoForm = styled(AddTodoForm)`
  .todoNew {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    .icon {
      color: 'rgba(0,0,0,.25)';
    }
  }
`;

export default styledAddTodoForm;
