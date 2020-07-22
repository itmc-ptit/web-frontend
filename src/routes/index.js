import React, { useState } from 'react';
import { RenderRoutes } from './helper';

import Home from '../modules/Home';
import { PostBlog } from '../modules/Staff';
import { Layout, Menu } from 'antd';
import {
  SettingOutlined,
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const ROOTLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

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
            Profile{' '}
          </Menu.Item>
          <Menu.Item
            key="9"
            icon={<SettingOutlined style={{ fontSize: 25 }} />}
            style={{ marginTop: 20 }}
          >
            Settings{' '}
          </Menu.Item>
        </Menu>
      </Sider>
      {/*  */}
      <Layout className="site-layout">
        {/*  */}
        <Header
          className="site-layout-background"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <img src="https://itmc-ptithcm.github.io/img/logo.svg" alt="logo" />
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="mail" icon={<MailOutlined />}>
              <Link to="/staff">STAFF</Link>
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
              Training
            </Menu.Item>
            <Menu.Item key="" icon={<AppstoreOutlined />}>
              Fight
            </Menu.Item>
            <Menu.Item key="" icon={<AppstoreOutlined />}>
              Liên Hệ
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
      return (
        <ROOTLayout>
          {' '}
          <Home />{' '}
        </ROOTLayout>
      );
    },
  },
  {
    path: '/staff',
    key: 'STAFF',
    exact: true,
    component: () => {
      return (
        <ROOTLayout>
          {' '}
          <PostBlog />{' '}
        </ROOTLayout>
      );
    },
  },
];
export { RenderRoutes };
export default ROUTES;
