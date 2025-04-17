import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../utils/Constants';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.4,
    resizeMode: 'contain',
  },
  simpleContainer: {
    flex: 1,
  },
});
