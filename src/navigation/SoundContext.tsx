/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useContext, createContext} from 'react';
import Video from 'react-native-video';

interface SoundContextProps {
  playSound: (soundName: string, repeat: boolean) => void;
  stopSound: (soundName: string) => void;
}

interface SoundProviderProps {
  children: React.ReactNode;
}

const soundContext = createContext<SoundContextProps | undefined>(undefined);

const soundPaths: {[key: string]: string} = {
  ui: require('../assets/sfx/ui.mp3'),
  candy_shuffle: require('../assets/sfx/candy_shuffle.mp3'),
  candy_clear: require('../assets/sfx/candy_clear.mp3'),
  bg: require('../assets/sfx/bg.mp3'),
  cheer: require('../assets/sfx/cheer.mp3'),
};

const SoundProvider = ({children}: SoundProviderProps) => {
  const [sounds, setSounds] = useState<any[]>([]);

  const playSound = (soundName: string, repeat: boolean) => {
    const soundPath = soundPaths[soundName];
    if (soundPath) {
      setSounds(prevSound => {
        const updatedSound = prevSound?.filter(sound => sound.id !== soundName);
        return [
          ...updatedSound,
          {
            id: soundName,
            path: soundPath,
            repeat,
          },
        ];
      });
    } else {
      console.log(`Sound ${soundName} not found`);
    }
  };

  const stopSound = (soundName: string) => {
    setSounds(prevSounds => prevSounds.filter(sound => sound.id !== soundName));
  };

  return (
    <soundContext.Provider value={{playSound, stopSound}}>
      {children}
      {sounds.map(sound => (
        <Video
          key={sound.id}
          source={sound.path}
          paused={false}
          repeat={sound.repeat}
          volume={0.4}
          muted={false}
          resizeMode="cover"
          style={{position: 'absolute', width: 0, height: 0}}
        />
      ))}
    </soundContext.Provider>
  );
};

const useSound = (): SoundContextProps => {
  const context = useContext(soundContext);
  if (!context) {
    throw new Error('useSound must be used with a SoundProvider');
  } else {
    return context;
  }
};

export {useSound, SoundProvider};
