import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getOnePokemon, getPokemonsList } from '../actions/list.action';
import { IStore, ItemPokemon } from '../types';

const initialState = {
  activePokemon: null,
  listCurrentView: [],
  listFilteredPokemons: [],
  listPokemons: [],
  pagination: {
    end: 12,
  },
} as IStore['list'];

export const pokemonsSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(
      getPokemonsList.fulfilled,
      (state: IStore['list'], action: PayloadAction<ItemPokemon[] | []>) => {
        state.listPokemons = action.payload.map((item, key) => {
          return { ...item, id: key + 1 };
        });
        state.listFilteredPokemons = state.listPokemons;
        state.listCurrentView = state.listFilteredPokemons.slice(0, 12);
      },
    );

    builder.addCase(
      getOnePokemon.fulfilled,
      (state: IStore['list'], action: PayloadAction<any>) => {
        state.activePokemon = action.payload;
      },
    );
  },
  initialState,
  name: 'pokemons',
  reducers: {
    clearActivePokemon(state: IStore['list']) {
      state.activePokemon = initialState.activePokemon;
    },

    filterList(state: IStore['list'], action: PayloadAction<{ nameSearch: string }>) {
      state.listFilteredPokemons = state.listPokemons.filter((item: { name: string }) =>
        item.name.includes(action.payload.nameSearch),
      );
      state.listCurrentView = state.listFilteredPokemons.slice(0, 12);
    },

    resetFilter(state: IStore['list']) {
      state.listFilteredPokemons = state.listPokemons;
      state.listCurrentView = state.listFilteredPokemons.slice(0, 12);
    },

    updateCurrentView(state: IStore['list']) {
      state.listCurrentView = state.listFilteredPokemons.slice(0, state.pagination.end);
    },

    updatePagination(state: IStore['list'], action: PayloadAction<{ end: number }>) {
      state.pagination = { end: action.payload.end };
    },
  },
});
export const { updateCurrentView, filterList, resetFilter, updatePagination, clearActivePokemon } =
  pokemonsSlice.actions;
