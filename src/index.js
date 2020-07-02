import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {loadLocalStorageData} from './localStorage';

import App from './App';
import store from './store';

global.loadData = loadLocalStorageData;

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

