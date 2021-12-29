/* API Keys AIzaSyApAgfYS0mIE50Ad-hqATJK4QHy-vYOqTM */
/* GET https://www.googleapis.com/youtube/v3/search */
import React from 'react';

import {StyleSheet, Text, View, ScrollView} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

const Home = navigation => {
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
