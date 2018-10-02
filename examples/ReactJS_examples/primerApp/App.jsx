import React from 'react';
import ComponenteProp from './ComponenteProp.jsx';
import { Link } from 'react-router-dom';
class App extends React.Component{
    constructor(){
      super();
      this.state = {
        mensaje2 : 'Estoy aprendiendo sobre States & Props',
        bienvenido: 'Bienvenido al metodo constructor'
      }
      console.log('Fase 1 Contructor');
    }


    componentWillMount(){
      console.log('Bienvenido a componentWillMount');
    }

    render(){
      var valor1 = 500;
      var valor2 = 450;
      var producto = valor1*valor2;
      console.log('Fase 3 Contructor');
      return(
        <div>
          Hola React
          <ComponenteProp mensajeProps = {this.state.mensaje2}/>
          <div>{this.state.bienvenido}</div>
          <h3>{producto}</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/usuarios">Usuario</Link></li>
            <li><Link to="/lenguajes">Lenguajes</Link></li>
          </ul>
          <div>{this.props.children}</div>
        </div>
      );
    }

    componentDidMount(){
      console.log('Bienvenido a componentDidMount');
      this.setState({bienvenido : 'Ejecucion del metodo componentDidMount'});
    }

}

export default App;
