import React, {Component} from 'react';
import {View,Text} from 'react-native';
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
        const {
            contentStyle,
            errorMsgStyle,
            titleStyle,
            contentButton
        } = styles;
        return(
            <Card style={contentStyle}>
                <Text style={titleStyle}>Resultados App</Text>
                <CardSection>
                    <Input 
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
                <View style={contentButton}>
                    {this.mostrarAccion()}
                </View>
            </Card>
        );
    }

}

const styles = {
    titleStyle:{
        marginTop: 100,
        marginBottom: 50,
        fontSize:20,
        alignSelf:'center'
    },
    contentStyle : {
        marginTop: 200
    },
    errorMsgStyle:{
        fontSize:17,
        color:'red',
        alignSelf:'center'
    },
    contentButton :{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
}

export default Formulario;