import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../../utils/Constants';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.twinklestargames.com')}>
        <Text style={styles.text}>Made with 💖</Text>
        <Text style={styles.text2}>by - John Edet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.twinkle,
    fontSize: RFValue(12),
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
  text2: {
    fontFamily: FONTS.twinkle,
    fontSize: RFValue(16),
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
});

export default Footer;
