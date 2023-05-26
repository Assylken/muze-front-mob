export type AuthStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type MainStackParamList = {
  ProfileScreen: undefined;
  EditProfileScreen: undefined;
  SettingsScreen: undefined;
  InfoScreen: undefined;
};

export type InfoNavigationStack = {
  InfoScreen: undefined;
  ContactUsScreen: undefined;
};

export type PlaylistNavigationStackList = {
  LibraryScreen: undefined;
  PlaylistLayout: {
    playlistID: number;
    playlistName: string;
    playlistDesc: string;
    playlistCover: string;
  };
};

export type BottomNavigationStack = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  SearchScreen: undefined;
};
