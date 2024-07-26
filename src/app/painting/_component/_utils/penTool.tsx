'use client';
import { useEffect } from 'react';
import { fabric } from 'fabric';

export const basicPen = (canvas: fabric.Canvas, brushWidth: number) => {
  if (!canvas) return;

  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.width = brushWidth;

  const removeListeners = () => {
    canvas.isDrawingMode = false;
  };

  return removeListeners;
};
interface PenSettingsProps {
  canvas: fabric.Canvas | null;
  brushWidth: number;
  setBrushWidth: (width: number) => void;
}

export const PenSettings: React.FC<PenSettingsProps> = ({
  canvas,
  brushWidth,
  setBrushWidth,
}) => {
  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = brushWidth;
    }
  }, [canvas, brushWidth]);

  const handleBrushWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBrushWidth(Number(event.target.value));
  };

  return (
    <div>
      <label>펜 굵기: {brushWidth}</label>
      <input
        type='range'
        min='1'
        max='10'
        value={brushWidth}
        onChange={handleBrushWidthChange}
      />
    </div>
  );
};
