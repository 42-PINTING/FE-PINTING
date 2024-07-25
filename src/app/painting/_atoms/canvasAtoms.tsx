import { atom } from 'recoil';

export const historyState = atom<fabric.Object[] | undefined>({
  key: 'historyState',
  default: [],
  dangerouslyAllowMutability: true,
});

export const historyIsLocked = atom<boolean>({
  key: 'historyIsLocked',
  default: false,
});
