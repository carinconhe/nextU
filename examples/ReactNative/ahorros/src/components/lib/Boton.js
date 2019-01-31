import React from 'react';
import { TouchableOpacity } from 'react-native';

const Boton = ({ onPress, children }) => {
    const { contenedorStyle } = styles;
    return (
        <TouchableOpacity style={contenedorStyle} onPress={onPress}>
            {children}
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
    }
};

export { Boton };