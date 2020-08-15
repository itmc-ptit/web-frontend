import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col, Tabs } from 'antd';
import { ArrowAnimation } from '../../components/index';
import './index.scss';

const { TabPane } = Tabs;

const programs = [
  {
    name: 'OOPS',
    image:
      'https://storage.googleapis.com/programminghub/program_icons/21P.png',
  },
  {
    name: 'Miscelaneous',
    image: 'https://storage.googleapis.com/programminghub/program_icons/2P.png',
  },
  {
    name: 'Number',
    image: 'https://storage.googleapis.com/programminghub/program_icons/3P.png',
  },
  {
    name: 'String',
    image: 'https://storage.googleapis.com/programminghub/program_icons/4P.png',
  },
  {
    name: 'Formula',
    image:
      'https://storage.googleapis.com/programminghub/program_icons/10P.png',
  },
  {
    name: 'Pattern',
    image:
      'https://storage.googleapis.com/programminghub/program_icons/15P.png',
  },
  {
    name: 'Array',
    image: 'https://storage.googleapis.com/programminghub/program_icons/5P.png',
  },
  {
    name: 'Data Structures',
    image: 'https://storage.googleapis.com/programminghub/program_icons/8P.png',
  },
  {
    name: 'Sort',
    image:
      'https://storage.googleapis.com/programminghub/program_icons/18P.png',
  },
];

const TabIndex = ({ name, goToDetail }) => (
  <div className="tab-item" style={{ cursor: 'pointer' }}>
    <div style={{}}></div>
    <h2 style={{ marginLeft: -10, fontWeight: 600 }}>{name}</h2>
    <a onClick={goToDetail}>
      <ArrowAnimation />
    </a>
  </div>
);

const TabProgram = ({ image, name }) => (
  <div className="program-item" align="center">
    <img src={image} alt="detail" />
    <div
      style={{
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: '10px',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <h3>{name}</h3>
      <Link to="/programs">
        <ArrowAnimation />
      </Link>
    </div>
  </div>
);

export default ({ courseId, lessons }) => {
  const history = useHistory();
  return (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={
          <span style={{ fontSize: 40, marginRight: 50, color: '#fff' }}>
            Index
          </span>
        }
        key="1"
      >
        <div align="center">
          {lessons &&
            lessons.map((item, index) => (
              <TabIndex
                name={item.name}
                key={index}
                goToDetail={() =>
                  history.push(`${courseId}/lesson/${item._id}`)
                }
              />
            ))}
        </div>
      </TabPane>
      <TabPane
        tab={
          <span style={{ fontSize: 40, marginRight: 50, color: '#fff' }}>
            Programs
          </span>
        }
        key="3"
      >
        <Row gutter={[40, 40]} className="programs-container">
          {programs.map((item, index) => (
            <Col span={8}>
              <TabProgram name={item.name} image={item.image} key={index} />
            </Col>
          ))}
        </Row>
        s
      </TabPane>
    </Tabs>
  );
};
