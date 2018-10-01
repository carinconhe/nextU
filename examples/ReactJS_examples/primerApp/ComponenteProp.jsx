import React from 'react';

class ComponenteProp extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <h2>{this.props.mensajeProps}</h2>
        <h3>{this.props.mensaje3}</h3>
      </div>
    );
  }
}
ComponenteProp.defaultProps = {
  mensaje3 : 'Props por defecto'
}
export default ComponenteProp;
