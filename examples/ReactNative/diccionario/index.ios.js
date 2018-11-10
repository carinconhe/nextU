import React from 'react';
import { AppRegistry } from 'react-native';
import Titulo from './src/components/titulo';

const App = () => {
  return (
    <Titulo textoTitulo={'Diccionario'} />
  );
};

AppRegistry.registerComponent('diccionario', () => App);
