import React from 'react';
import './index.scss';
import { Editor } from './Markdown';

export default () => {
  return (
    <>
      <div className="post-blog">
        <Editor />
      </div>
      <div className="upload-button">
        <strong style={{ fontSize: 20, fontWeight: 'bold' }}>Upload</strong>
      </div>
    </>
  );
};
