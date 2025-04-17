/* eslint-disable @typescript-eslint/no-unused-vars */
type Level = (number | null)[][];

interface GameLevels {
  [key: string]: {
    grid: Level;
    pass: number;
    time: number;
  };
}
