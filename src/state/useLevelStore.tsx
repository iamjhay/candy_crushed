import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {mmkvStorage} from './storage';
import {initialLevelData} from '../utils/data';

export interface Level {
  id: number;
  unlocked: boolean;
  completed: boolean;
  highScore: number;
}

interface LevelScore {
  levels: Level[];
  unlockedLevel: (id: number) => void;
  completedLevel: (id: number, collectedCandies: number) => void;
}

export const useLevelScore = create<LevelScore>()(
  persist(
    set => ({
      levels: initialLevelData,
      unlockedLevel: (id: number) => {
        set(state => {
          const updatedLevels = state.levels.map(level => {
            if (level.id === id) {
              return {
                ...level,
                unlocked: true,
              };
            }
            return level;
          });
          return {
            levels: updatedLevels,
          };
        });
      },
      completedLevel: (id: number, collectedCandies: number) => {
        set(state => {
          const updatedLevels = state.levels.map(level => {
            if (level.id === id) {
              return {
                ...level,
                completed: true,
                highScore: Math.max(level.highScore, collectedCandies),
              };
            }
            return level;
          });
          return {
            levels: updatedLevels,
          };
        });
      },
    }),
    {
      name: 'level-storage', // unique name
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
