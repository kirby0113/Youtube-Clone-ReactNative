import React from 'react';

import {View} from 'react-native';

import Home from './src/screens/Home';
import Search from './src/screens/Search';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Search></Search>
    </View>
  );
};

export default App;
