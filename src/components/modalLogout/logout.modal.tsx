import React, { FC } from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { DefaultButton } from '../CoreComponents/buttons/default.button';
import { TemplateModalNotFully } from '../CoreComponents/templates/modal/template-modal-not-fully.component';

export const LogOutModal: FC<IProps> = ({ isModalVisible, closeModal, handleLogout }) => {
  return (
    <TemplateModalNotFully alignModal={'end'} isVisible={isModalVisible} onOverlayTap={closeModal}>
      <View style={tw`py-12 px-5 bg-indigo rounded-t-[20px]`}>
        <View style={tw`flex items-center w-full relative mb-8`}>
          <Text style={tw`text-2xl text-white font-primary-semi-bold mb-5`}>Logging out</Text>
          <Text style={tw`font-primary-medium text-white text-center`}>
            Are you sure you want to log out of your current Guardian profile?
          </Text>
        </View>
        <View style={tw`flex w-full relative mb-8`}>
          <DefaultButton title={'Log out'} onClick={handleLogout} bgColor={'bg-error500'} />
          <DefaultButton onClick={closeModal} title={'Back'} bgColor={'bg-primary700'} />
        </View>
      </View>
    </TemplateModalNotFully>
  );
};

interface IProps {
  isModalVisible: boolean;
  closeModal: () => void;
  handleLogout: () => void;
}
