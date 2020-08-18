import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login, UserFindMe } from './actions';
import { Loader } from '../index';
import './LoginForm.scss';

function LoginForm({ toggleTab }) {
  const history = useHistory();

  const [isLoading, setIsloading] = useState(false);
  const handleAfterLogin = (data) => {
    localStorage.setItem('accessToken', data.accessToken);

    UserFindMe()
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
  const onFinish = async (values) => {
    setIsloading(true);
    Login(values)
      .then((res) => {
        setIsloading(false);
        handleAfterLogin(res.data);
      })
      .catch((err) => {
        setIsloading(false);
        console.log(JSON.stringify(err));
        message.error({
          content: err.descriptions,
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h2>Login</h2>
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
        <a className="login-form-forgot" aria-disabled>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          disabled={isLoading}
        >
          {!isLoading ? 'Log in' : <Loader />}
        </Button>
        Or <a onClick={toggleTab}>register now!</a>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
