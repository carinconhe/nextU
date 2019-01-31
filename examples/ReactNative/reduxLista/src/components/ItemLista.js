import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './lib';
import * as actions from '../actions';

class ItemLista extends Component {

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    mostrarDescripcion() {
        const { expandir, frutaInfo } = this.props;
        if (expandir) {
            return (
                <CardSection>
                    <Text style={{flex:1}}>{frutaInfo.descripcion}</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { nombreStyle } = styles;
        const { id, nombre } = this.props.frutaInfo;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.seleccionarFruta(id)}
            >
                <View>
                    <CardSection>
                        <Text style={nombreStyle}>
                            {nombre}
                        </Text>
                    </CardSection>
                    {this.mostrarDescripcion()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nombreStyle: {
        fontSize: 20,
        paddingLeft: 5
    }
};

const mapStateToProps = (state, ownProps) => {
    const expandir = state.idFrutaSeleccionada === ownProps.frutaInfo.id;
    return { expandir };
};

export default connect(mapStateToProps, actions)(ItemLista);
