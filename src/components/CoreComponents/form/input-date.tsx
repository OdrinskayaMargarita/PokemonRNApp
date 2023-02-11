import React from 'react';

import { View, TextInput, Text } from 'react-native';

import { tw } from '@lib/tailwind';

export const InputDate = ({
  value,
  placeholder,
  labelColor = 'whiteOpacity',
  bgText = 'primary900',
}: IProps) => {
  return (
    <View style={tw`relative w-full`}>
      <View
        style={tw`relative w-full min-h-15 border-2 rounded-lg border-primary500 bg-transparent p-3 pr-2.5`}
      >
        <View style={tw`flex absolute left-3 px-2 -top-2.5 bg-${bgText} z-10`}>
          <Text style={tw`font-primary text-xs text-${labelColor}`}>{placeholder}</Text>
        </View>
        <View style={tw`relative`}>
          <TextInput
            style={tw`w-full text-base text-white p-1 max-h-40 leading-5`}
            value={value}
            editable={false}
          />
        </View>
      </View>
    </View>
  );
};

interface IProps {
  value: string;
  placeholder?: string;
  labelColor?: string;
  bgText?: string;
  maxLength?: number | null;
}
