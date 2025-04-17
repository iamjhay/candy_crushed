import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user_storage',
  encryptionKey: 'some-secret-key',
});

export const mmkvStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    // if (value) {
    //   try {
    //     return JSON.parse(value);
    //   } catch (e) {
    //     return value;
    //   }
    // }
    return value ?? null;
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
};
