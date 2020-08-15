import React, { useState, useEffect } from 'react';
import { Card, CourseCard, DetailCourse } from '../../components/index';
import { Spin } from 'antd';
import { GetAllCourses } from './action';
import './index.scss';

export default () => {
  const profile = JSON.parse(localStorage.getItem('user'));
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourses] = useState({});
  useEffect(() => {
    setIsLoading(true);
    GetAllCourses()
      .then((res) => {
        setCourses(res.data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
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
      <Spin tip="fetching data..." spinning={isLoading} size={40}>
        <div className="home-container__course">
          <div
            style={{
              padding: '2em',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ margin: '5em 3em' }}>
              <CourseCard courseName={course.name} />
            </div>
            <div>
              <DetailCourse lessons={course.lessons} courseId={course._id} />
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
};
