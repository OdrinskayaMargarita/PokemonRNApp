import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../api/api';
import { ItemPokemon, OnePokemonFull } from '../types';

export const getPokemonsList = createAsyncThunk<ItemPokemon[] | []>('list', async () => {
  const { data } = await api.getListPokemons();
  if (data.error) throw 'Error';

  return data.results;
});

export const getOnePokemon = createAsyncThunk<OnePokemonFull, { name: string }>(
  'item',
  async ({ name }) => {
    const { data } = await api.getOnePokemon(name);
    if (data.error) throw 'Error';

    return data;
  },
);
