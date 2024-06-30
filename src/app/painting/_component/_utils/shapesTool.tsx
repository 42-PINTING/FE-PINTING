import { fabric } from 'fabric';

const startDrawingShape = (
  canvas: fabric.Canvas,
  createShape: (pointer: fabric.Point) => fabric.Object
) => {
  let isDrawing = false;
  let shape: fabric.Object | null = null;

  const startDrawing = (opt: fabric.IEvent) => {
    const pointer = canvas.getPointer(opt.e) as fabric.Point;
    isDrawing = true;
    shape = createShape(pointer);
    canvas.add(shape);
  };

  const continueDrawing = (opt: fabric.IEvent) => {
    if (!isDrawing || !shape) return;
    const pointer = canvas.getPointer(opt.e) as fabric.Point;
    const width = Math.abs(pointer.x - (shape.left || 0));
    const height = Math.abs(pointer.y - (shape.top || 0));

    if (shape instanceof fabric.Rect || shape instanceof fabric.Triangle) {
      shape.set({ width, height });
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

export const ShapeTool = {
  enableRectangle: (canvas: fabric.Canvas) => {
    return startDrawingShape(canvas, (pointer) => {
      return new fabric.Rect({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
        selectable: true,
      });
    });
  },
  enableTriangle: (canvas: fabric.Canvas) => {
    return startDrawingShape(canvas, (pointer) => {
      return new fabric.Triangle({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
        selectable: true,
      });
    });
  },
};
