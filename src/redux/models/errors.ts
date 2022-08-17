import { createModel } from '@rematch/core';
import type { RootModel } from './index';

export type ErrorsPayload = {
  name: string;
  description: string;
  code: string;
};
type ErrorsState = {
  error?: ErrorsPayload;
};
const initialState: ErrorsState = {
  error: {
    name: '',
    description: '',
    code: '',
  },
};
export const errors = createModel<RootModel>()({
  state: initialState as ErrorsState,
  reducers: {
    setError(state, payload: any) {
      return {
        ...state,
        error: payload,
      };
    },
    clearError(state) {
      return {
        ...state,
        error: undefined,
      };
    },
  },
  effects: dispatch => ({
    async onError(payload: any) {
      //   const { name , code, description } = payload;
      dispatch.errors.setError(payload);
      if (!__DEV__) {
        // add error handling to services like sentry
      }
    },
  }),
});
