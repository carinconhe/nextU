import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const NavBotton = (props) => {
    const { contenedor, item } = styles;
    return (
        <View style={contenedor}>
            <TouchableOpacity style={item} onPress={() => Actions.Home()}>
                <Icon name={props.primero} size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Football()}>
                <Icon name={props.segundo} size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Basketball()}>
                <Icon name={props.tercero} size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.Betting()}>
                <Icon name={props.cuarto} size={35} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    contenedor: {
        height: 67,
        backgroundColor: '#7D7D8B',
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    }
};

export { NavBotton };