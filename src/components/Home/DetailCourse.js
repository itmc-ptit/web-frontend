import React from 'react';
import { Row, Col,Tabs } from 'antd';
import {RightOutlined } from '@ant-design/icons';
import './index.scss'

const { TabPane } = Tabs;

const lesson = [
  {
    name:'Introduce C++ basic',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/001.png'
  },
  {
    name:'Giving Input to program',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/008.png'
  },
  {
    name:'Decisions making',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/004.png'
  },
  {
    name:'Array',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/017.png'
  },
  {
    name:'Function',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/007.png'
  },
  {
    name:'Strings',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/018.png'
  },
  {
    name:'Loop',
    icon:'https://storage.googleapis.com/programminghub/course_icons/andriod/002.png'
  }
]

const programs=[
  {
    name:'OOPS',
    image:'https://storage.googleapis.com/programminghub/program_icons/21P.png',
  },
  {
    name:'Miscelaneous',
    image:'https://storage.googleapis.com/programminghub/program_icons/2P.png',
  },
  {
    name:'Number',
    image:'https://storage.googleapis.com/programminghub/program_icons/3P.png',
  },
  {
    name:'String',
    image:'https://storage.googleapis.com/programminghub/program_icons/4P.png',
  },
  {
    name:'Formula',
    image:'https://storage.googleapis.com/programminghub/program_icons/10P.png',
  },
  {
    name:'Pattern',
    image:'https://storage.googleapis.com/programminghub/program_icons/15P.png',
  },
  {
    name:'Array',
    image:'https://storage.googleapis.com/programminghub/program_icons/5P.png',
  },
  {
    name:'Data Structures',
    image:'https://storage.googleapis.com/programminghub/program_icons/8P.png',
  },
  {
    name:'Sort',
    image:'https://storage.googleapis.com/programminghub/program_icons/18P.png',
  },
]

const TabIndex = ({icon, name}) => (
  <div className='tab-item' style={{cursor:'pointer'}}>
    <img src={icon} alt="icon"/>
    <h2 style={{ marginLeft: -10, fontWeight:200 }}>{name}</h2>
    <RightOutlined style={{fontSize:20, marginRight : 5}} />
  </div>
)

const TabProgram =({image, name})=>(
  <div className='program-item' align="center">
    <img src={image} alt="detail"/>
    <h3>
      {name}
    </h3>
  </div>
)


export default ()=>{
  return(
    <Tabs defaultActiveKey="1" >
      <TabPane 
        tab={
          <span style={{fontSize : 40, marginRight:50, color:'#fff'}}>
            Index
          </span>
        }
        key="1"
      >
        <div align="center">
          {lesson.map((item,index) => (
            <TabIndex icon={item.icon} name={item.name} key={index} />
          ))}
        </div>

      </TabPane>
      <TabPane
        tab={
          <span style={{fontSize : 40, marginRight:50, color:'#fff'}}>
            Programs
          </span>
        }
        key="2"
      >
        <Row gutter={[40, 40]} className="programs-container">
          {programs.map((item,index)=>(
            <Col span={8} >
              <TabProgram name={item.name} image={item.image} key={index} />    
            </Col>       
          ))}
        </Row>
      </TabPane>
      <TabPane
        tab={
          <span style={{fontSize : 40, marginRight:50, color:'#fff'}}>
            Test
          </span>
        }
        key="3"
      >
        <Row gutter={[40, 40]} className="programs-container">
          {programs.map((item,index)=>(
            <Col span={8} >
              <TabProgram name={item.name} image={item.image} key={index} />    
            </Col>       
          ))}
        </Row>s
      </TabPane>
    </Tabs>
  )
}