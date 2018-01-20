import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route } from 'react-router-dom';
import ScrollTop from './ScrollTop';

import './reset.css';
import './base.css';

ReactDOM.render(
  <BrowserRouter>
    <ScrollTop>
      <Route component={App} />
    </ScrollTop>
  </BrowserRouter>,
  document.getElementById('root')
);
