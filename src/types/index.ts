interface IAuthState {
  username: string | null;
  birthDate: string | null;
}

interface IListState {
  listPokemons: [] | ItemPokemon[];
  listFilteredPokemons: [] | ItemPokemon[];
  listCurrentView: [] | ItemPokemon[];
  activePokemon: null | any;
  pagination: {
    end: number;
  };
}

export interface IStore {
  auth: IAuthState;
  list: IListState;
}

export interface ItemPokemon {
  name: string;
  url: string;
  id: number;
}

export interface OnePokemonFull {
  weight: number;
  height: number;
  abilities: ItemAbility[];
  stats: ItemStat[];
}

export interface ItemStat {
  stat: {
    name: string;
  };
  base_stat: number;
}
export interface ItemAbility {
  ability: {
    name: string;
  };
}
