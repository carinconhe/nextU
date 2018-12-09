import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Perfil from './componentes/Perfil';
import Home from './componentes/Home';
import ListaCiudades from './componentes/ListaCiudades';

const RouterComponent = () =>{
    return (
        <Router sceneStyle={{paddingTop:65}}>
            <Scene 
                key="Home"
                component={Home}
                title="Inicio"
                initial
            />
            <Scene 
                key="ListaCiudades"
                component={ListaCiudades}
                title="Ciudades"
            />
            <Scene 
                key="Perfil"
                component={Perfil}
                title="Perfil"
            />
        </Router>
    );
};

export default RouterComponent;