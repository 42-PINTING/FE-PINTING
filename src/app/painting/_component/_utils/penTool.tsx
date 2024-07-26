'use client';
import { useEffect } from 'react';
import { fabric } from 'fabric';

export const basicPen = (
  canvas: fabric.Canvas,
  brushWidth: number,
  brushColor: string
) => {
  if (!canvas) return;

  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.color = brushColor;
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
  brushColor: string;
  setBrushColor: (color: string) => void;
}

export const PenSettings: React.FC<PenSettingsProps> = ({
  canvas,
  brushWidth,
  setBrushWidth,
  brushColor,
  setBrushColor,
}) => {
  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = brushWidth;
      canvas.freeDrawingBrush.color = brushColor;
    }
  }, [canvas, brushWidth, brushColor]);

  const handleBrushWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBrushWidth(Number(event.target.value));
  };

  const handleBrushColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBrushColor(event.target.value);
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
      <label>색상: </label>
      <input
        type='color'
        value={brushColor}
        onChange={handleBrushColorChange}
      />
    </div>
  );
};
