import React from 'react';
import LoginForm from '../../components/Authentication/LoginForm';
import { RegistrationForm, SocialLogin } from '../../components/index';
import thumbnail from '../../statics/itmc.jpg';
import { Layout } from 'antd';
import './index.scss';

export default () => {
  const [onLogin, setOnLogin] = React.useState(true);
  const changeTab = () => setOnLogin(!onLogin);
  return (
    <>
      <div className="header-container" align="center">
        <div className="form-container">
          <div style={{ padding: '50px 30px' }}>
            {onLogin ? (
              <LoginForm toggleTab={changeTab} />
            ) : (
              <RegistrationForm toggleTab={changeTab} />
            )}
            <SocialLogin />
          </div>
        </div>
      </div>
      {/*  */}
      <div align="center">
        <div align="center" className="about-container">
          {' '}
          <div className="about-us">
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
            <img
              src="https://itmc-ptithcm.github.io/img/itmc.png"
              alt="logo"
              className="thumbnail-logo"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <Layout.Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#001529',
          color: '#fff',
          fontSize: 20,
        }}
      >
        Information Technology Multimedia Club
      </Layout.Footer>
    </>
  );
};
