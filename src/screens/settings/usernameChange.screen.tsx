import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { PurpleButton } from '../../components/CoreComponents/buttons';
import { CircleWithIconButton } from '../../components/CoreComponents/buttons/circleWithIcon.button';
import { InputComponent } from '../../components/CoreComponents/form/input-component';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { setUsername } from '../../reducers/auth.slice';
import { useAppDispatch, useAppSelector } from '../../store/configureStore';

export const UsernameChangeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { username } = useAppSelector((store) => store.auth);

  const [usernameValue, setUsernameValue] = useState(username || '');

  const isButtonDisabled = usernameValue.trim().split(' ').length < 2 || usernameValue === username;

  const handleClick = () => {
    dispatch(setUsername(usernameValue));
    navigation.navigate('SettingsScreen');
  };

  return (
    <TemplateContainer
      options={{
        headerCenter: headerTitleLayouts('Login'),
        headerLeft: <CircleWithIconButton onClick={() => navigation.goBack()} icon="back" />,
      }}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={tw`min-h-full`}>
        <View style={tw`h-full`}>
          <InputComponent
            value={usernameValue}
            onChange={setUsernameValue}
            placeholder={'Enter your full name'}
            description={'A-Z a-z 0-9 Space'}
          />

          <PurpleButton
            onClick={handleClick}
            title={'Save'}
            disabled={isButtonDisabled}
            margin={'mt-4'}
          />
        </View>
      </TouchableWithoutFeedback>
    </TemplateContainer>
  );
};
