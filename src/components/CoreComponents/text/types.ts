import React from 'react';

export type AlignText = 'text-left' | 'text-center' | 'text-right' | 'text-justify';
export type SizeText =
  | 'text-[10px]' //10px
  | 'text-xs' //12px
  | 'text-sm' //14px
  | 'text-base' //16px
  | 'text-lg' //18px
  | 'text-xl' //20px
  | 'text-2xl' //24px
  | 'text-3xl' //30px
  | 'text-4xl' //36px
  | 'text-5xl' //48px
  | 'text-6xl' //60px
  | 'text-7xl'; //72px

export type WeightFont =
  | 'font-primary'
  | 'font-primary-medium'
  | 'font-primary-semi-bold'
  | 'font-primary-bold'
  | 'font-secondary'
  | 'font-secondary-medium'
  | 'font-secondary-semi-bold'
  | 'font-secondary-bold';

export interface IPropsText {
  children: React.ReactNode;
  color?: string;
  mp?: string;
  alignText?: AlignText;
  weightText?: WeightFont;
  sizeText?: SizeText;
  selectable?: boolean;
}
