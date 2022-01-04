import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Suscribe = () => {
  const style = StyleSheet.create({
    Subscribe: {
      flex: 1,
    },
  });
  return (
    <View style={style.Subscribe}>
      <Header />
      <Text>Suscribe</Text>
    </View>
  );
};

export default Suscribe;
