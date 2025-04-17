import { Dimensions } from "react-native";

export enum FONTS {
  twinkle = "TwinkleStar-Regular",
  Sedgwick = "SedgwickAveDisplay-Regular",
  Lily = "LilyScriptOne-Regular",
}

export const screenHeight = Dimensions.get('screen').height
export const screenWidth = Dimensions.get('screen').width

export enum Colors {
  primary = '#007AFF',
  background = '#fff',
  text = '#222',
  theme = '#CF551F',
  secondary = '#E5EBF5',
  tertiary = '#3C75BE',
  secondary_light = '#F6F7F9',
}

export const formatTime = (timeInMs: number) => {
  const totalSeconds = Math.floor(timeInMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}`;
};
