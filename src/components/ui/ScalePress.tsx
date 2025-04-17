/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, TouchableOpacity, ViewStyle} from 'react-native';
import {useSound} from '../../navigation/SoundContext';

interface ScalePressProp {
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScalePress: React.FC<ScalePressProp> = ({onPress, children, style}) => {
  const {playSound} = useSound();

  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    playSound('ui', false);
    Animated.spring(scaleValue, {
      toValue: 0.92,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    playSound('ui', false);
    Animated.spring(scaleValue, {
      toValue: 0.92,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{...style}}>
      <Animated.View
        style={[{transform: [{scale: scaleValue}], width: '100%'}]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ScalePress;
