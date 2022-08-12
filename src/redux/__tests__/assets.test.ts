import { models, RootModel } from '@redux/models';
import { init } from '@rematch/core';

describe('assets store', () => {
  describe('[assets] reducer', () => {
    it('incrementPage effect should increment given a payload', async () => {
      const store = init<RootModel>({
        models,
      });
      await store.dispatch.assets.incrementPage(1);
      const myModelData = store.getState().assets.currentPage;
      expect(myModelData).toEqual(2);
    });
  });
});
