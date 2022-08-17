import { fontFamilies, marginSizes } from '@shared/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginBottom: marginSizes.big,
  },
  backButton: {
    height: 80,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
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
    top: 20,
    right: 0,
    zIndex: 2,
  },
  chart: {
    marginVertical: marginSizes.big,
    borderRadius: 16,
  },
});

export default styles;
