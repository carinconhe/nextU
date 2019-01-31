import React from 'react';

class Componente1 extends React.Component{
  constructor(){
    super();
    console.log('Constructor','Begin');
  }
  render(){
    return(
      <div>
        <p>Aquí va la información</p>
      </div>
    );
  }
}
export default Componente1;
