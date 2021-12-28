import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
  return (
    <View>
      <Header />
      <Card />
      <Card />
    </View>
  );
};

export default Home;
