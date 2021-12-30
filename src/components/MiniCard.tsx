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
import {useNavigation} from '@react-navigation/native';

const MiniCard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoplayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
      <View style={style.MiniCard}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
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
    </TouchableOpacity>
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
