'use client';
import { fabric } from 'fabric';

export const enableSelection = (canvas) => {
  if (!canvas) return;

  // 선택 기능 활성화
  console.log('enable');
  canvas.selection = true;
  canvas.forEachObject((obj) => {
    obj.selectable = true;
  });

  const removeListeners = () => {
    disableSelection(canvas);
  };

  return removeListeners;
};

export const disableSelection = (canvas) => {
  if (!canvas) return;

  canvas.selection = false;
  canvas.forEachObject((obj) => {
    obj.selectable = false;
  });
};
