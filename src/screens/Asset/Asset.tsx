import { View, Text, Button } from 'react-native';
import React from 'react';
import styles from './styles';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@redux/store';

const AssetScreen = ({ componentId }: { componentId: string }) => {
  const dispatch = useDispatch<Dispatch>();
  const goBack = async () => {
    await Navigation.pop(componentId);
  };

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={goBack} />
      <Text>AssetScreen</Text>
    </View>
  );
};

export default AssetScreen;
