import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Componente1 from  './Componente1.jsx';
import ComponenteState from  './ComponenteState.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Componente1 />, document.getElementById('component1'));
ReactDOM.render(<ComponenteState />, document.getElementById('ComponenteState'));
