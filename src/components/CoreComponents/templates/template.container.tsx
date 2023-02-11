import React, { FC } from 'react';

import { SafeAreaView, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { HeaderComponent } from './template.header';
import { IProps } from './types';

export const TemplateContainer: FC<IProps> = ({ children, options }) => {
  return (
    <SafeAreaView style={tw`bg-primary900 pt-2`}>
      <View style={tw`px-4 pb-3 relative w-full h-full bg-primary900`}>
        {options && <HeaderComponent options={options} />}
        {children}
      </View>
    </SafeAreaView>
  );
};
