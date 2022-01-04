import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Settings = () => {
  const style = StyleSheet.create({
    Settings: {
      flex: 1,
    },
  });
  return (
    <View style={style.Settings}>
      <Header />
      <Text>Subscribe</Text>
    </View>
  );
};

export default Settings;
