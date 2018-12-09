
import React from 'react';
import { View } from 'react-native';
import Display from './display';
import MainImg from './main-img';

const Home = () => {
  return (
    <View style={styles.viewStyles}>
      <Display ciudad={'New York'} hora={'12:36 pm'} fecha={'3 de Julio'} />
      <MainImg />
    </View>
  );
};

const styles = {
  viewStyles: {
    flexGrow: 1
  }
};

export default Home;
