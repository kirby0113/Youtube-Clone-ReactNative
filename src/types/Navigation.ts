import {NavigationProp} from '@react-navigation/native';

export type NavigatorRoutes = {
  //useNavigation周りの型
  videoPlayer?: {
    videoId: string;
    title: string;
    channel: string;
  };
  search?: SearchProps;
};

export type VideoPlayerProps = {
  route: {
    params: {
      videoId: string;
      title: string;
      channel: string;
    };
  };
};

export type SearchProps = {
  navigation: NavigationProp<any, any>; //any以外の方法を探したい
};
