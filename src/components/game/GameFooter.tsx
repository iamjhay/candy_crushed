import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {screenHeight} from '../../utils/Constants';
import ScalePress from '../ui/ScalePress';
import {goBack} from '../../utils/NavigationUtil';

const GameFooter = () => {
  return (
    <View style={styles.flex1}>
      <ScalePress onPress={() => goBack()}>
        <Image
          style={styles.closeIcon}
          source={require('../../assets/icons/close.png')}
        />
      </ScalePress>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    height: screenHeight * 0.1,
    width: '100%',
    paddingHorizontal: 10,
  },
  closeIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});

export default GameFooter;
