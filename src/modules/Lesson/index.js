import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import CodeBlock from '../Staff/Markdown/CodeBlock';
import 'prismjs/components/prism-clike';
import dedent from 'dedent';

import { DetailLesson } from './actions';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './index.scss';

import { BackTop, Spin } from 'antd';

require('prismjs/components/prism-c');

export default () => {
  const [isLoading, setIsloading] = useState(false);
  const [lesson, setLesson] = useState({});
  const courseID = window.location.href.split('/')[3];
  const lessonID = window.location.href.split('/')[5];

  useEffect(() => {
    setIsloading(true);
    DetailLesson(courseID, lessonID)
      .then((res) => {
        setLesson(res.data);
        setIsloading(false);
      })
      .catch((err) => setIsloading(false));
  }, []);

  const [state, setState] = useState({});
  useEffect(() => {
    setState({ ...state, code: dedent`${lesson.content}` });
  }, [lesson]);
  return (
    <>
      <Spin tip="fetching data..." spinning={isLoading}>
        <div align="center">
          <div className="lesson-header">
            <h1>{lesson.name} </h1>
            <div align="right">
              <p>Author : ITMC team</p>
            </div>
          </div>
          <div className="lesson-body" align="left">
            <Markdown
              renderers={{ code: CodeBlock }}
              plugins={[require('remark-shortcodes')]}
              source={state.code}
            />
          </div>
        </div>
        <BackTop />
      </Spin>
    </>
  );
};
