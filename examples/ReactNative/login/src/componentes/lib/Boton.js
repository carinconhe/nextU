import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Boton = ({ onPress, texto }) => {
    const { contenedorStyle, textoStyle } = styles;
    return (
        <TouchableOpacity style={contenedorStyle} onPress={onPress}>
            <Text style={textoStyle}>{texto}</Text>
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
        borderColor: '#08BDBD',
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoStyle:{
        alignSelf: 'center',
        color:'#033030'
    }
};

export { Boton };

