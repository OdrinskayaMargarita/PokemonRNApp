import React, { FC } from 'react';

import { SafeAreaView, ScrollView } from 'react-native';

import { tw } from '@lib/tailwind';

import { HeaderComponent } from './template.header';
import { IProps } from './types';

export const TemplateContainerScroll: FC<IProps> = ({ children, options }) => {
  return (
    <SafeAreaView style={tw`bg-primary900 h-full pt-2`}>
      <ScrollView style={tw`px-4 pb-4  relative w-full h-full bg-primary900 `}>
        {options && <HeaderComponent options={options} />}
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
