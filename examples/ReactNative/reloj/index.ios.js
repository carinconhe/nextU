
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Encabezado from './src/componentes/encabezado';
import Display from './src/componentes/display';
import MainImg from './src/componentes/main-img';

const App = () => {
  return (
    <View style={styles.viewStyles}>
      <Encabezado tituloEncabezado={'Reloj Mundial'} />
      <Display ciudad={'Bogotá'} hora={'12:36 pm'} fecha={'3 de Julio'} />
      <MainImg />
    </View>
  );
};

const styles = {
  viewStyles: {
    flexGrow: 1
  }
};

AppRegistry.registerComponent('reloj', () => App);
