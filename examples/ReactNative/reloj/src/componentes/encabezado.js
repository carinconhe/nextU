import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Encabezado = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Icon name="bars" size={20} color="#fff" />
            <Text style={textStyle}>{props.tituloEncabezado}</Text>
            <Icon name="plus" size={20} color="#fff" />
        </View>
    );
};

const styles = {
    viewStyle: {
        paddingTop: 20,
        backgroundColor: '#666',
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 6,
        paddingRight: 6
    },
    textStyle: {
        color: '#fff'
    }
};

export default Encabezado;
