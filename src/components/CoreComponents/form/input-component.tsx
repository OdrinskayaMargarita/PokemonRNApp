import React, { useEffect, useState } from 'react';

import { View, TextInput, Text, Keyboard } from 'react-native';

import { tw } from '@lib/tailwind';

import { TextDescription } from '../text/text-description';

import { KeyboardType } from './types';

export const InputComponent = ({
  value,
  onChange,
  placeholder,
  labelColor = 'whiteOpacity',
  handleFocus,
  bgText = 'primary900',
  autoFocus = false,
  description,
  withIcon,
  keyboardType,
  isMultiline,
  isError,
  errorText,
}: IProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  useEffect(() => {
    if (!isFocus) Keyboard.dismiss();

    if (handleFocus) {
      handleFocus(isFocus);
    }
  }, [isFocus]);

  return (
    <View style={tw`relative w-full`}>
      <View
        style={tw`relative w-full min-h-15 border-2 rounded-lg ${
          isError ? 'border-error400 bg-error400opacity' : 'border-primary500 bg-transparent'
        } p-3 ${withIcon ? 'pr-8' : 'pr-2.5'}`}
      >
        <View style={tw`flex absolute left-3 px-2 -top-2.5 bg-${bgText} z-10`}>
          <Text style={tw`font-primary text-xs text-${labelColor}`}>{placeholder}</Text>
        </View>
        <View style={tw`relative`}>
          <TextInput
            style={tw`w-full text-base text-white p-1 max-h-40 leading-5`}
            value={value}
            onChangeText={onChange}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            multiline={isMultiline}
          />
        </View>
      </View>
      {!!description?.length && (
        <View style={tw`flex-row items-center justify-between px-4 mt-1`}>
          <TextDescription
            alignText={'text-left'}
            sizeText={'text-xs'}
            color={errorText ? 'error' : 'whiteOpacity'}
          >
            {errorText ? errorText : description}
          </TextDescription>
        </View>
      )}
    </View>
  );
};

interface IProps {
  value: string;
  placeholder?: string;
  labelColor?: string;
  description?: string;
  bgText?: string;
  maxLength?: number | null;
  autoFocus?: boolean;
  withIcon?: boolean;
  isError?: boolean;
  errorText?: string;
  isMultiline?: boolean;
  onChange: (value: string) => void;
  handleFocus?: (value: boolean) => void;
  keyboardType?: KeyboardType;
}
