
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Display from './display';
import MainImg from './main-img';

const Home = () => {
  return (
    <View style={styles.viewStyles}>
      <Display ciudad={'New York'} hora={'12:36 pm'} fecha={'3 de Julio'} />
      <TouchableOpacity 
          style={styles.touchableStyles} 
          onPress={() => Actions.configuraciones()}
      >
        <Text>Ver ciudades</Text>
      </TouchableOpacity>
      <MainImg />
    </View>
  );
};

const styles = {
  viewStyles: {
    flexGrow: 1
  },
  touchableStyles: {
    alignItems: 'center',
    padding: 5
  }
};

export default Home;
