import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';

const Card = () => {
  return (
    <View style={style.Card}>
      <Image
        source={{
          url: 'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
        style={{width: '100%', height: 140}}
      />
      <View style={style.CardDetail}>
        <MaterialIcons name="account-circle" size={40} color="#212121" />
        <View style={style.CardTexts}>
          <Text style={style.CardTitle} ellipsizeMode="tail" numberOfLines={2}>
            This is Amazing courserag iddervwrvwrv igh prigj sdf
          </Text>
          <Text>This is Amazing course</Text>
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
