import React, { FC } from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { IPropsButtons } from './types';

export const PurpleNegativeButton: FC<IPropsButtons> = ({
  title,
  onClick,
  maxWidth,
  margin,
  padding,
  sizeText,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      style={tw`${margin ? margin : 'my-1.5'} rounded-lg w-full ${maxWidth ? maxWidth : ''}`}
    >
      <View
        style={tw`${padding ? padding : 'p-3'} ${
          disabled ? 'opacity-50' : ''
        } bg-primary700 rounded-lg flex justify-center items-center flex-row`}
      >
        <Text style={tw`flex p-0 ${sizeText ?? 'text-base'} text-white font-primary-semi-bold`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
