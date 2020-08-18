import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Row, Col } from 'antd';

import {
  GetCourse,
  GetAllLessons,
  PostLesson,
  UpdateLesson,
  ChoiceLesson,
  AddQuestion,
} from './actions';
import PostBlog from './PostBlog';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const content = useSelector((state) => state.Staff.content);
  const exercises = useSelector((state) => state.Staff.exercises);
  const [isClicked, setIsClicked] = useState(false);
  const toggleUpload = () => {
    setIsClicked(true);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState({});
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    GetCourse()
      .then((res) => {
        setCourses(res.data[0]);
        dispatch({ type: 'SAVE_COURSE_ID', payload: res.data[0]._id });
        GetAllLessons(res.data[0]._id)
          .then((response) => setLessons(response.data))
          .catch((error) => console.log(error));
      })
      .catch((err) => console.log(err));
  }, []);

  const [state, setState] = useState({
    name: '',
    content: '',
    new_name: '',
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const handleUpload = () => {
    PostLesson(courses._id, { name: state.new_name, content: content })
      .then((res) => history.push(`${courses._id}/lesson/${res.data._id}`))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    UpdateLesson(courses._id, state.name, {
      content: content,
    })
      .then((res) => history.push(`${courses._id}/lesson/${res.data._id}`))
      .catch((err) => console.log(err));
  };
  const [addLesson, setAddLesson] = useState(false);
  const toggleChooseMode = () => setAddLesson(!addLesson);
  const initialQues = {
    question: '',
    answers: [
      {
        ansA: '',
        correct: true,
      },
      {
        ansB: '',
        correct: false,
      },
      {
        ansC: '',
        correct: false,
      },
      {
        ansD: '',
        correct: false,
      },
    ],
  };
  const [ques, setQues] = useState(initialQues);
  return (
    <>
      Staff page ./{' '}
      <Button onClick={toggleChooseMode}>
        {addLesson ? 'Add exercises' : 'Add lessons'}
      </Button>
      <hr />
      {addLesson ? (
        <>
          <PostBlog toggleUpload={toggleUpload} />
          <Modal
            title="Uploading"
            visible={isClicked}
            onOk={state.name == -1 ? handleUpload : handleUpdate}
            okText={state.name == -1 ? 'Upload new' : 'Update post'}
            confirmLoading={isLoading}
            onCancel={() => setIsClicked(false)}
            style={{ minWidth: '60vw' }}
          >
            <hr />
            <div style={{ margin: 30 }}>
              <span style={{ margin: 30 }}>Chọn khoá học :</span>
              <input
                disabled
                style={{ minWidth: 200 }}
                placeholder={courses.name}
              />
            </div>
            <div style={{ margin: 30 }}>
              <span style={{ margin: 30 }}>Chọn bài học :</span>
              <select
                placeholder="Select an option"
                name="name"
                onChange={handleChange}
                style={{ minWidth: 200 }}
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                {lessons.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
                <option value={-1}>Thêm mới</option>
              </select>
            </div>
            <div hidden={!(state.name == -1)}>
              <hr />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <span style={{ margin: '0px 30px' }}>Tên bài học : </span>
                <input
                  style={{ maxWidth: 200 }}
                  onChange={handleChange}
                  name="new_name"
                />
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <div>
          <label> Chọn bài học :</label>
          <select
            onChange={(e) => dispatch(ChoiceLesson(e.target.value))}
            style={{ minWidth: 200 }}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            {lessons.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <div hidden={exercises.lesson === ''}>
            <h3>Số câu đã thêm : {exercises.questions.length} / 10 </h3>
          </div>
          <div
            className="form__question"
            align="center"
            hidden={exercises.lesson === ''}
          >
            <h3>Câu thứ {exercises.questions.length + 1}</h3>
            <textarea
              cols="40"
              rows="5"
              style={{ margin: 40, resize: 'none' }}
              placeholder="Nhập câu hỏi..."
              name="question"
              value={ques.question}
              onChange={(e) => setQues({ ...ques, question: e.target.value })}
            ></textarea>
            <Row gutter={[8, 8]} align="center" style={{ maxWidth: 800 }}>
              <Col>
                <div>
                  <textarea
                    style={{ margin: 20, resize: 'none' }}
                    name="ansA"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Câu A : ..."
                    value={ques.answers[0].ansA}
                    onChange={(e) => {
                      const answers = [...ques.answers];
                      answers[0].ansA = e.target.value;
                      setQues({
                        ...ques,
                        answers: [...answers],
                      });
                    }}
                  />
                  <div>
                    <Button
                      onClick={() => {
                        const arr = ques.answers;
                        arr.map((item) => {
                          item.correct = false;
                        });
                        arr[0].correct = true;
                        setQues({ ...ques, answers: arr });
                      }}
                      style={
                        ques.answers[0].correct
                          ? {
                              color: 'white',
                              background: 'green',
                            }
                          : {}
                      }
                    >
                      Correct {ques.answers[0].correct ? '!' : '?'}
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
                    rows="5"
                    placeholder="Câu B : ..."
                    value={ques.answers[1].ansB}
                    onChange={(e) => {
                      const answers = [...ques.answers];
                      answers[1].ansB = e.target.value;
                      setQues({
                        ...ques,
                        answers: [...answers],
                      });
                    }}
                  />
                  <div>
                    <Button
                      onClick={() => {
                        const arr = ques.answers;
                        arr.map((item) => {
                          item.correct = false;
                        });
                        arr[1].correct = true;
                        setQues({ ...ques, answers: arr });
                      }}
                      style={
                        ques.answers[1].correct
                          ? {
                              color: 'white',
                              background: 'green',
                            }
                          : {}
                      }
                    >
                      Correct {ques.answers[1].correct ? '!' : '?'}
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
                    rows="5"
                    placeholder="Câu C : ..."
                    value={ques.answers[2].ansC}
                    onChange={(e) => {
                      const answers = [...ques.answers];
                      answers[2].ansC = e.target.value;
                      setQues({
                        ...ques,
                        answers: [...answers],
                      });
                    }}
                  />
                  <div>
                    <Button
                      onClick={() => {
                        const arr = ques.answers;
                        arr.map((item) => {
                          item.correct = false;
                        });
                        arr[2].correct = true;
                        setQues({ ...ques, answers: arr });
                      }}
                      style={
                        ques.answers[2].correct
                          ? {
                              color: 'white',
                              background: 'green',
                            }
                          : {}
                      }
                    >
                      Correct {ques.answers[2].correct ? '!' : '?'}
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
                    rows="5"
                    placeholder="Câu D : ..."
                    value={ques.answers[3].ansD}
                    onChange={(e) => {
                      const answers = [...ques.answers];
                      answers[3].ansD = e.target.value;
                      setQues({
                        ...ques,
                        answers: [...answers],
                      });
                    }}
                  />
                  <div>
                    <Button
                      onClick={() => {
                        const arr = ques.answers;
                        arr.map((item) => {
                          item.correct = false;
                        });
                        arr[3].correct = true;
                        setQues({ ...ques, answers: arr });
                      }}
                      style={
                        ques.answers[3].correct
                          ? {
                              color: 'white',
                              background: 'green',
                            }
                          : {}
                      }
                    >
                      Correct {ques.answers[3].correct ? '!' : '?'}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div align="right" hidden={exercises.lesson === ''}>
            {exercises.questions.length !== 10 ? (
              <div
                className="upload-button"
                onClick={() => {
                  dispatch(AddQuestion(ques));
                  setQues(initialQues);
                }}
              >
                <strong style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Next
                </strong>
              </div>
            ) : (
              <div
                className="upload-button"
                onClick={() => history.push('/staff/preview-ex')}
              >
                <strong style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Preview
                </strong>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
