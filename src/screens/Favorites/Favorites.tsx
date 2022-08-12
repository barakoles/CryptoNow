import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { FlatList } from 'react-native-gesture-handler';

import AssetListItem from '@features/Assets/AssetListItem/AssetListItem';
import { useReduxState } from '@hooks/useReduxState';
import { Dispatch } from '@redux/store';
import { Asset } from '@core/assets';
import { Screens } from '@navigation/Screens';

import styles from './styles';

const FavoritesScreen = ({ componentId }: { componentId: string }) => {
  const favorites = useReduxState(state => state.favorites.favorites);
  const dispatch = useDispatch<Dispatch>();

  const goToAsset = (payload: Asset) => {
    dispatch.assets.selectAsset(payload);
    Navigation.push(componentId, {
      component: {
        name: Screens.ASSET,
      },
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={favorites}
        renderItem={({ item }) => (
          <AssetListItem asset={item} onPress={goToAsset} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FavoritesScreen;
