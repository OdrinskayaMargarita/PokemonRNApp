import React from 'react';

import { Text } from 'react-native';

import { tw } from '@lib/tailwind';

import { IPropsText } from './types';

export const TextDescription = ({
  children,
  color,
  alignText,
  weightText,
  sizeText,
  mp,
  selectable,
}: IPropsText) => {
  return (
    <Text
      selectable={selectable}
      style={tw`
      capitalize
      ${sizeText ? sizeText : 'text-xs'}
      ${weightText ?? 'font-primary'}
      text-${color ? color : 'white'}
      ${alignText ? alignText : 'text-center'}
      leading-5 ${mp ? mp : ''}`}
    >
      {children}
    </Text>
  );
};
