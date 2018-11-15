import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, CardSection, Boton } from './lib';

class Movimiento extends Component {
    tipoMov() {
        if (this.props.isIngreso) {
            return { backgroundColor: '#ABFF4F' };
        }
        return { backgroundColor: '#F0687F' };
    }

    render() {
        const { titulo, fechaPago, monto } = this.props;
        const { tituloStyle,
            contenidoStyle,
            textoStyle,
            botonesContenedorStyle,
            botonStyle,
            cardStyle } = styles;
        return (
            <Card addStyle={cardStyle}>
                <CardSection addStyle={this.tipoMov()}>
                    <Text style={tituloStyle}>{titulo}</Text>
                </CardSection>
                <CardSection>
                    <View>
                        <View style={contenidoStyle}>
                            <View style={textoStyle}>
                                <Text>Fecha de pago:</Text>
                            </View>
                            <View style={textoStyle}>
                                <Text>{fechaPago}</Text>
                            </View>
                        </View>
                        <View style={contenidoStyle}>
                            <View style={textoStyle}>
                                <Text>Monto:</Text>
                            </View>
                            <View style={textoStyle}>
                                <Text>{monto}</Text>
                            </View>
                        </View>
                    </View>
                </CardSection>
                <CardSection style={botonesContenedorStyle}>
                    <Boton style={botonStyle}>
                        <Icon name="edit" size={20} color="#08BDBD" />
                    </Boton>
                    <Boton>
                        <Icon name="trash" size={20} color="#08BDBD" />
                    </Boton>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    tituloStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    contenidoStyle: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20
    },
    textoStyle: {
        width: '50%'
    },
    botonesContenedorStyle: {
        flexDirection: 'row'
    },
    botonStyle: {
        flex: 1
    },
    cardStyle: {
        marginBottom: 10
    }
};

export default Movimiento;
