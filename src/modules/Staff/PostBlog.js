import React from 'react';
import './index.scss';
import { Editor } from './Markdown';

export default ({ toggleUpload }) => {
  return (
    <>
      <div className="post-blog">
        <Editor />
      </div>
      <div className="upload-button" onClick={toggleUpload}>
        <strong style={{ fontSize: 20, fontWeight: 'bold' }}>Upload</strong>
      </div>
    </>
  );
};
