import { create } from 'twrnc';

import twConfig from '../../tailwind.config';

export const tw = create(twConfig);
export const colors = twConfig.theme.extend.colors;
