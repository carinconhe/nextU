import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class TituloMovimiento extends Component {
    iconColorMov() {
        if (this.props.isIngreso) {
            return '#ABFF4F';
        }
        return '#F0687F';
    }
    iconMov() {
        if (this.props.isIngreso) {
            return 'android';
        }
        return 'linux';
    }
    textColorMov() {
        if (this.props.isIngreso) {
            return { color: '#ABFF4F' };
        }
        return { color: '#F0687F' };
    }
    render() {
        const { subtituloStyle, textoStyle } = styles;
        return (
            <View style={subtituloStyle}>
                <Icon name={this.iconMov()} size={30} color={this.iconColorMov()} />
                <Text style={[textoStyle, this.textColorMov()]}>{this.props.texto}</Text>
            </View>
        );
    }
};

const styles = {
    subtituloStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    textoStyle: {
        paddingLeft: 5
    }
};

export default TituloMovimiento;
