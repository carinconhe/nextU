import React from 'react';
import { AppRegistry, View } from 'react-native';
import Titulo from './src/components/titulo';

const App = () => {
  return (
    <View>
      <Titulo textoTitulo={'Diccionario'} />
    </View>
  );
};

AppRegistry.registerComponent('diccionario', () => App);
