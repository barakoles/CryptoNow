import { marginSizes } from '@shared/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 15,
    flexDirection: 'row',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  arrowContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    paddingVertical: 20,
  },
  title: {
    width: '100%',
    borderRadius: 10,
    fontFamily: 'ProximaNova-Bold',
  },
  subTitle: {
    width: '100%',
    borderRadius: 10,
    fontFamily: 'ProximaNova-Regular',
  },
  arrow: {
    paddingLeft: marginSizes.small,
  },
  tagline: {
    height: 20,
    width: '100%',
    borderRadius: 10,
    marginVertical: 5,
  },
  symbol: {
    height: 20,
    width: '40%',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default styles;
