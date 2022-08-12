import { LayoutBottomTabs } from 'react-native-navigation';
import { Screens } from './Screens';
// import Icon from 'react-native-vector-icons/Ionicons';
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
            text: 'Assets',
            selectedIconColor: '#6C8AFF',
            iconColor: '#C4D0FF',
            icon: require('../assets/images/coin.png'),
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
            text: 'Favorites',
            selectedIconColor: '#6C8AFF',

            iconColor: '#C4D0FF',
            icon: require('../assets/images/love.png'),
          },
        },
      },
    },
  ],
};
