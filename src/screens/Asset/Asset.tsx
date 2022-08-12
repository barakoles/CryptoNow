import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { LineChart } from 'react-native-chart-kit';

import { Dispatch } from '@redux/store';
import { useReduxState } from '@hooks/useReduxState';
import { themeColors } from '@shared/vars';

import styles from './styles';

const AssetScreen = ({ componentId }: { componentId: string }) => {
  const dispatch = useDispatch<Dispatch>();
  const asset = useReduxState(state => state.assets.selectedAsset);
  const favorites = useReduxState(state => state.favorites.favorites);

  const isFavorite = asset?.id ? favorites?.includes(asset) : false;

  const toggleFavorite = () => {
    if (!asset) return;
    if (isFavorite) {
      dispatch.favorites.removeFavorite(asset);
    } else {
      dispatch.favorites.addFavorite(asset);
    }
  };
  const goBack = async () => {
    await Navigation.pop(componentId);
  };

  return (
    <>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Icon name={'ios-arrow-back'} size={25} color={themeColors.main} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        {isFavorite ? (
          <Icon name={'heart'} size={25} color={themeColors.main} />
        ) : (
          <Icon name={'heart-outline'} size={25} color={themeColors.main} />
        )}
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>
            {asset?.name}
            {'\n'}
            <Text style={styles.subTitle}>{asset?.profile.tagline}</Text>
            {'\n\n'}
            <Text style={styles.title}>Category</Text>
            {'\n'}
            <Text style={styles.subTitle}>{asset?.profile.category}</Text>
            {'\n\n'}
            <Text style={styles.title}>Metrics</Text>
            {'\n\n'}
            <Text style={styles.subTitle}>Price USD</Text>
            {'\n'}
            <Text style={styles.subTitle}>
              {asset?.metrics.market_data.price_usd?.toFixed(2)}
            </Text>
            {'\n\n'}
            <Text style={styles.subTitle}>All-time High</Text>
            {'\n'}
            <Text style={styles.subTitle}>
              {asset?.metrics.all_time_high.price?.toFixed(2)}
            </Text>
          </Text>
        </View>

        {asset && (
          <LineChart
            data={{
              labels: ['Yesterday', 'Today'],
              datasets: [
                {
                  data: [
                    asset?.metrics.market_data.price_usd -
                      asset?.metrics.market_data.price_usd *
                        asset?.metrics.market_data
                          .percent_change_usd_last_24_hours *
                        0.01,
                    asset?.metrics.market_data.price_usd,
                  ],
                },
              ],
            }}
            width={(4.5 * Dimensions.get('window').width) / 5} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: themeColors.main,
              backgroundGradientFrom: themeColors.main,
              backgroundGradientTo: themeColors.secondary,
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: themeColors.green,
              },
            }}
            bezier
            style={styles.chart}
          />
        )}
      </View>
    </>
  );
};

export default AssetScreen;
