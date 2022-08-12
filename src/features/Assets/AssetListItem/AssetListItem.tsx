import { View, Text } from 'react-native';
import React from 'react';
import { Asset } from '@core/assets';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface AssetListItemProps {
  asset: Asset;
  onPress: (payload: Asset) => void;
}

const AssetListItem = (props: AssetListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(props.asset)}>
      <View>
        <Text>{props.asset.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AssetListItem;
