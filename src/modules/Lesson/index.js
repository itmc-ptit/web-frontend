import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from '../Staff/Markdown/CodeBlock';
import 'prismjs/components/prism-clike';
import dedent from 'dedent';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './index.scss';

import { BackTop } from 'antd';

require('prismjs/components/prism-c');

export default () => {
  const state = {
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
    Follow [Github](//https://github.com/dqbaoptit) của mình nhé. 
    Mình làm việc chuyên Frontend  ReactJs, Backend thì  một chút Flask/Django. 
    
    ## Chèn ảnh 
    ![](https://media-exp1.licdn.com/dms/image/C5603AQHE2u1DhEmFYQ/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=yBBlKR9DMw5uLLKs78oeWL_IX9_Uww9JrFUUvv2acDA)
    `,
  };

  return (
    <>
      <div align="center">
        <div className="lesson-header">
          <h1>Introduce C++ Basic </h1>
          <div align="right">
            <p>Author : Grimmz</p>
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
    </>
  );
};
