import { Asset } from '@core/assets';
import { createModel } from '@rematch/core';
import type { RootModel } from './index';

type FavoritesState = {
  favorites: Asset[] | null;
};

const initialState: FavoritesState = {
  favorites: null,
};

export const favorites = createModel<RootModel>()({
  state: initialState as FavoritesState,
  reducers: {
    addFavorite(state, payload: Asset) {
      if (!state.favorites) return { ...state, favorites: [payload] };
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    },
    removeFavorite(state, payload: Asset) {
      if (!state.favorites) return;
      return {
        ...state,
        favorites: state.favorites.filter(asset => asset.id !== payload.id),
      };
    },
  },
  effects: () => ({}),
});
