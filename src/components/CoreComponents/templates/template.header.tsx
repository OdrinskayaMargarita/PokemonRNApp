import React, { FC } from 'react';

import { View, StatusBar, Platform } from 'react-native';

import { tw } from '@lib/tailwind';

import { IProps } from './types';

export const HeaderComponent: FC<{ options: IProps['options'] }> = ({ options }) => {
  if (!options) return null;
  const { headerCenter, headerLeft, headerRight } = options;
  return (
    <View
      style={tw`w-full flex-nowrap items-center min-h-[70px] flex flex-row py-3 ${
        Platform.OS === 'ios' ? '' : `pt-[${(StatusBar.currentHeight ?? 0) + 12}px]`
      }`}
    >
      <View style={tw`min-w-[50px] flex items-start`}>{headerLeft}</View>
      <View style={tw`grow flex-1`}>{headerCenter}</View>
      <View style={tw`min-w-[50px] flex items-end`}>{headerRight}</View>
    </View>
  );
};
