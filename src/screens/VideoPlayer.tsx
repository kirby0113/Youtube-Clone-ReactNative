import React from 'react';

import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  return (
    <View style={style.VideoPlayer}>
      <View style={style.VideoPlayerScreen}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />
      </View>
      <Text
        style={style.VideoPlayerTitle}
        numberOfLines={2}
        ellipsizeMode="tail">
        {title}
      </Text>
      <View style={style.VideoPlayerBorder}></View>
    </View>
  );
};

const style = StyleSheet.create({
  VideoPlayerTitle: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 50,
    margin: 9,
  },
  VideoPlayerScreen: {
    width: '100%',
    height: 200,
  },
  VideoPlayer: {
    flex: 1,
    marginTop: 40,
  },
  VideoPlayerBorder: {
    borderBottomWidth: 1,
  },
});

export default VideoPlayer;
