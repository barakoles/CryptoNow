import { View, Button, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import { Screens } from '@navigation/Screens';

const AssetsScreen = ({ componentId }: { componentId: string }) => {
  const goToAsset = () => {
    Navigation.push(componentId, {
      component: {
        name: Screens.ASSET,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Go to Asset" onPress={goToAsset} />
      <Text>Assets screen</Text>
    </View>
  );
};

export default AssetsScreen;
