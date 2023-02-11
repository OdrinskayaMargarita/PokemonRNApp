import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  UsernameScreen: undefined;
  UsernameChangeScreen: undefined;
  BirthdateScreen: undefined;
  BirthdateChangeScreen: undefined;
  ListScreen: undefined;
  PokemonScreen: undefined;
  SettingsScreen: undefined;
};
