import React from 'react';
import './ComponentFormLogin.css';
import * as request from 'superagent';
import { Redirect } from 'react-router';

class ComponentFormLogin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title :'Inicia Sesión',
      fields : {},
      errors : {},
      redirect: false
    }
    document.body.style.backgroundImage= "url('assets/images/login-fondo.jpg')";
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if(!fields["email_input"]){
      formIsValid = false;
      errors["email_input"] = "El campo es requerido";
    }

    if(!fields["password_input"]){
      formIsValid = false;
      errors["password_input"] = "El campo es requerido";
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  loginSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      this.loginData();
    }else{
       alert("Form has errors.")
       console.log(this.state.errors);
    }
  }

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({fields});
  }

  loginData(){
    const data = {'email':this.state.fields.email_input,'password':this.state.fields.password_input} ;
    console.log(data);
    request
    .post('http://giros.pruebasbarbaras.co/api/login')
    .send(data)
    .set('Content-Type','application/json')
    .end((err,res)=>{
      var data = res.body;
      if(err || !res.ok){
        if(data.error==true){
          console.log('Error '+err);
          console.log(data.message.error[0]);
          this.setState({errors:{errorDataPost:data.message.error[0]}});
        }
      }else{
        if(data.error==false){
          console.log(data);
          this.setState({ redirect: true });
          document.body.style.backgroundImage= "url('assets/images/main-fondo.jpg')";
        }else{
          alert(data.message);
        }
      }
    });
  }

  render(){
    const { redirect } = this.state;
     if (redirect) {
       return <Redirect to='/tienda'/>;
     }

    return(
      <div id="contenedorForm" className="col-sm-6  col-sm-offset-3">
          <h1 className="titleFormLogin">{this.state.title}</h1>
          <form name="loginForm" onSubmit= {this.loginSubmit.bind(this)}>
            <div className="form-group">
              <label for="email_input">Correo electrónico</label>
              <input type="email" className="form-control" id="email_input" name="email_input" value={this.state.fields["email_input"]} onChange={this.handleChange.bind(this, "email_input")} required pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" />
            </div>
            <div className="form-group">
              <label for="password_input">Contraseña</label>
              <input type="password" className="form-control" id="password_input"  name="password_input" value={this.state.fields["password_input"]}  onChange={this.handleChange.bind(this, "password_input")} required />
            </div>
            {this.state.errors.errorDataPost ? <span className="error">{this.state.errors.errorDataPost}</span> : ''}
            <button type="submit" className="btn btn-success center-block">Enviar</button>
          </form>
        </div>
    );
  }
  login(){
    console.log('Click en el boton');
    this.setState({visibleDiv:true});
  }
}

export default ComponentFormLogin;
