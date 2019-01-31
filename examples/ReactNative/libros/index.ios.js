import React from 'react';
import { View, AppRegistry } from 'react-native';
import LibroList from './src/components/LibroList';


const App = () => {
  return (
    <View style={{ marginTop: 10, flex: 1 }}>
      <LibroList />
    </View>
  );
};

AppRegistry.registerComponent('libros', () => App);

