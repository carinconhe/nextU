import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Usuarios from './Usuarios.jsx';
import Lenguajes from './Lenguajes.jsx';
render(
  <BrowserRouter >
    <Switch>
      <Route  path="/" component={App} />
      <Route  path="/home" component={Home} />
      <Route  path="/usuarios" component={Usuarios} />
      <Route  path="/lenguajes" component={Lenguajes} />
    </Switch>
  </BrowserRouter>
)
