import React from 'react';
import './Border.scss';
export default ({ children }) => (
  <a class="btn">
    <span>
      <span>
        <span>{children}</span>
      </span>
    </span>
  </a>
);
