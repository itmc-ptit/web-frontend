import React from 'react';
import { Row, Col } from 'antd';
import { Answer } from '../../components/index';
import './index.scss';
export default () => {
  return (
    <>
      <div>
        <h1>Title Testing</h1>
      </div>
      <div className="testing-content">
        <div className="question">
          <h1>Câu 1 :</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            recusandae dignissimos pariatur omnis vel, dolorum unde ex ratione
            repellendus quas deleniti beatae doloremque voluptates rem quae
            debitis illum amet sequi.
          </h3>
        </div>
        <div className="choices">
          <Row gutter={[8, 8]} align="center">
            <Col>
              <Answer />
            </Col>
            <Col>
              <Answer />
            </Col>
          </Row>
          <Row gutter={[8, 8]} align="center">
            <Col>
              <Answer />
            </Col>
            <Col>
              <Answer />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
