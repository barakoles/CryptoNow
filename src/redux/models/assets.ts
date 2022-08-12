import config from '@config/config';
import { Asset } from '@core/assets';
import { createModel } from '@rematch/core';
import axios from 'axios';
import type { RootModel } from './index';

type AssetsState = {
  assets: Asset[];
  currentPage: number;
  selectedAsset: Asset | null;
};

const initialState: AssetsState = {
  assets: [
    {
      id: '1',
      name: 'Bitcoin',
      profile: {
        background: '',
        category: '',
        consensus_algorithm: '',
        is_verifies: false,
      },
      overview: '',
      tagline: '',
      technology: '',
      slug: '',
      symbol: '',
    },
  ],
  currentPage: 1,
  selectedAsset: null,
};

export const assets = createModel<RootModel>()({
  state: initialState as AssetsState,
  reducers: {
    incrementPage(state, payload: number) {
      return {
        ...state,
        currentPage: state.currentPage + payload,
      };
    },
    selectAsset(state, payload: Asset) {
      return {
        ...state,
        selectedAsset: payload,
      };
    },
  },
  effects: dispatch => ({
    getAssets: async function (_, state): Promise<any> {
      try {
        const url =
          config.apiUrl + 'assets?limit=20&page=' + state.assets.currentPage;
        const res = await axios.get(url);
        dispatch.assets.incrementPage(1);
        return res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  }),
});
