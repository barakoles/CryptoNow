import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Asset } from '@core/assets';
import styles from './styles';
import ArrowIcon from 'react-native-vector-icons/FontAwesome5';
import { themeColors } from '@shared/vars';
interface AssetListItemProps {
  asset: Asset;
  onPress: (payload: Asset) => void;
}

const AssetListItem = (props: AssetListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.onPress(props.asset)}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.asset.name}</Text>
        <Text style={styles.subTitle}>{props.asset.profile.tagline}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <ArrowIcon
          name={'arrow-right'}
          size={15}
          color={themeColors.main}
          style={styles.arrow}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AssetListItem;
