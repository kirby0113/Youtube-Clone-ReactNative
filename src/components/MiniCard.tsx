import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorRoutes} from '../types/Navigation';

import {MiniCardProps} from '../types/Cards';

const MiniCard = (props: MiniCardProps) => {
  const videoPlayerNavigation =
    useNavigation<NativeStackNavigationProp<NavigatorRoutes, 'videoPlayer'>>();
  const {colors} = useTheme();

  const style = StyleSheet.create({
    MiniCard: {margin: 10, marginBottom: 0, flexDirection: 'row'},
    CardDetail: {
      flexDirection: 'row',
      margin: 5,
    },
    MiniCardTexts: {paddingLeft: 7},
    ChannelTitle: {color: colors.text, fontSize: 17},
    MiniCardTitle: {
      fontSize: 20,
      width: Dimensions.get('screen').width / 2,
      color: colors.text,
    },
    MiniCardImage: {
      width: '45%',
      height: 100,
    },
  });

  return (
    <TouchableOpacity
      onPress={() =>
        videoPlayerNavigation.navigate('videoPlayer', {
          videoId: props.videoId,
          title: props.title,
          channel: props.channelTitle,
        })
      }>
      <View style={style.MiniCard}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={style.MiniCardImage}
        />
        <View style={style.MiniCardTexts}>
          <Text
            style={style.MiniCardTitle}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {props.title}
          </Text>
          <Text style={style.ChannelTitle}>{props.channelTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;
