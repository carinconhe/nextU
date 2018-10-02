import React from 'react';

class Error extends React.Component{
  constructor(){
    super();
    this.state ={mensaje : 'Error'}
  }

  render(){
    return(
      <p>{this.state.mensaje}</p>
    );
  }
}

export default Error
