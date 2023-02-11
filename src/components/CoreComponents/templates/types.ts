import React from 'react';

export interface IProps {
  children: React.ReactNode;
  extraScrollHeight?: number;
  isAvailableScroll?: boolean;

  options?: {
    headerLeft?: React.ReactNode;
    headerCenter?: React.ReactNode;
    headerRight?: React.ReactNode;
  };
}

export interface ITemplateModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  maxHeight?: boolean;
  disabledPadding?: boolean;
  minHeight?: string;
  onOverlayTap?: () => void | Promise<void>;
  onClose?: () => void | Promise<void>;
  backgroundColor?: string;
}
