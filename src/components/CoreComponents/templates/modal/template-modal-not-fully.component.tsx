import React, { FC, useEffect, useRef } from 'react';

import {
  Animated,
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import { tw } from '@lib/tailwind';

import { ITemplateModalProps } from '../types';

interface IProps extends ITemplateModalProps {
  alignModal?: alignModal;
}
const height = Dimensions.get('window').height;

export const TemplateModalNotFully: FC<IProps> = ({
  children,
  isVisible,
  onClose = () => {},
  onOverlayTap,
  alignModal = 'center',
}) => {
  useEffect(() => {
    slide();
  }, [isVisible]);

  const slideAnimation = useRef(new Animated.Value(height)).current;

  const slide = () => {
    Animated.timing(slideAnimation, {
      duration: 400,
      toValue: isVisible ? 0 : height,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={onOverlayTap}
        style={tw`flex h-full justify-${alignModal}`}
      >
        <View style={tw`w-full h-full bg-darkDarkPurple absolute opacity-80`} />
        <TouchableWithoutFeedback style={tw`flex w-full`}>
          <Animated.View style={[tw`w-full flex`, { transform: [{ translateY: slideAnimation }] }]}>
            <View>{children}</View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

type alignModal = 'center' | 'end' | 'start';
