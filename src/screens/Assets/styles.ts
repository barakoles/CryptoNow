import { marginSizes, themeColors } from '@shared/vars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    padding: marginSizes.big,
  },
  errorMessage: { textAlign: 'center', color: themeColors.main },
});

export default styles;
