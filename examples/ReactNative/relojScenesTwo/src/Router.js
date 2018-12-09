import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './componentes/Home';
import ListaCiudades from './componentes/ListaCiudades';
import Perfil from './componentes/Perfil';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="inicio">
                <Scene
                    key="Home"
                    component={Home}
                    title="Inicio"
                    initial
                />
            </Scene>
            <Scene key="configuraciones">
                <Scene
                    key="ListaCiudades"
                    component={ListaCiudades}
                    title="Ciudades"
                    rightTitle="Perfil"
                    onRight={() => Actions.Perfil()}
                />
                <Scene
                    key="Perfil"
                    component={Perfil}
                    title="Perfil"
                />
            </Scene>

        </Router>
    );
};

export default RouterComponent;
