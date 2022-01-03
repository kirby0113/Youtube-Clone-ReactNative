import React from 'react';

import {View, Text, FlatList, ScrollView, VirtualizedList} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

import {useSelector} from 'react-redux';

import {LittleCardProps} from '../types/Cards';
import {CardState} from '../types/State';

const LittleCard = ({name}: LittleCardProps) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 50,
        width: 180,
        borderRadius: 4,
        marginTop: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 22,
          marginTop: 5,
        }}>
        {name}
      </Text>
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
  const cardData = useSelector((state: CardState) => {
    return state.cardData;
  });
  return (
    <View style={{flex: 1}}>
      <Header />
      <VirtualizedView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <LittleCard name="Gaming" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="News" />
          <LittleCard name="Movies" />
          <LittleCard name="Fashion" />
        </View>
        <Text style={{margin: 8, fontSize: 22, borderBottomWidth: 1}}>
          Trending Videos
        </Text>
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
