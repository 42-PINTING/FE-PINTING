import { atom } from 'recoil';

export const historyState = atom<fabric.Object[]>({
  key: 'historyState',
  default: [],
});

export const historyIndexState = atom<number>({
  key: 'historyIndexState',
  default: 0,
});
