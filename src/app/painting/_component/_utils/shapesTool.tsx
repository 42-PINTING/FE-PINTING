import { fabric } from 'fabric';

const startDrawingShape = (
  canvas: fabric.Canvas,
  createShape: (
    pointer: fabric.Point,
    strokeColor: string,
    strokeWidth: number
  ) => fabric.Object,
  strokeColor: string,
  strokeWidth: number
) => {
  let isDrawing = false;
  let shape: fabric.Object | null = null;

  const startDrawing = (opt: fabric.IEvent) => {
    const pointer = canvas.getPointer(opt.e) as fabric.Point;
    isDrawing = true;
    shape = createShape(pointer, strokeColor, strokeWidth);
    canvas.add(shape);
  };

  const continueDrawing = (opt: fabric.IEvent) => {
    if (!isDrawing || !shape) return;
    const pointer = canvas.getPointer(opt.e) as fabric.Point;
    const width = Math.abs(pointer.x - (shape.left || 0));
    const height = Math.abs(pointer.y - (shape.top || 0));

    if (shape instanceof fabric.Rect || shape instanceof fabric.Triangle) {
      shape.set({ width, height });
    } else if (shape instanceof fabric.Circle) {
      const radius = Math.sqrt(width * width + height * height) / 2;
      shape.set({ radius });
    }
    canvas.requestRenderAll();
  };

  const finishDrawing = () => {
    isDrawing = false;
  };

  canvas.on('mouse:down', startDrawing);
  canvas.on('mouse:move', continueDrawing);
  canvas.on('mouse:up', finishDrawing);

  return () => {
    canvas.off('mouse:down', startDrawing);
    canvas.off('mouse:move', continueDrawing);
    canvas.off('mouse:up', finishDrawing);
  };
};

interface ShapeSettingsProps {
  strokeColor: string;
  setStrokeColor: (color: string) => void;
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
}

export const ShapeSettings: React.FC<ShapeSettingsProps> = ({
  strokeColor,
  setStrokeColor,
  strokeWidth,
  setStrokeWidth,
}) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(event.target.value);
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(Number(event.target.value));
  };

  return (
    <div>
      <label>테두리 색상: </label>
      <input type='color' value={strokeColor} onChange={handleColorChange} />
      <label>테두리 굵기: {strokeWidth}</label>
      <input
        type='range'
        min='1'
        max='10'
        value={strokeWidth}
        onChange={handleWidthChange}
      />
    </div>
  );
};

export const ShapeTool = {
  enableRectangle: (
    canvas: fabric.Canvas,
    strokeColor: string,
    strokeWidth: number
  ) => {
    return startDrawingShape(
      canvas,
      (pointer) => {
        return new fabric.Rect({
          left: pointer.x,
          top: pointer.y,
          width: 0,
          height: 0,
          fill: 'transparent',
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          selectable: true,
        });
      },
      strokeColor,
      strokeWidth
    );
  },
  enableTriangle: (
    canvas: fabric.Canvas,
    strokeColor: string,
    strokeWidth: number
  ) => {
    return startDrawingShape(
      canvas,
      (pointer) => {
        return new fabric.Triangle({
          left: pointer.x,
          top: pointer.y,
          width: 0,
          height: 0,
          fill: 'transparent',
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          selectable: true,
        });
      },
      strokeColor,
      strokeWidth
    );
  },
  enableCircle: (
    canvas: fabric.Canvas,
    strokeColor: string,
    strokeWidth: number
  ) => {
    return startDrawingShape(
      canvas,
      (pointer) => {
        return new fabric.Circle({
          left: pointer.x,
          top: pointer.y,
          radius: 0,
          fill: 'transparent',
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          selectable: true,
        });
      },
      strokeColor,
      strokeWidth
    );
  },
};
