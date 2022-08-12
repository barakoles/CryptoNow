import { Screens } from '@navigation/Screens';
import { LayoutStack } from 'react-native-navigation';

export enum StacksIds {
  MAIN_STACK = 'MainStack',
}

export const AssetStack: LayoutStack = {
  id: StacksIds.MAIN_STACK,
  children: [
    {
      component: {
        name: Screens.ASSET,
        id: Screens.ASSET,
      },
    },
  ],
};
