import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const MiniCard = props => {
  return (
    <View style={style.MiniCard}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/default.jpg`,
        }}
        style={{width: '45%', height: 100}}
      />
      <View style={style.MiniCardTexts}>
        <Text
          style={style.MiniCardTitle}
          ellipsizeMode="tail"
          numberOfLines={3}>
          {props.title}
        </Text>
        <Text style={{fontSize: 17}}>{props.channelTitle}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  MiniCard: {margin: 10, marginBottom: 0, flexDirection: 'row'},
  CardDetail: {
    flexDirection: 'row',
    margin: 5,
  },
  MiniCardTexts: {paddingLeft: 7},
  MiniCardTitle: {fontSize: 20, width: Dimensions.get('screen').width / 2},
});

export default MiniCard;
