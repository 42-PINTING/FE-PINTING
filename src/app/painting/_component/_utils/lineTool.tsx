import { useEffect } from 'react';
import { fabric } from 'fabric';

export const enableLineTool = (canvas: fabric.Canvas, strokeWidth: number) => {
  let line: fabric.Line | null = null;
  let isDrawing = false;

  const startDrawing = (options: fabric.IEvent<MouseEvent>) => {
    isDrawing = true;
    const pointer = canvas.getPointer(options.e);
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    line = new fabric.Line(points, {
      strokeWidth,
      stroke: 'black',
      fill: 'black',
      originX: 'center',
      originY: 'center',
    });
    canvas.add(line);
  };

  const drawing = (options: fabric.IEvent<MouseEvent>) => {
    if (!isDrawing || !line) return;

    const pointer = canvas.getPointer(options.e);
    line.set({ x2: pointer.x, y2: pointer.y });
    canvas.requestRenderAll();
  };

  const finishDrawing = () => {
    isDrawing = false;
    line = null;
  };

  canvas.on('mouse:down', startDrawing);
  canvas.on('mouse:move', drawing);
  canvas.on('mouse:up', finishDrawing);

  return () => {
    canvas.off('mouse:down', startDrawing);
    canvas.off('mouse:move', drawing);
    canvas.off('mouse:up', finishDrawing);
  };
};

interface LineSettingsProps {
  canvas: fabric.Canvas | null;
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
}

export const LineSettings: React.FC<LineSettingsProps> = ({
  canvas,
  strokeWidth,
  setStrokeWidth,
}) => {
  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = strokeWidth;
    }
  }, [canvas, strokeWidth]);

  const handleStrokeWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStrokeWidth(Number(event.target.value));
  };

  return (
    <div>
      <label>선 굵기: {strokeWidth}</label>
      <input
        type='range'
        min='1'
        max='10'
        value={strokeWidth}
        onChange={handleStrokeWidthChange}
      />
    </div>
  );
};
