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

export type SearchProps = {};
