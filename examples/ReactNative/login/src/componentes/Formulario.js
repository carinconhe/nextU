import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Boton, Input, Spinner} from './lib';

class Formulario extends Component{
    state = {
        email:'',
        password : '',
        error:'',
        cargando:false
    }

    enviarFormulario(){
        const {email,password} = this.state;
        this.setState({error:'',cargando:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.loginExitoso.bind(this))
        .catch(this.loginError.bind(this))
    }

    loginExitoso(){
        this.setState({email:'',password:'',cargando:false});
    }

    loginError(){
        this.setState({error:'Error de Autenticación',cargando:false})
    }

    mostrarAccion(){
        if(this.state.cargando==true){
            return (<Spinner size={'small'} />);
        }else{
            return (
                <Boton 
                        texto={'Iniciar Sesión'}
                        onPress={this.enviarFormulario.bind(this)}
                    />
            );
        }
    }

    render(){
        const {contentStyle,errorMsgStyle} = styles;
        return(
            <Card style={contentStyle}>
                <CardSection>
                <   Input 
                        placeholder={'usuario@gmail.com'}
                        texto = {'Email'}
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email})}

                    />
                </CardSection>
                <CardSection>
                    <Input 
                        placeholder={'password'}
                        texto = {'Contraseña'}
                        value = {this.state.password}
                        onChangeText = {password => this.setState({password})}
                        secureTextEntry
                    />
                </CardSection>
                <Text style={errorMsgStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.mostrarAccion()}
                </CardSection>
            </Card>
        );
    }

}

const styles = {
    contentStyle : {
        marginTop: 200
    },
    errorMsgStyle:{
        fontSize:17,
        color:'red',
        alignSelf:'center'
    }
}

export default Formulario;