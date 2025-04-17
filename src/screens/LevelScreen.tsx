import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {levelStyles} from '../styles/levelStyles';
import {commonStyles} from '../styles/commonStyles';
import ScalePress from '../components/ui/ScalePress';
import {goBack, navigate} from '../utils/NavigationUtil';
import {useLevelScore} from '../state/useLevelStore';
import {gameLevels} from '../utils/data';
import {useSound} from '../navigation/SoundContext';

const LevelScreen = () => {
  const {levels} = useLevelScore();
  const {stopSound, playSound} = useSound();

  const [vol, setVol] = React.useState(true);

  // const toggleVolume = () => {
  //   if (vol) {
  //     stopSound('bg');
  //     setVol(false);
  //   } else {
  //     playSound('bg', true);
  //     setVol(true);
  //   }
  // };

  const levelPressHandler = (id: string) => {
    const levelKey = `level${id}` as keyof GameLevels;
    const level = gameLevels[levelKey];
    navigate('GameScreen', {
      level: {
        ...level,
        id: id,
      },
    });
  };

  const renderItems = ({item}: any) => {
    const opacity = item?.unlocked ? 1 : 0.5;
    const emoji = item?.completed ? '✅' : item?.unlocked ? '⛺️' : '🔒';

    return (
      <ScalePress
        style={levelStyles.levelItem}
        onPress={() => {
          if (item?.unlocked) {
            levelPressHandler(item?.id);
          }
        }}>
        <View style={{opacity}}>
          <Text style={levelStyles.levelText}>{emoji}</Text>
          <Text style={levelStyles.levelText}>Level {item?.id}</Text>
          {item?.highScore > 0 && (
            <Text style={levelStyles.highScoreText}>HS: {item.highScore}</Text>
          )}
        </View>
      </ScalePress>
    );
  };

  return (
    <ImageBackground
      style={commonStyles.container}
      source={require('../assets/images/forest.jpeg')}>
      <SafeAreaView />
      <View style={levelStyles.flex1}>
        <View style={levelStyles.headerContainer}>
          <ScalePress onPress={() => goBack()}>
            <Image
              style={levelStyles.backIcon}
              source={require('../assets/icons/back.png')}
            />
          </ScalePress>
          {vol ? (
            <ScalePress
              onPress={() => {
                stopSound('bg');
                setVol(false);
                // navigate('HomeScreen');
              }}>
              <Image
                style={levelStyles.volumeIcon}
                source={require('../assets/icons/volume-on.png')}
              />
            </ScalePress>
          ) : (
            <ScalePress
              onPress={() => {
                playSound('bg', false);
                setVol(true);
                // navigate('HomeScreen');
              }}>
              <Image
                style={levelStyles.volumeIcon}
                source={require('../assets/icons/volume-off.png')}
              />
            </ScalePress>
          )}
        </View>

        <ImageBackground
          source={require('../assets/images/lines.jpg')}
          style={levelStyles.levelContainer}>
          <View style={levelStyles.subLevelContainer}>
            <FlatList
              data={levels}
              renderItem={renderItems}
              numColumns={2}
              columnWrapperStyle={levelStyles.columnWrapper}
              showsVerticalScrollIndicator={true}
              keyExtractor={item => item.id.toString()}
              ListFooterComponent={
                <View style={levelStyles.comingSoonContainer}>
                  <Image
                    source={require('../assets/images/doddle.png')}
                    style={levelStyles.doddle}
                  />
                  <Text style={levelStyles.comingSoonText}>
                    Coming Soon! Developers Cooking..
                  </Text>
                </View>
              }
            />
          </View>
        </ImageBackground>

        <View style={levelStyles.flex2}>
          <Text style={levelStyles.text}>
            Rule: Collect the minimum number of candies before time runs out.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LevelScreen;
