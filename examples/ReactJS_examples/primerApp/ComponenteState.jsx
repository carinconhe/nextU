import React from 'react';

class ComponenteState extends React.Component{
  constructor(){
    super();
    this.state ={mensaje : 'Bienvenido a un componente con estado(State)'}
  }
  render(){
    return(
      <div>
        <h1>{this.state.mensaje}</h1>
        <div>
          <button onClick={this.changeState.bind(this)}>Cambiar estado</button>
        </div>
      </div>
    );
  }
  changeState(){
    this.setState({mensaje : 'Cambio de valor.'});
  }
}

export default ComponenteState;
