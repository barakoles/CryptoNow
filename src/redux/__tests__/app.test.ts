import { models, RootModel } from '@redux/models';
import { init } from '@rematch/core';

describe('auth store', () => {
  describe('[auth] reducer', () => {
    it('incrementAsync effect should increment given a payload', async () => {
      const store = init<RootModel>({
        models,
      });
      await store.dispatch.app.setFirstTime();
      const myModelData = store.getState().app.firstTime;
      expect(myModelData).toBeFalsy();
    });
  });
});
