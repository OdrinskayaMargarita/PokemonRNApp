import React, { FC } from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { IPropsWithIconButtons } from './types';

export const WithIconButton: FC<IPropsWithIconButtons> = ({
  title,
  onClick,
  icon,
  margin = '',
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={tw`bg-indigo rounded-lg w-full py-3 px-4 ${margin ? margin : ''}`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`rounded-full bg-primary600 w-10 h-10 items-center justify-center mr-3`}>
            {icon}
          </View>
          <Text style={tw`flex p-0 text-base text-white font-primary-semi-bold`}>{title}</Text>
        </View>
        <MaterialIcons name="navigate-next" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};
