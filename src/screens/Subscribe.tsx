import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Subscribe = () => {
  const style = StyleSheet.create({
    Subscribe: {
      flex: 1,
    },
  });
  return (
    <View style={style.Subscribe}>
      <Header />
      <Text>Subscribe</Text>
    </View>
  );
};

export default Subscribe;
