import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Ionicons} from 'react-native-vector-icons/Ionicons';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Header = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const mycolor = colors.iconColor;
  const styled = StyleSheet.create({
    Header: {
      marginTop: 40,
      height: 45,
      backgroundColor: colors.headerColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 4,
    },
    HeaderLogo: {
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
    },
    HeaderIcons: {
      flexDirection: 'row',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 150,
    },
  });

  return (
    <View style={styled.Header}>
      <View style={styled.HeaderLogo}>
        <AntDesign
          name="youtube"
          size={32}
          color="red"
          style={{marginLeft: 15}}
        />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 7,
            fontWeight: 'bold',
            color: mycolor,
          }}>
          YouTube
        </Text>
      </View>
      <View style={styled.HeaderIcons}>
        <Ionicons name="md-videocam" size={32} color={mycolor} />
        <Ionicons
          name="md-search"
          size={32}
          color={mycolor}
          onPress={() => navigation.navigate('search')}
        />
        <MaterialIcons name="account-circle" size={32} color={mycolor} />
      </View>
    </View>
  );
};

export default Header;
