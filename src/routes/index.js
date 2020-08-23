import React, { useState } from 'react';
import { RenderRoutes, isLoggedIn } from './helper';
import { Link, Redirect } from 'react-router-dom';

import Home from '../modules/Home';
import Staff from '../modules/Staff';
import Lesson from '../modules/Lesson';
import Programs from '../modules/Programs';
import Authen from '../modules/Authentication';
import Test from '../modules/Testing';
import Profile from '../modules/Profile';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import jwtDecode from 'jwt-decode';
import Preview from '../modules/Staff/Preview';

const { Header, Content, Footer, Sider } = Layout;

const ROOTLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const role = jwtDecode(localStorage.getItem('accessToken')).role;
  const Logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.reload(false);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
      >
        {/*  */}
        <Menu theme="dark" mode="inline">
          <Menu.Item
            key="1"
            icon={<HomeOutlined style={{ fontSize: 25 }} />}
            style={{ marginTop: 65 }}
          >
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item
            key="8"
            icon={<UserOutlined style={{ fontSize: 25 }} />}
            style={{ marginTop: 20 }}
          >
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      {/*  */}
      <Layout className="site-layout">
        {/*  */}
        <Header
          className="site-layout-background"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img src="https://itmc-ptithcm.github.io/img/logo.svg" alt="logo" />
          <Menu mode="horizontal" theme="dark">
            {role === 'staff' && (
              <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link to="/staff">STAFF</Link>
              </Menu.Item>
            )}
            {/* <Menu.Item key="app" icon={<AppstoreOutlined />}>
              Training
            </Menu.Item>
            <Menu.Item key="" icon={<AppstoreOutlined />}>
              Fight
            </Menu.Item> */}
            <Menu.Item key="" icon={<LogoutOutlined />} onClick={Logout}>
              Đăng xuất
            </Menu.Item>
          </Menu>
        </Header>
        {/*  */}
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 3, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: '#001529',
            color: '#fff',
            fontSize: 20,
          }}
        >
          Information Technology Multimedia Club
        </Footer>
      </Layout>
    </Layout>
  );
};
const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              <Home />
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },

  {
    path: '/staff',
    key: 'STAFF',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              {' '}
              <Staff />{' '}
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },

  {
    path: '/staff/preview-ex',
    key: 'STAFF_PREVIEW',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              {' '}
              <Preview />{' '}
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },

  {
    path: '/lesson',
    key: 'LESSON_ROOT',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              <h1>Hello ./</h1>
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },
  {
    path: '/:courseID/lesson/:id',
    key: 'LESSON_DETAIL',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              <Lesson />
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },

  {
    path: '/programs',
    key: 'PROGRAMS',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();

      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              {' '}
              <Programs />{' '}
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },
  {
    path: '/:courseID/lesson/:id/testing',
    key: 'TESTING',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              {' '}
              <Test />{' '}
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },
  {
    path: '/profile',
    key: 'PROFILE',
    exact: true,
    component: () => {
      const userLogged = isLoggedIn();
      return (
        <>
          {userLogged ? (
            <ROOTLayout>
              {' '}
              <Profile />{' '}
            </ROOTLayout>
          ) : (
            <Authen />
          )}
        </>
      );
    },
  },
];
export { RenderRoutes };
export default ROUTES;
