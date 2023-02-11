import axios from 'axios';

import { baseUrl } from './config';

export const api = {
  getListPokemons() {
    return axios({
      method: 'get',
      url: baseUrl + `pokemon/?offset=0&limit=1279`,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).catch((error) => error);
  },

  getOnePokemon(name) {
    return axios({
      method: 'get',
      url: baseUrl + `pokemon/${name}`,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).catch((error) => error);
  },
};
