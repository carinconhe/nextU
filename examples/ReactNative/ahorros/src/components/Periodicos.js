import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {Titulo,NavBotton} from './lib';
import Movimiento from './Movimiento';
import TituloMovimiento from './TituloMovimiento';

class Periodicos extends Component {
    render() {
        const { mainContenedor } = styles;
        return (
            <View>
                <Titulo title='Movimientos Periódicos' />
                <ScrollView style={mainContenedor}>
                    <TituloMovimiento texto="Ingresos" isIngreso />
                    <Movimiento
                        titulo="Salario" 
                        fechaPago="1 y 15 de cada mes" 
                        monto="$1000" 
                        isIngreso
                    />
                    <Movimiento
                        titulo="Trabajo extra" 
                        fechaPago="30 de cada mes" 
                        monto="$200" 
                        isIngreso
                    />
                    <TituloMovimiento texto="Egresos" isIngreso={false} />
                    <Movimiento
                        titulo="Renta" 
                        fechaPago="30 de cada mes" 
                        monto="$500" 
                        isIngreso={false}
                    />
                    <Movimiento
                        titulo="Servicios" 
                        fechaPago="12 de cada mes" 
                        monto="$100" 
                        isIngreso={false}
                    />
                    
                </ScrollView>
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

const styles = {
    mainContenedor: {
        padding: 10,
        paddingTop: 10,
        marginTop: 10,
        height: 520
    }
};

export default Periodicos;
