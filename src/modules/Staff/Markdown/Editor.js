import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Editor from 'react-simple-code-editor';
import dedent from 'dedent';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import Markdown from 'react-markdown';
import CodeBlock from './CodeBlock';

import { AddContent } from '../actions';
// import doesn't seem to work properly with parcel for jsx
require('prismjs/components/prism-c');

export default () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    code: dedent`
    # Hướng dẫn sử dụng Markdown
    # Thẻ H1
    ## Thẻ H2 
    ### Thẻ H3 
    #### Thẻ h4
    ## Danh sách : 
    * list Item 1
    * List item 2
    * List item 3
    ***
    Gạch ngang bằng 3 dấu * 
    
    \`\`  In đậm text \`\` 
    
    ### * Enter 2 phát để xuống hàng khi viết text thường.
    ## Chèn code
    \`\`\`c
      #include<iostream>
      int main(){
        std::cout<<"Hello anh em, I'm Bao";
        return 0;
      }
    \`\`\`
    ## Table
    | Feature   | Support |
    | --------- | ------- |
    | tables    | ✔ |
    | alignment | ✔ |
    | wewt      | ✔ |
    ## Link 
    Follow [Github](//github.com/dqbaoptit) của mình nhé. 
    Mình làm việc chuyên Frontend  ReactJs, Backend thì  một chút Flask/Django. 
    
    ## Chèn ảnh 
    ![](https://media-exp1.licdn.com/dms/image/C5603AQHE2u1DhEmFYQ/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=yBBlKR9DMw5uLLKs78oeWL_IX9_Uww9JrFUUvv2acDA)
    `,
  });
  return (
    <>
      <div className="post-blog">
        <div className="add-text-container">
          <Editor
            placeholder=""
            value={state.code}
            onValueChange={(code) => {
              setState({ code });
              dispatch(AddContent(code));
            }}
            highlight={(code) => highlight(code, languages.c)}
            padding={10}
            className="container__editor"
          />
        </div>
      </div>
      <div className="preview-container">
        <Markdown renderers={{ code: CodeBlock }} source={state.code} />
      </div>
    </>
  );
};
