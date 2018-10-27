import React from 'react';
import ComponentFormLogin from './form-login/ComponentFormLogin.jsx';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
        <div id="contentMain">
          <ComponentFormLogin />
        </div>
    );
  }

}
export default App;
