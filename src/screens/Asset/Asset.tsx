import { View, Text } from 'react-native';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import { Dispatch } from '@redux/store';
import { useReduxState } from '@hooks/useReduxState';
import styles from './styles';
import { themeColors } from '@shared/vars';

const AssetScreen = ({ componentId }: { componentId: string }) => {
  const dispatch = useDispatch<Dispatch>();
  const asset = useReduxState(state => state.assets.selectedAsset);
  const favorites = useReduxState(state => state.favorites.favorites);

  const isFavorite = asset?.id ? favorites?.includes(asset) : false;

  // WIP
  const favorite = () => {
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
      <TouchableOpacity onPress={favorite} style={styles.favoriteButton}>
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
      </View>
    </>
  );
};

export default AssetScreen;
