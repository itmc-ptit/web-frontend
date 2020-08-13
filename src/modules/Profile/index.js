import React, { useState, useEffect } from 'react';

import './index.scss';
import { Form, Input, Button } from 'antd';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import { UserUpdateProfile } from './actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    school: '',
    studentID: '',
  });
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem('user')));
  }, []);
  const onFinish = () => {
    UserUpdateProfile(state)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <>
      <h1>Profile page /</h1>
      <div className="profile-container">
        <div className="profile-avatar-container">
          <ImgCrop rotate shape="rect">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length === 0 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </div>
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Form.Item label="Họ">
            <Input
              name="lastName"
              onChange={handleChange}
              value={state.lastName}
            />
          </Form.Item>
          <Form.Item label="Tên">
            <Input
              name="firstName"
              onChange={handleChange}
              value={state.firstName}
            />
          </Form.Item>
          <Form.Item label="Trường">
            <Input name="school" onChange={handleChange} value={state.school} />
          </Form.Item>
          <Form.Item label="Mã sinh viên">
            <Input
              name="studentID"
              onChange={handleChange}
              value={state.studentID}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
