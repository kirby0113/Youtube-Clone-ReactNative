import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

import {CardProps} from '../types/Cards';

type NavigatorRoutes = {
  videoPlayer: VideoPlayer;
};

type VideoPlayer = {
  videoId: string;
  title: string;
};

const Card = ({props}: CardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigatorRoutes, 'videoPlayer'>>();
  const {colors} = useTheme();
  const textColor = colors.text;

  const style = StyleSheet.create({
    Card: {marginBottom: 10},
    CardDetail: {
      flexDirection: 'row',
      margin: 5,
    },
    CardTexts: {marginLeft: 10},
    CardTitle: {
      fontSize: 20,
      width: Dimensions.get('screen').width - 50,
      color: textColor,
    },
    ChannelTitle: {color: textColor},
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoPlayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
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
            <Text
              style={style.CardTitle}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {props.title}
            </Text>
            <Text style={style.ChannelTitle}>{props.channelTitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
