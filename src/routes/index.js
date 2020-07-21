import React, {useState} from 'react'
import {RenderRoutes} from './helper';

import Home from '../modules/Home';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined, AppstoreOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const ROOTLayout = ({children}) =>{
  const [collapsed,setCollapsed] = useState(true)
  return(
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(collapsed)=>setCollapsed(collapsed)}>
        {/*  */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
          <Menu.Item key="1" icon={<PieChartOutlined />} style={{marginTop:65}}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      {/*  */}
      <Layout className="site-layout">
        {/*  */}
        <Header className="site-layout-background"  style={{display:'flex', justifyContent:'space-between'}}>
          <img src="https://itmc-ptithcm.github.io/img/logo.svg" alt="logo"/>
          <Menu mode="horizontal" theme="dark" >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Learning
            </Menu.Item>
            <Menu.Item key="app"  icon={<AppstoreOutlined />}>
              Training 
            </Menu.Item>
            <Menu.Item key=""  icon={<AppstoreOutlined />}>
              Fight 
            </Menu.Item>
            <Menu.Item key=""  icon={<AppstoreOutlined />}>
              Liên Hệ 
            </Menu.Item>
          </Menu>
        </Header>
        {/*  */}
        <Content>
          <div className="site-layout-background" style={{ padding: 3, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>ITMC PAGE</Footer>
      </Layout>
    </Layout>
  )
} 
const ROUTES = [
  {
    path:'/',
    key:'ROOT',
    exact : true,
    component: ()=>{
      return <ROOTLayout> <Home /> </ROOTLayout>
    }
  }
]
export { RenderRoutes }
export default ROUTES