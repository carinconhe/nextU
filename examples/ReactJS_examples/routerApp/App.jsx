import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div>
        Hola React App<br/>
        <Link to="/home">Home</Link><br/>
        <Link to="/usuarios">Usuarios</Link><br/>
        <Link to="/lenguajes">Lenguajes</Link><br/>
      </div>
    );
  }
}
export default App;
