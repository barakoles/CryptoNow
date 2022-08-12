import { LayoutRoot, Navigation, Options } from 'react-native-navigation';
import registerScreens from './registerScreens';
import { Screens } from './Screens';

const startScreens = () => {
  registerScreens();
};

startScreens();

const defaultOptions: Options = {
  topBar: {
    drawBehind: true,
    animate: false,
    visible: false,
  },
  layout: {
    orientation: ['portrait'],
  },
};

const layoutRoot: LayoutRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: Screens.APP,
            options: {
              statusBar: {
                style: 'dark',
              },
            },
          },
        },
      ],
    },
  },
};

export function rootNavigation() {
  Navigation.setDefaultOptions(defaultOptions);
  Navigation.setRoot(layoutRoot);
}
