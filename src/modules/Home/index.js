import React from 'react';
import './index.scss';
import {
  Card,
  Statics,
  CourseCard,
  DetailCourse,
} from '../../components/index';

export default () => {
  return (
    <div className="home-container">
      <div className="home-container__info">
        <Card />
        <Statics />
      </div>
      <div className="home-container__course">
        <div
          style={{
            padding: '2em',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{ margin: '5em 3em' }}>
            <CourseCard />
          </div>
          <div>
            <DetailCourse />
          </div>
        </div>
      </div>
    </div>
  );
};
