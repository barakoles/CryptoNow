import { Models } from '@rematch/core';
import { app } from './app';
import { assets } from './assets';
import { errors } from './errors';
import { favorites } from './favorites';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  assets: typeof assets;
  favorites: typeof favorites;
  errors: typeof errors;
}

export const models: RootModel = {
  app,
  assets,
  favorites,
  errors,
};
