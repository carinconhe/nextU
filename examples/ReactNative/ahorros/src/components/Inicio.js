import React, {Component} from 'react';
import { View } from 'react-native';
import {Titulo,NavBotton} from './lib';
import Resumen from './Resumen';

class Inicio extends Component {
    render() {
        return (
            <View>
                <Titulo title='Inicio' />
                <Resumen />
                <NavBotton
                    primero="home" 
                    segundo="refresh" 
                    tercero="list" 
                    cuarto="user" 
                />
            </View>
        );
    }
}

export default Inicio;