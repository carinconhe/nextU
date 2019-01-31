import React, { Component } from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Encabezado,Boton,Spinner} from './lib';
import Formulario from './Formulario';


class App extends Component {
    state = {sesioniniciada: null}
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBQYGrU_rprUInaHHp1Z6o1te9sg9E7zZE',
            authDomain: 'login-9a012.firebaseapp.com',
            databaseURL: 'https://login-9a012.firebaseio.com',
            projectId: 'login-9a012',
            storageBucket: 'login-9a012.appspot.com',
            messagingSenderId: '180219326392'
        });

        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.setState({sesioniniciada:true})
            }else
            this.setState({sesioniniciada:false})
        });
    }

    contenidoSegunSesion(){
        switch (this.state.sesioniniciada) {
            case true:
                return(
                    <View style={{height: 35}}>
                        <Boton 
                            texto={'cerrar Sesión'} 
                            onPress={()=>firebase.auth().signOut()}
                        />
                    </View>
                );
            case false:
                return(
                    <Formulario />
                );  
            default:
                return(
                    <Spinner size={'large'} />
                );
        }
    }

    render() {
        return (
            <View>
                <Encabezado tituloEncabezado={'Login App'} />
                {this.contenidoSegunSesion()}
            </View>
        );
    }
}

export default App;
