import React from 'react';

class home extends React.Component{
  constructor(){
    super();
    this.state ={mensaje : 'Bienvenido a home'}
  }

  render(){
    return(
      <div>{this.state.mensaje}</div>
    );
  }
}

export default home
