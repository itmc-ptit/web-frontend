import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { GetLesson, UpdateLesson } from './actions';

export default () => {
  const history = useHistory();
  const exercises = useSelector((state) => state.Staff.exercises);
  const courseID = useSelector((state) => state.Staff.courseID);
  useEffect(() => {
    if (exercises.questions.length === 0) history.push('/staff');
  }, []);
  const [state, setState] = useState({});

  useEffect(() => {
    GetLesson(courseID, exercises.lesson)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [data, setData] = useState({});
  console.log(data);
  const Question = ({ index, question, answers }) => {
    return (
      <div className="form__question" align="center">
        <hr />
        <h3>Câu {index}</h3>
        <textarea
          cols="40"
          rows="2"
          style={{ margin: 40, resize: 'none' }}
          name="question"
          value={question}
        ></textarea>
        <Row gutter={[8, 8]} align="center" style={{ maxWidth: 800 }}>
          <Col>
            <div>
              <textarea
                style={{ margin: 20, resize: 'none' }}
                name="ansA"
                id=""
                cols="30"
                rows="2"
                value={answers[0].ansA}
              />
              <div>
                <Button
                  style={
                    answers[0].correct
                      ? {
                          color: 'white',
                          background: 'green',
                        }
                      : {}
                  }
                >
                  Correct {answers[0].correct ? '!' : '?'}
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <textarea
                style={{ margin: 20, resize: 'none' }}
                name="ansB"
                id=""
                cols="30"
                rows="2"
                value={answers[1].ansB}
              />
              <div>
                <Button
                  style={
                    answers[1].correct
                      ? {
                          color: 'white',
                          background: 'green',
                        }
                      : {}
                  }
                >
                  Correct {answers[1].correct ? '!' : '?'}
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <textarea
                style={{ margin: 20, resize: 'none' }}
                name="ansC"
                id=""
                cols="30"
                rows="2"
                value={answers[2].ansC}
              />
              <div>
                <Button
                  style={
                    answers[2].correct
                      ? {
                          color: 'white',
                          background: 'green',
                        }
                      : {}
                  }
                >
                  Correct {answers[2].correct ? '!' : '?'}
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <textarea
                style={{ margin: 20, resize: 'none' }}
                name="ansD"
                id=""
                cols="30"
                rows="2"
                value={answers[3].ansD}
              />
              <div>
                <Button
                  style={
                    answers[3].correct
                      ? {
                          color: 'white',
                          background: 'green',
                        }
                      : {}
                  }
                >
                  Correct {answers[3].correct ? '!' : '?'}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  return (
    <>
      <h1>Preview page ./</h1>
      Lesson : {state.name}
      {exercises.questions.map((item, index) => (
        <Question
          index={index + 1}
          question={item.question}
          answers={item.answers}
        />
      ))}
      <div
        className="upload-button"
        onClick={() => {
          const questions = exercises.questions.map((item) => {
            const tmp = [...item.answers];
            const arr = [
              { content: tmp[0].ansA, correct: tmp[0].correct },
              { content: tmp[1].ansB, correct: tmp[1].correct },
              { content: tmp[2].ansC, correct: tmp[2].correct },
              { content: tmp[3].ansD, correct: tmp[3].correct },
            ];
            return { question: item.question, answers: [...arr] };
          });
          setData(questions);
          UpdateLesson(courseID, exercises.lesson, {
            name: state.name,
            content: state.content,
            exercises: data,
          });
        }}
      >
        <strong style={{ fontSize: 20, fontWeight: 'bold' }}>Upload</strong>
      </div>
    </>
  );
};
