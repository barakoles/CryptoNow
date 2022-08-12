import { LayoutBottomTabs } from 'react-native-navigation';
import { Screens } from './Screens';

export enum BottomTabStacksIDs {
  BOTTOM_TABS_LAYOUT = 'BottomTabsLayout',
}

export const BottomTabStacks: LayoutBottomTabs = {
  id: BottomTabStacksIDs.BOTTOM_TABS_LAYOUT,
  children: [
    {
      stack: {
        id: Screens.ASSETS,
        children: [
          {
            component: {
              id: Screens.ASSETS,
              name: Screens.ASSETS,
            },
          },
        ],
        options: {
          bottomTab: {
            //   icon: require('./home.png'),
          },
        },
      },
    },
    {
      stack: {
        id: Screens.FAVORITES,
        children: [
          {
            component: {
              id: Screens.FAVORITES,
              name: Screens.FAVORITES,
            },
          },
        ],
        options: {
          bottomTab: {
            //   icon: require('./profile.png'),
          },
        },
      },
    },
  ],
};
