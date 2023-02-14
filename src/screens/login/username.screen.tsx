import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { DefaultButton } from '../../components/CoreComponents/buttons/default.button';
import { InputComponent } from '../../components/CoreComponents/form/input-component';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { setUsername } from '../../reducers/auth.slice';
import { useAppDispatch } from '../../store/configureStore';

export const UsernameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [usernameValue, setUsernameValue] = useState('');

  const isButtonDisabled = usernameValue.trim().split(' ').length < 2;

  const handleClick = () => {
    dispatch(setUsername(usernameValue));
    navigation.navigate('BirthdateScreen');
  };

  return (
    <TemplateContainer
      options={{
        headerCenter: headerTitleLayouts('Login'),
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

          <DefaultButton
            onClick={handleClick}
            title={'Continue'}
            disabled={isButtonDisabled}
            margin={'mt-4'}
            bgColor={'bg-primary500'}
          />
        </View>
      </TouchableWithoutFeedback>
    </TemplateContainer>
  );
};
