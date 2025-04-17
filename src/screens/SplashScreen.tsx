import {Image, ImageBackground} from 'react-native';
import React, {FC, useEffect} from 'react';
import {commonStyles} from '../styles/commonStyles';
import {resetAndNavigate} from '../utils/NavigationUtil';

const SplashScreen: FC = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('HomeScreen');
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={commonStyles.container}>
      <Image
        source={require('../assets/text/logo.png')}
        style={commonStyles.img}
      />
    </ImageBackground>
  );
};

export default SplashScreen;
