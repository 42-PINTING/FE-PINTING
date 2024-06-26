'use client';
import { fabric } from 'fabric';

export const basicPen = (canvas: fabric.Canvas) => {
  if (!canvas) return;

  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.color = 'black';
  canvas.freeDrawingBrush.width = 2;

  const removeListeners = () => {
    canvas.isDrawingMode = false;
  };

  return removeListeners;
};
