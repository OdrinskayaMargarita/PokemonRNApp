import React from 'react';

export interface IPropsButtons {
  title?: string;
  onClick: () => void;
  maxWidth?: string;
  width?: string;
  margin?: string;
  padding?: string;
  colorText?: string;
  sizeText?: string;
  disabled?: boolean;
  textColor?: string;
  bgColor?: string;
  isIcon?: boolean;
  icon?: React.ReactNode;
  isArrowEnd?: boolean;
  isNotCentered?: boolean;
}

export interface IPropsCircleButton extends IPropsButtons {
  icon: React.ReactNode;
}
