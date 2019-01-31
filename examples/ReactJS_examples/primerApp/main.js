import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import App from './App.jsx';
import Componente1 from  './Componente1.jsx';
import ComponenteState from  './ComponenteState.jsx';
import Home from './home.jsx';
import Usuarios from './usuarios.jsx';
import Lenguajes from './lenguajes.jsx';
import Error from './Error.jsx';

render(
  <BrowserRouter >
    <Switch>
      <Route  path="/" component={App} />
      <Route  path="/home" component={Home} />
      <Route  path="/usuarios" component={Usuarios} />
      <Route  path="/lenguajes" component={Lenguajes} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
)

/*
render(<Componente1 />, document.getElementById('component1'));
ReactDOM.render(<Componente1 />, document.getElementById('component1'));
ReactDOM.render(<ComponenteState />, document.getElementById('ComponenteState'));
*/
