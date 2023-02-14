import React, { FC } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { IPropsButtons } from './types';

export const DefaultButton: FC<IPropsButtons> = ({
  title,
  onClick,
  maxWidth,
  margin,
  padding,
  sizeText,
  disabled,
  bgColor,
  isIcon,
  isNotCentered,
  icon,
  isArrowEnd,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      style={tw`${margin ? margin : 'my-1.5'} rounded-lg w-full ${maxWidth ? maxWidth : ''} `}
    >
      <View
        style={tw`${padding ? padding : 'p-3'} ${disabled ? 'opacity-50' : ''} ${
          bgColor ? bgColor : 'bg-primary500'
        } rounded-lg flex justify-center items-center flex-row`}
      >
        <View
          style={tw`w-full px-3 flex-row items-center ${
            isNotCentered ? 'justify-start' : 'justify-center'
          }`}
        >
          {isIcon ? (
            <View style={tw`rounded-full bg-primary600 w-10 h-10 items-center justify-center mr-3`}>
              {icon}
            </View>
          ) : null}
          <Text style={tw`flex p-0 ${sizeText ?? 'text-base'} text-white font-primary-semi-bold`}>
            {title}
          </Text>
        </View>
        {isArrowEnd && <MaterialIcons name="navigate-next" size={24} color="white" />}
      </View>
    </TouchableOpacity>
  );
};
