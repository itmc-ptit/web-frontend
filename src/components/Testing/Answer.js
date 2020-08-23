import React from 'react';
import { notification } from 'antd';
import './Answer.scss';

const Correct = () => {
  notification['success']({
    message: 'Kết quả',
    description: 'Qua được 1 câu nhé :) ',
  });
};

const Wrong = () => {
  notification['error']({
    message: 'Kết quả',
    description: 'Trật lất :)) ',
  });
};
export default ({ type, content, correct }) => (
  <div className="card" onClick={correct ? Correct : Wrong}>
    <div className="card-front">
      <div style={{ padding: '10px ' }}>
        <h4 style={{ color: '#fff' }}> Câu {type} : </h4>
        <h5 style={{ color: '#fff' }}>{content}</h5>
      </div>
    </div>
  </div>
);
