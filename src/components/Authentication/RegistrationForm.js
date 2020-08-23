import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Signup } from './actions';
import { Loader } from '../index';

const RegistrationForm = ({ toggleTab }) => {
  const history = useHistory();

  const [err, setErr] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
    password1: '',
    firstName: '',
    lastName: '',
  });
  const handleChange = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };
  const onFinish = () => {
    setIsloading(true);

    Signup({
      email: state.email,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
    })
      .then(() => {
        setIsloading(false);
        window.location.reload(false);
      })
      .catch((err) => {
        setIsloading(false);
        setErr(err.response.data.error.descriptions[0]);
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h2 className="title-form">Sign up</h2>
      {err !== '' && <p style={{ color: 'red' }}>[{err}]</p>}
      <Form.Item
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}
          type="email"
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          name="password"
          required
          placeholder="Mật khẩu"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          name="password1"
          required
          placeholder="Nhập lại mật khẩu"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input
          type="text"
          name="firstName"
          required
          placeholder="First name"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input
          type="text"
          name="lastName"
          required
          placeholder="Last name"
          onChange={handleChange}
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
          disabled={isLoading && state.password === state.password1}
        >
          {!isLoading ? 'Sign up' : <Loader />}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
