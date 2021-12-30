/* API Keys AIzaSyApAgfYS0mIE50Ad-hqATJK4QHy-vYOqTM */
/* GET https://www.googleapis.com/youtube/v3/search */
import React from 'react';

import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector} from 'react-redux';

const Home = navigation => {
  const cardData = useSelector(state => {
    return state.cardData;
  });
  return (
    <View style={style.HomeScreen}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({item}) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};

const style = StyleSheet.create({HomeScreen: {flex: 1}});

export default Home;
