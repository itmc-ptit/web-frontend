import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';

import { GetCourse, GetAllLessons, PostLesson, UpdateLesson } from './actions';
import PostBlog from './PostBlog';

export default () => {
  const history = useHistory();
  const content = useSelector((state) => state.Staff.content);
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
      .then((res) => history.push(`/lesson/${res.data._id}`))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    UpdateLesson(courses._id, state.name, {
      content: content,
    })
      .then((res) => history.push(`/lesson/${res.data._id}`))
      .catch((err) => console.log(err));
  };

  return (
    <>
      Staff page ./
      <hr />
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
  );
};
