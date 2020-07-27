import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Signup } from './actions';

const RegistrationForm = ({ toggleTab }) => {
  const onFinish = (values) => {
    Signup(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h2>Sign up</h2>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" onClick={toggleTab}>
          Click here to Login
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
