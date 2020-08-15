import React from 'react';

export default ({ courseName }) => {
  return (
    <div className="home-container__course--item">
      <img
        src="https://codelearnstorage.s3.amazonaws.com/CodeCamp/CodeCamp/Upload/Course/4f2f344ebbdf41129541e4745ba63985.jpg"
        alt="course"
      />
      <p style={{ fontSize: 20 }}>
        <strong>{courseName}</strong>
      </p>
    </div>
  );
};
