import React from 'react';
import ComponenteProp from './ComponenteProp.jsx';

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        mensaje2 : 'Estoy aprendiendo sobre States & Props'
      }
    }
    render(){
        return(
            <div>
              Hola React
              <ComponenteProp mensajeProps = {this.state.mensaje2}/>
            </div>
            );
        }
}

export default App;
