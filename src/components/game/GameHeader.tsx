import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native';
import React from 'react';
import {FONTS, formatTime, screenHeight} from '../../utils/Constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RFValue} from 'react-native-responsive-fontsize';

interface GameHeaderProps {
  totalCount: number;
  collectedCandies: number;
  time: any;
}

const GameHeader = ({totalCount, collectedCandies, time}: GameHeaderProps) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image
        style={styles.img}
        source={require('../../assets/icons/hangrope.png')}
      />
      <ImageBackground
        source={require('../../assets/images/lines.jpg')}
        style={styles.lines}>
        <View style={styles.subContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.candiestext}>
              🍭 {collectedCandies} /{' '}
              <Text style={styles.totalCandiesText}>{totalCount}</Text>
            </Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timerText}>⏰ {formatTime(time)}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.15,
  },
  img: {
    width: RFValue(60),
    height: RFValue(80),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
    top: -RFValue(0),
    alignSelf: 'center',
  },
  lines: {
    padding: 5,
    borderRadius: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
    margin: RFValue(10),
    marginTop: -RFValue(10),
  },
  subContainer: {
    backgroundColor: '#EDC1B9',
    padding: RFValue(5),
    borderRadius: RFValue(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2978f',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  candiestext: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(16),
    color: '#3A0E4C',
  },
  totalCandiesText: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(12),
    color: '#3A0E4C',
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2978f',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  timerText: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(14),
    color: '#5B2333',
  },
});

export default GameHeader;
