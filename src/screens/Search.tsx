import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CardState} from '../types/State';

import {default as Ionicons} from 'react-native-vector-icons/Ionicons';

import MiniCard from '../components/MiniCard';
import {useSelector, useDispatch} from 'react-redux';
import {SearchProps} from '../types/Navigation';

const Search = (props: SearchProps) => {
  const {colors} = useTheme();
  const iconColor = colors.text;
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const miniCardDatas = useSelector((state: CardState) => {
    return state.cardData;
  });
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyApAgfYS0mIE50Ad-hqATJK4QHy-vYOqTM`,
    )
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        dispatch({type: 'add', payload: json.items});
      });
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
      backgroundColor: colors.background,
    },
    SearchInput: {width: '70%', backgroundColor: '#e6e6e6'},
  });

  return (
    <View style={style.SearchScreen}>
      <View style={style.SearchForm}>
        <Ionicons
          style={{color: iconColor}}
          name="md-arrow-back"
          size={32}
          onPress={() => props.navigation.goBack()}
        />
        <TextInput
          onChangeText={(text: string) => setValue(text)}
          value={value}
          style={style.SearchInput}
        />
        <Ionicons
          style={{color: iconColor}}
          name="md-send"
          size={32}
          onPress={() => fetchData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 20}} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCardDatas}
        renderItem={({item}) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};

export default Search;
