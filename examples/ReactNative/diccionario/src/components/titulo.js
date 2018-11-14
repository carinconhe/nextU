import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Titulo = (props) => {
    const { textStyles, viewStyle } = styles;
    return (
        <View style={viewStyle}>
          <Text style={textStyles}>{props.textoTitulo}</Text>
          <Icon name="bars" size={20} color="#212121" />
        </View>
      );
};

const styles = {
  viewStyle: {
        backgroundColor: '#d0d0d0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
  textStyles: {
    fontSize: 30,
    color: '#717171'
  }
};

export default Titulo;
