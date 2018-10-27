import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import App from './App.jsx';
import ComponentFormLogin from './form-login/ComponentFormLogin.jsx';
import ComponentNavTop from './nav-top/ComponentNavTop.jsx';

//import BaseLayout from './BaseLayout.jsx';

render(<ComponentNavTop />,document.getElementById('menu'));
render(<ComponentFormLogin />,document.getElementById('app'));
