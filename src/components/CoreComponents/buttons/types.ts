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
}

export interface IPropsCircleButton extends IPropsButtons {
  icon: React.ReactNode;
}

export interface IPropsWithIconButtons extends IPropsButtons {
  icon: React.ReactNode;
}
