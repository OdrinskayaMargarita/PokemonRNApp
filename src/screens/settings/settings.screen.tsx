import React, { useState } from 'react';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { CircleButton } from '../../components/CoreComponents/buttons/circle.button';
import { DefaultButton } from '../../components/CoreComponents/buttons/default.button';
import { TemplateContainer } from '../../components/CoreComponents/templates/template.container';
import { LogOutModal } from '../../components/modalLogout/logout.modal';
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
        headerLeft: <CircleButton onClick={() => navigation.goBack()} icon="back" />,
      }}
    >
      <DefaultButton
        isNotCentered={true}
        isArrowEnd={true}
        isIcon={true}
        onClick={() => navigation.navigate('UsernameChangeScreen')}
        title={'Change User Name'}
        icon={<Ionicons name="person-outline" size={20} color="white" />}
        margin="mb-4"
      />
      <DefaultButton
        isNotCentered={true}
        isArrowEnd={true}
        isIcon={true}
        onClick={() => navigation.navigate('BirthdateChangeScreen')}
        title={'Change Birthday'}
        icon={<AntDesign name="calendar" size={20} color="white" />}
        margin="mb-20"
      />
      <DefaultButton title={'Logout'} onClick={openModal} bgColor={'bg-error500'} />

      <LogOutModal
        isModalVisible={isModalVisible}
        handleLogout={handleLogout}
        closeModal={closeModal}
      />
    </TemplateContainer>
  );
};
