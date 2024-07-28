import { useEffect } from 'react';
import { fabric } from 'fabric';

export const enableLineTool = (
  canvas: fabric.Canvas,
  strokeWidth: number,
  strokeColor: string
) => {
  let line: fabric.Line | null = null;
  let isDrawing = false;

  const startDrawing = (options: fabric.IEvent) => {
    isDrawing = true;
    const pointer = canvas.getPointer(options.e) as fabric.Point;
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    line = new fabric.Line(points, {
      strokeWidth,
      stroke: strokeColor,
      fill: strokeColor,
      originX: 'center',
      originY: 'center',
    });
    canvas.add(line);
  };

  const drawing = (options: fabric.IEvent) => {
    if (!isDrawing || !line) return;

    const pointer = canvas.getPointer(options.e) as fabric.Point;
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
  strokeColor: string;
  setStrokeColor: (color: string) => void;
}

export const LineSettings: React.FC<LineSettingsProps> = ({
  canvas,
  strokeWidth,
  setStrokeWidth,
  strokeColor,
  setStrokeColor,
}) => {
  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = strokeWidth;
      canvas.freeDrawingBrush.color = strokeColor;
    }
  }, [canvas, strokeWidth, strokeColor]);

  const handleStrokeWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStrokeWidth(Number(event.target.value));
  };

  const handleStrokeColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStrokeColor(event.target.value);
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
      <label>색상: </label>
      <input
        type='color'
        value={strokeColor}
        onChange={handleStrokeColorChange}
      />
    </div>
  );
};
