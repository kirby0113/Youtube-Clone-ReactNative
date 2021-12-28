import React, {useState} from 'react';

import {StyleSheet, Text, View, TextInput} from 'react-native';

import {default as Ionicons} from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <View style={style.SearchScreen}>
      <View style={style.SearchForm}>
        <Ionicons name="md-arrow-back" size={32} />
        <TextInput
          onChangeText={(text: string) => setValue(text)}
          value={value}
          style={style.SearchInput}
        />
        <Ionicons name="md-send" size={32} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  SearchScreen: {flex: 1, marginTop: 40},
  SearchForm: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    evelation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: 'white',
  },
  SearchInput: {width: '70%', backgroundColor: '#e6e6e6'},
});

export default Search;
