import React from 'react';

import {StyleSheet, Text, View, ScrollView} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
  return (
    <View style={style.HomeScreen}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({HomeScreen: {flex: 1}});

export default Home;
