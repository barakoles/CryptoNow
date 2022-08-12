import { fontFamilies, marginSizes } from '@shared/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    padding: marginSizes.big,
    borderRadius: 15,
    flexDirection: 'row',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  backButton: {
    height: 80,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  title: {
    fontFamily: fontFamilies.bold,
  },
  subTitle: {
    fontFamily: fontFamilies.regular,
  },
  favoriteButton: {
    height: 80,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
  },
});

export default styles;
