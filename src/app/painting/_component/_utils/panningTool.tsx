'use client';
import { fabric } from 'fabric';

export const enablePanning = (canvas: fabric.Canvas) => {
  let isPanning = false;
  let lastPosX = 0;
  let lastPosY = 0;

  const onMouseDown = (opt: fabric.IEvent) => {
    const e = opt.e as MouseEvent;
    if (e.altKey) {
      isPanning = true;
      lastPosX = e.clientX;
      lastPosY = e.clientY;
      canvas.selection = false;
    }
  };

  const onMouseMove = (opt: fabric.IEvent) => {
    if (isPanning) {
      const e = opt.e as MouseEvent;
      const vpt = canvas.viewportTransform!;
      vpt[4] += e.clientX - lastPosX;
      vpt[5] += e.clientY - lastPosY;
      canvas.requestRenderAll();
      lastPosX = e.clientX;
      lastPosY = e.clientY;
    }
  };

  const onMouseUp = () => {
    isPanning = false;
    canvas.selection = true;
  };

  canvas.on('mouse:down', onMouseDown);
  canvas.on('mouse:move', onMouseMove);
  canvas.on('mouse:up', onMouseUp);

  return () => {
    canvas.off('mouse:down', onMouseDown);
    canvas.off('mouse:move', onMouseMove);
    canvas.off('mouse:up', onMouseUp);
  };
};
