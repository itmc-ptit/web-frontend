import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Signup, handleAfterLogin } from './actions';
import { Loader } from '../index';

const RegistrationForm = ({ toggleTab }) => {
  const [isLoading, setIsloading] = useState(false);

  const onFinish = (values) => {
    setIsloading(true);

    Signup(values)
      .then((res) => {
        setIsloading(false);
        handleAfterLogin(res.data);
      })
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });
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
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          disabled={isLoading}
        >
          {!isLoading ? 'Sign up' : <Loader />}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
