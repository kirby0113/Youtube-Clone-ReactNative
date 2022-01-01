export type NavigatorRoutes = {
  //useNavigation周りの型
  videoPlayer: VideoPlayerProps;
};

export type VideoPlayerProps = {
  route: {
    params: {
      videoId: string;
      title: string;
    };
  };
};
