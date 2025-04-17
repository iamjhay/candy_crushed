import {StyleSheet} from 'react-native';
import {FONTS} from '../utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

export const levelStyles = StyleSheet.create({
  flex2: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -40,
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  volumeIcon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  levelContainer: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
    margin: 15,
  },
  subLevelContainer: {
    flex: 1,
    backgroundColor: '#EDC1B9',
    borderRadius: 10,
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  doddle: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    opacity: 0.7,
  },
  levelItem: {
    width: '48%',
    height: 120,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(16),
    color: '#333',
    textAlign: 'center',
  },
  highScoreText: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(10),
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(14),
    paddingHorizontal: 10,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
  comingSoonContainer: {
    padding: 20,
  },
  comingSoonText: {
    fontFamily: FONTS.Lily,
    fontSize: RFValue(14),
    color: 'red',
    opacity: 0.5,
    textAlign: 'center',
  },
});
