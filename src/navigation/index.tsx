import React, { useEffect } from 'react';

import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../../types';
import { BirthdateScreen } from '../screens/login/birthdate.screen';
import { UsernameScreen } from '../screens/login/username.screen';
import { ListScreen } from '../screens/pokemon-list/list.screen';
import { PokemonScreen } from '../screens/pokemon-list/pokemon.screen';
import { BirthdateChangeScreen } from '../screens/settings/birthdateChange.screen';
import { SettingsScreen } from '../screens/settings/settings.screen';
import { UsernameChangeScreen } from '../screens/settings/usernameChange.screen';
import { useAppSelector } from '../store/configureStore';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1A0244',
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();

  const { username, birthDate } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (birthDate)
      return navigation.reset({
        index: 0,
        routes: [{ name: 'ListScreen' }],
      });
    if (username)
      return navigation.reset({
        index: 0,
        routes: [{ name: 'BirthdateScreen' }],
      });
    navigation.reset({
      index: 0,
      routes: [{ name: 'UsernameScreen' }],
    });
  }, [username, birthDate]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="UsernameScreen"
        component={UsernameScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="UsernameChangeScreen"
        component={UsernameChangeScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="BirthdateScreen"
        component={BirthdateScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="BirthdateChangeScreen"
        component={BirthdateChangeScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="ListScreen" component={ListScreen} options={{ gestureEnabled: false }} />
      <Stack.Screen
        name="PokemonScreen"
        component={PokemonScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}
