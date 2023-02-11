import React from 'react';

import { Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { IPropsText } from './types';

export const HeadlineComponent = ({
  children,
  color,
  alignText,
  weightText,
  sizeText,
  textTransform,
  mp,
}: IPropsText) => {
  return (
    <Text
      style={tw`flex
        ${weightText ?? 'font-primary-semi-bold'}
        ${sizeText ? sizeText : 'text-xl'}
        text-${color ? color : 'white'}
        ${alignText ? alignText : 'text-center'}
        ${mp ? mp : ''}
        ${textTransform ? textTransform : 'normal-case'}`}
    >
      {children}
    </Text>
  );
};
