import React from 'react';

import { TextDescription } from '../../components/CoreComponents/text/text-description';

export const headerTitleLayouts = (title: string) => (
  <TextDescription weightText={'font-primary-semi-bold'} sizeText="text-base">
    {title}
  </TextDescription>
);
