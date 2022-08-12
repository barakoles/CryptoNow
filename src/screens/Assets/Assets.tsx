/* eslint-disable react-hooks/exhaustive-deps */
import { View, ActivityIndicator } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { FlatList } from 'react-native-gesture-handler';

import { Screens } from '@navigation/Screens';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@redux/store';
import { useReduxState } from '@hooks/useReduxState';
import { Asset } from '@core/assets';
import AssetListItem from '@features/Assets/AssetListItem/AssetListItem';

import styles from './styles';

const AssetsScreen = ({ componentId }: { componentId: string }) => {
  const dispatch = useDispatch<Dispatch>();
  const isLoading = useReduxState(state => state.loading.effects.assets);

  const [assets, setAssets] = React.useState<Asset[]>([]);
  const goToAsset = (payload: Asset) => {
    dispatch.assets.selectAsset(payload);
    Navigation.push(componentId, {
      component: {
        name: Screens.ASSET,
      },
    });
  };

  const getAssets = useCallback(async () => {
    const res = await dispatch.assets.getAssets('');
    // Append results to assets
    setAssets([...assets, ...res]);
  }, [dispatch.assets, assets]);

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={assets}
        renderItem={({ item }) => (
          <AssetListItem asset={item} onPress={goToAsset} />
        )}
        keyExtractor={item => item.id}
        onEndReached={getAssets}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => {
          if (!isLoading) return null;
          return <ActivityIndicator />;
        }}
      />
    </View>
  );
};

export default AssetsScreen;
