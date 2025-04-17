/* eslint-disable react/self-closing-comp */
import {Image, ImageBackground, StyleSheet} from 'react-native';
import React, {FC, useEffect} from 'react';
import {commonStyles} from '../styles/commonStyles';
import {useIsFocused} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {screenHeight, screenWidth} from '../utils/Constants';
import {useSound} from '../navigation/SoundContext';
import LottieView from 'lottie-react-native';
import ScalePress from '../components/ui/ScalePress';
import {navigate} from '../utils/NavigationUtil';
import Footer from '../components/ui/Footer';

const HomeScreen: FC = () => {
  const {playSound} = useSound();
  const isFocused = useIsFocused();
  const translateY = useSharedValue(-200);

  useEffect(() => {
    if (isFocused) {
      playSound('bg', true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 3000,
    });
  }, [isFocused, translateY]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <ImageBackground
      source={require('../assets/images/b2.png')}
      style={commonStyles.container}>
      <Animated.Image
        source={require('../assets/images/banner.png')}
        style={[styles.img, animatedStyles]}
      />
      <LottieView
        source={require('../assets/animations/bird.json')}
        speed={1}
        autoPlay
        loop
        hardwareAccelerationAndroid
        style={styles.lottieView}
      />
      <ScalePress
        style={styles.playButtonContainer}
        onPress={() => navigate('LevelScreen')}>
        <Image
          source={require('../assets/icons/play.png')}
          style={styles.playButton}
        />
      </ScalePress>
      <Footer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    width: screenWidth,
    height: screenWidth * 0.8,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
  },
  lottieView: {
    width: 200,
    height: 200,
    position: 'absolute',
    right: -20,
    top: '30%',
    transform: [{scaleX: -1}],
  },
  playButton: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.2,
    resizeMode: 'contain',
  },
  playButtonContainer: {
    marginTop: screenHeight * 0.4,
  },
});

export default HomeScreen;
