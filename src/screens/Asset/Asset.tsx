import { View, Text, Button } from 'react-native';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';

import { Dispatch } from '@redux/store';
import { useReduxState } from '@hooks/useReduxState';

import styles from './styles';

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
    <View style={styles.container}>
      <Button title="Go Back" onPress={goBack} />
      <Button title={`favorite: ${isFavorite}`} onPress={favorite} />
      <Text>{asset?.name}</Text>
    </View>
  );
};

export default AssetScreen;
