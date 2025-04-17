import SoundPlayer from 'react-native-sound-player';

export const playSound = (soundName: string, loop = false) => {
    try {
        const soundPath = getSoundPath(soundName);
        SoundPlayer.playAsset(soundPath);
    } catch (e) {
        console.log(`cannot play the sound file`, e);
    }
};

const getSoundPath = (soundName: string) => {
    switch (soundName) {
        case 'ui':
            return require('../assets/sfx/ui.mp3');
        case 'candy_shuffle':
            return require('../assets/sfx/candy_shuffle.mp3');
        case 'candy_clear':
                return require('../assets/sfx/candy_clear.mp3');
        case 'bg':
            return require('../assets/sfx/bg.mp3');
        default:
            throw new Error(`Sound ${soundName} not found`);
    }
};