import React, { useState } from 'react';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { PurpleNegativeButton } from '../../components/CoreComponents/buttons';
import { CircleWithIconButton } from '../../components/CoreComponents/buttons/circleWithIcon.button';
import { RedButton } from '../../components/CoreComponents/buttons/red.button';
import { WithIconButton } from '../../components/CoreComponents/buttons/withIcon.button';
import { TemplateModalNotFully } from '../../components/CoreComponents/templates/modal/template-modal-not-fully.component';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { headerTitleLayouts } from '../../navigation/header-navigation-tabs/header.navigation';
import { clearAuthData } from '../../reducers/auth.slice';
import { useAppDispatch } from '../../store/configureStore';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (): void => {
    setIsModalVisible(true);
  };

  const closeModal = (): void => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    closeModal();
    dispatch(clearAuthData());
  };

  return (
    <TemplateContainer
      options={{
        headerCenter: headerTitleLayouts('Settings'),
        headerLeft: <CircleWithIconButton onClick={() => navigation.goBack()} icon="back" />,
      }}
    >
      <WithIconButton
        onClick={() => navigation.navigate('UsernameChangeScreen')}
        title={'Change User Name'}
        icon={<Ionicons name="person-outline" size={20} color="white" />}
        margin="mb-4"
      />
      <WithIconButton
        onClick={() => navigation.navigate('BirthdateChangeScreen')}
        title={'Change Birthday'}
        icon={<AntDesign name="calendar" size={20} color="white" />}
        margin="mb-20"
      />
      <RedButton title={'Logout'} onClick={openModal} />

      <TemplateModalNotFully
        alignModal={'end'}
        isVisible={isModalVisible}
        onOverlayTap={closeModal}
      >
        <View style={tw`py-12 px-5 bg-indigo rounded-t-[20px]`}>
          <View style={tw`flex items-center w-full relative mb-8`}>
            <Text style={tw`text-2xl text-white font-primary-semi-bold mb-5`}>Logging out</Text>
            <Text style={tw`font-primary-medium text-white text-center`}>
              Are you sure you want to log out of your current Guardian profile?
            </Text>
          </View>
          <View style={tw`flex w-full relative mb-8`}>
            <RedButton title={'Log out'} onClick={handleLogout} />
            <PurpleNegativeButton onClick={closeModal} title={'Back'} />
          </View>
        </View>
      </TemplateModalNotFully>
    </TemplateContainer>
  );
};
