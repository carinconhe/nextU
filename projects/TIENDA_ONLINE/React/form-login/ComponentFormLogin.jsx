import React from 'react';
import './ComponentFormLogin.css';
import ComponentNavTop from '../nav-top/ComponentNavTop.jsx';

class ComponentFormLogin extends React.Component{
  constructor(){
    super();
    this.state={
      title :'Inicia Sesión',
      visibleDiv : false
    }
  }
  render(){
    return(
      <div>
      <div id="menu">
        <ComponentNavTop visibleDivProps={this.state.visibleDiv}/>
      </div>
        <div id="contenedorForm" className="col-sm-6  col-sm-offset-3">
          <h1 className="titleFormLogin">{this.state.title}</h1>
          <form>
            <div className="form-group">
              <label for="email_input">Correo electrónico</label>
              <input type="email" className="form-control" id="email_input" name="email_input" required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" />
            </div>
            <div className="form-group">
              <label for="password_input">Contraseña</label>
              <input type="password" className="form-control" id="password_input"  name="password_input" required />
            </div>
            <label className="error">Debes ingresar un email válido</label>
            <button type="submit" className="btn btn-success center-block" onClick={this.login.bind(this)}>Enviar</button>
          </form>
        </div>
      </div>
    );
  }
  login(){
    console.log('Click en el boton');
    this.setState({visibleDiv:true});
  }
}

export default ComponentFormLogin;
