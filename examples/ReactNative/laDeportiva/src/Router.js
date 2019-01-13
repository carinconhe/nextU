import React,{Component} from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './componentes/Login';
import Home from './componentes/Home';
import Football from './componentes/Football';
import Basketball from './componentes/Basketball';
import Betting from './componentes/Betting';
import firebase from 'firebase';

class RouterComponent extends Component {
    state = {
        sesioniniciada: null,
        login:null,
        home:null
    }

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
                this.setState({
                    sesioniniciada:true,
                    login:false,
                    home:true
                });
                Actions.Home()
            }else{
                this.setState({
                    sesioniniciada:false,
                    login:true,
                    home:false
                })
            }
        });
    }
    closeSession(){
        firebase.auth().signOut();
        Actions.Login();
    }
    render(){
        
        return (
                <Router sceneStyle={{ paddingTop: 65 }}>
                    <Scene key="root">
                        <Scene
                            key="Login"
                            hideNavBar={true}
                            component={Login}
                            title="Login"
                            initial ={this.state.login}
                        />
                        <Scene
                            component={Home}
                            hideNavBar={false}
                            key='Home'
                            title='Home'
                            initial ={this.state.home}
                            onRight = {() => this.closeSession()}
                            rightTitle ="Cerrar Sesión"
                            renderBackButton={()=>(null)}
                        />
                        <Scene 
                            component={Football}
                            title='Fútbol'
                            key='Football'
                            onRight = {() => this.closeSession()}
                            rightTitle ="Cerrar Sesión"
                            renderBackButton={()=>(null)}
                        />
                        <Scene 
                            component={Basketball}
                            title='Baloncesto'
                            key='Basketball'
                            onRight = {() => this.closeSession()}
                            rightTitle ="Cerrar Sesión"
                            renderBackButton={()=>(null)}
                        />
                        <Scene 
                            component={Betting}
                            title='Apuestas'
                            key='Betting'
                            onRight = {() => this.closeSession()}
                            rightTitle ="Cerrar Sesión"
                            renderBackButton={()=>(null)}
                        />
                    </Scene>
                </Router>
        );
        
        
    }
}

export default RouterComponent;
