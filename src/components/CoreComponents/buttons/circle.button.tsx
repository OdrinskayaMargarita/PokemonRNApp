import React, { FC } from 'react';

import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { tw } from '@lib/tailwind';

import { IPropsCircleButton } from './types';

export const CircleButton: FC<IPropsCircleButton> = ({ icon, onClick }) => {
  const getIcon = () => {
    switch (icon) {
      case 'back':
        return <Ionicons name="ios-chevron-back" size={18} color="white" style={tw`-ml-0.5`} />;

      case 'setting':
        return <AntDesign name="setting" size={18} color="white" style={tw`-ml-0.5`} />;
    }
  };
  return (
    <TouchableOpacity
      style={tw`bg-primary500 rounded-full w-8 h-8 items-center justify-center`}
      onPress={onClick}
    >
      {getIcon()}
    </TouchableOpacity>
  );
};
