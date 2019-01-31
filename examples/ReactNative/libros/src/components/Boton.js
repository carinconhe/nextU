import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Boton = (props) => {
    const { contenedorStyle, textoStyle } = styles;
    return (
        <TouchableOpacity style={contenedorStyle}>
            <Text style={textoStyle}>{props.texto}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    contenedorStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#acacac',
        marginLeft: 5,
        marginRight: 5,
        padding: 5
    },
    textoStyle: {
        alignSelf: 'center',
        color: '#0022d1',
        fontSize: 16,
        fontWeight: '400'

    }
};

export default Boton;
