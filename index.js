import 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { rootNavigation } from '@navigation/Navigation';

Navigation.events().registerAppLaunchedListener(() => rootNavigation());
