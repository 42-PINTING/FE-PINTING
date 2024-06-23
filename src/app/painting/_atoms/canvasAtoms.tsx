import { atom } from 'recoil';

export const canvasHistoryState = atom<fabric.Object[][]>({
  key: 'canvasHistoryState',
  default: [],
});

export const canvasIndexState = atom<number>({
  key: 'canvasIndexState',
  default: -1,
});

export const undoRedoState = atom<boolean>({
  key: 'undoRedoState',
  default: true,
});
