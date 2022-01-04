import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {default as Ionicons} from 'react-native-vector-icons/Ionicons';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {NavigatorRoutes} from '../types/Navigation';

import {ThemeState} from '../types/State';
import {Colors} from '../constants/Colors';

const Header = () => {
  const searchNavigation =
    useNavigation<NativeStackNavigationProp<NavigatorRoutes, 'search'>>();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: ThemeState) => {
    return state.myDarkMode;
  });
  const {colors} = useTheme();
  const styled = StyleSheet.create({
    Header: {
      marginTop: 40,
      height: 45,
      backgroundColor: colors.background,
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
    HeaderLogoIcon: {
      marginLeft: 15,
    },
    HeaderLogoText: {
      fontSize: 22,
      marginLeft: 7,
      fontWeight: 'bold',
      color: colors.text,
    },
  });

  return (
    <View style={styled.Header}>
      <View style={styled.HeaderLogo}>
        <AntDesign
          name="youtube"
          size={32}
          color={Colors.primary}
          style={styled.HeaderLogoIcon}
        />
        <Text style={styled.HeaderLogoText}>YouTube</Text>
      </View>
      <View style={styled.HeaderIcons}>
        <Ionicons name="md-videocam" size={32} color={colors.text} />
        <Ionicons
          name="md-search"
          size={32}
          color={colors.text}
          onPress={() => searchNavigation.navigate('search')}
        />
        <MaterialIcons
          name="account-circle"
          size={32}
          color={colors.text}
          onPress={() =>
            dispatch({type: 'change_theme', payload: !currentTheme})
          }
        />
      </View>
    </View>
  );
};

export default Header;
