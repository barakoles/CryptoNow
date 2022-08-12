import { Models } from '@rematch/core';
import { app } from './app';
import { assets } from './assets';
import { favorites } from './favorites';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  assets: typeof assets;
  favorites: typeof favorites;
}

export const models: RootModel = {
  app,
  assets,
  favorites,
};
