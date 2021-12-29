import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

const MiniCard = () => {
  return (
    <View style={style.MiniCard}>
      <Image
        source={{
          url: 'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        style={{width: '45%', height: 100}}
      />
      <View style={style.MiniCardTexts}>
        <Text
          style={style.MiniCardTitle}
          ellipsizeMode="tail"
          numberOfLines={3}>
          This is amazing course. wgin rgpiwnrg
        </Text>
        <Text style={{fontSize: 17}}>texttext</Text>
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
