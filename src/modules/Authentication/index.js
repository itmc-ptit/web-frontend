import React from 'react';
import LoginForm from '../../components/Authentication/LoginForm';
import Menu from './Menu';
import './index.scss';

export default () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Menu />
        <div style={{ margin: '10vh' }} className="form-container">
          <div style={{ padding: '100px 30px' }}>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
