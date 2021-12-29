import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

const Card = props => {
  return (
    <View style={style.Card}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
        }}
        style={{width: '100%', height: 200}}
      />
      <View style={style.CardDetail}>
        <MaterialIcons name="account-circle" size={40} color="#212121" />
        <View style={style.CardTexts}>
          <Text style={style.CardTitle} ellipsizeMode="tail" numberOfLines={2}>
            {props.title}
          </Text>
          <Text>{props.channelTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Card: {marginBottom: 10},
  CardDetail: {
    flexDirection: 'row',
    margin: 5,
  },
  CardTexts: {marginLeft: 10},
  CardTitle: {fontSize: 20, width: Dimensions.get('screen').width - 50},
});

export default Card;
