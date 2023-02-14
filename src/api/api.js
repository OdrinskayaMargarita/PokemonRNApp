import { instance } from './config';

export const api = {
  getListPokemons() {
    return instance({
      method: 'get',
      url: `pokemon/?offset=0&limit=1279`,
    }).catch((error) => error);
  },

  getOnePokemon(name) {
    return instance({
      method: 'get',
      url: `pokemon/${name}`,
    }).catch((error) => error);
  },
};
