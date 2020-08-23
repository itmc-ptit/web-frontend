import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Spin, Collapse } from 'antd';
import { Answer } from '../../components/index';
import './index.scss';
import { DetailLesson } from '../../modules/Lesson/actions';

const { Panel } = Collapse;

export default () => {
  const history = useHistory();
  const courseID = window.location.href.split('/')[3];
  const lessonID = window.location.href.split('/')[5];
  const [lesson, setLesson] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    DetailLesson(courseID, lessonID)
      .then((res) => {
        setLoading(false);
        setLesson(res.data);
      })
      .catch((err) => setLoading(false));
  }, []);
  const [exer, setExer] = useState([]);
  useEffect(() => {
    if (lesson.exercises) {
      const arr = lesson.exercises.map((item) => ({ ...item, clicked: false }));
      setExer(arr);
    }
  }, [lesson]);
  const [score, setScore] = useState(0);
  return (
    <div align="center">
      <div align="left">
        <h1>{lesson.name}</h1>
      </div>
      <div className="score">Score : {score}</div>
      <Spin spinning={loading}>
        <Collapse
          ghost={1}
          expandIcon={() => (
            <h3 style={{ color: '#fff', fontSize: 20 }}>
              > Click me to open question !
            </h3>
          )}
          destroyInactivePanel={true}
        >
          {exer.map((item, idx) => {
            return (
              <Panel
                className="testing-content"
                key={idx}
                disabled={item.clicked}
              >
                <div hidden={item.clicked}>
                  <div className="question" align="left">
                    <h3>{item.question}</h3>
                  </div>
                  <div className="choices">
                    <Row gutter={[8, 8]} align="center">
                      <Col>
                        <div
                          onClick={() => {
                            item.clicked = true;
                            exer[idx] = item;
                            setExer([...exer]);
                            if (item.answers[0].correct) setScore(score + 1);
                          }}
                        >
                          <Answer
                            type="A"
                            content={item.answers[0].content}
                            correct={item.answers[0].correct}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div
                          onClick={() => {
                            item.clicked = true;
                            exer[idx] = item;
                            setExer([...exer]);
                            if (item.answers[1].correct) setScore(score + 1);
                          }}
                        >
                          <Answer
                            type="B"
                            content={item.answers[1].content}
                            correct={item.answers[1].correct}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={[8, 8]} align="center">
                      <Col>
                        <div
                          onClick={() => {
                            item.clicked = true;
                            exer[idx] = item;
                            setExer([...exer]);
                            if (item.answers[2].correct) setScore(score + 1);
                          }}
                        >
                          <Answer
                            type="C"
                            content={item.answers[2].content}
                            correct={item.answers[2].correct}
                          />
                        </div>
                      </Col>
                      <Col>
                        <div
                          onClick={() => {
                            item.clicked = true;
                            exer[idx] = item;
                            setExer([...exer]);
                            if (item.answers[3].correct) setScore(score + 1);
                          }}
                        >
                          <Answer
                            type="D"
                            content={item.answers[3].content}
                            correct={item.answers[3].correct}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Panel>
            );
          })}
        </Collapse>
      </Spin>
    </div>
  );
};
