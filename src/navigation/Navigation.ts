import { LayoutRoot, Navigation, Options } from 'react-native-navigation';
import { BottomTabStacks } from './BottomTabStacks';
import registerScreens from './registerScreens';

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
    bottomTabs: BottomTabStacks,
  },
};

export function rootNavigation() {
  Navigation.setDefaultOptions(defaultOptions);
  Navigation.setRoot(layoutRoot);
}
