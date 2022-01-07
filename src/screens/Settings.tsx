import React from 'react';

import {View, Text, StyleSheet, Switch} from 'react-native';
import Header from '../components/Header';

import {useSelector, useDispatch} from 'react-redux';
import {ThemeState} from '../types/State';

const Settings = () => {
  const isDarkMode = useSelector((state: ThemeState) => {
    return state.isDarkMode;
  });
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch({type: 'change_theme', payload: !isDarkMode});
  };
  const style = StyleSheet.create({
    Settings: {
      flex: 1,
    },
    SettingsView: {},
    SettingUnit: {},
  });
  return (
    <View style={style.Settings}>
      <Header />
      <View style={style.SettingsView}>
        <View style={style.SettingUnit}>
          <Text>ダークモード</Text>
          <Switch onValueChange={changeTheme} value={isDarkMode} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
