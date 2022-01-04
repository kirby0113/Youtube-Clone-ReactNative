import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useTheme} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import {LittleCardProps} from '../types/Cards';
import {CardState} from '../types/State';
import {Colors} from '../constants/Colors';

const LittleCard = ({name}: LittleCardProps) => {
  const style = StyleSheet.create({
    LittleCard: {
      backgroundColor: Colors.primary,
      height: 50,
      width: 180,
      borderRadius: 4,
      marginTop: 10,
    },
    LittleCardText: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 22,
      marginTop: 5,
    },
  });

  return (
    <View style={style.LittleCard}>
      <Text style={style.LittleCardText}>{name}</Text>
    </View>
  );
};

type VirtualizedViewProps = {
  children: React.ReactNode;
};

const VirtualizedView = ({children}: VirtualizedViewProps) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => <React.Fragment>{children}</React.Fragment>}
    />
  );
};

const Explore = () => {
  const {colors} = useTheme();
  const cardData = useSelector((state: CardState) => {
    return state.cardData;
  });
  const style = StyleSheet.create({
    Explore: {flex: 1},
    LittleCardFlex: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    CenterText: {
      margin: 8,
      fontSize: 22,
      borderBottomWidth: 1,
      color: colors.text,
    },
  });
  return (
    <View style={style.Explore}>
      <Header />
      <VirtualizedView>
        <View style={style.LittleCardFlex}>
          <LittleCard name="Gaming" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="News" />
          <LittleCard name="Movies" />
          <LittleCard name="Fashion" />
        </View>
        <Text style={style.CenterText}>Trending Videos</Text>
        <FlatList
          data={cardData}
          renderItem={({item}) => {
            return (
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={item => item.id.videoId}
        />
      </VirtualizedView>
    </View>
  );
};

export default Explore;
