import React, {useEffect} from 'react';

import {View} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {default as MaterialIcons} from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Subscribe from './src/screens/Subscribe';
import Explore from './src/screens/Explore';
import {reducer} from './src/reducers/reducer';
import {themeReducer} from './src/reducers/themeReducer';

import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import {ThemeState} from './src/types/State';
import {Colors} from './src/constants/Colors';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.darkGrey,
    primary: Colors.white,
    text: Colors.white,
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    primary: Colors.primary,
    text: Colors.black,
  },
};

const rootReducer = combineReducers({
  cardData: reducer,
  myDarkMode: themeReducer,
});

const store = createStore(rootReducer);

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const {colors} = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          } else if (route.name === 'Subscribe') {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};

const Navigation = () => {
  let currentTheme = useSelector((state: ThemeState) => {
    return state.myDarkMode;
  });
  return (
    <NavigationContainer
      theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
