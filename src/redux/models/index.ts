import { Models } from '@rematch/core';
import { app } from './app';
import { assets } from './assets';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  assets: typeof assets;
}

export const models: RootModel = {
  app,
  assets,
};
