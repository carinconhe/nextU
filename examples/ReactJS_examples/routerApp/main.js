import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import App from './App.jsx';
import BaseLayout from './BaseLayout.jsx';

render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>,
  document.getElementById('app')
)
