import React, { useState, useEffect } from 'react';
import './index.scss';
import {
  Card,
  CourseCard,
  DetailCourse,
  Statics,
} from '../../components/index';

export default () => {
  const profile = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="home-container">
      <div className="home-container__info">
        {profile && (
          <Card
            name={`${profile.lastName} ${profile.firstName}`}
            ID={profile.studentID}
            school={profile.school}
          />
        )}
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
