import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Boton = ({ texto, onPress }) => {
    const { contenedorStyle, textoStyle } = styles;
    return (
        <TouchableOpacity style={contenedorStyle} onPress={onPress}>
            <Text style={textoStyle}>{texto}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    contenedorStyle: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 5,
    },
    textoStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Boton };

