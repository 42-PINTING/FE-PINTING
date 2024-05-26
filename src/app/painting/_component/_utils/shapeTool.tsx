import { fabric } from 'fabric';

const createShapeTool = (
  canvas: fabric.Canvas,
  createShape: (x: number, y: number) => fabric.Object
) => {
  let isDrawing = false;
  let shape: fabric.Object | null = null;

  const handleMouseDown = (event: fabric.IEvent) => {
    isDrawing = true;
    const pointer = canvas.getPointer(event.e);
    const { x, y } = pointer;

    shape = createShape(x, y);
    shape.set({ selectable: false, evented: false });
    canvas.add(shape);
  };

  const handleMouseMove = (event: fabric.IEvent) => {
    if (!isDrawing || !shape) return;

    const pointer = canvas.getPointer(event.e);
    const { x, y } = pointer;

    const width = Math.abs(x - (shape?.left ?? 0));
    const height = Math.abs(y - (shape?.top ?? 0));
    const left = x < (shape?.left ?? 0) ? x : shape?.left ?? 0;
    const top = y < (shape?.top ?? 0) ? y : shape?.top ?? 0;

    shape.set({ width, height, left, top });
    canvas.renderAll();
  };

  const handleMouseUp = () => {
    isDrawing = false;
    if (shape) {
      shape.set({ selectable: true, evented: true });
      canvas.setActiveObject(shape);
      canvas.renderAll();
    }
  };

  canvas.on('mouse:down', handleMouseDown);
  canvas.on('mouse:move', handleMouseMove);
  canvas.on('mouse:up', handleMouseUp);

  return () => {
    canvas.off('mouse:down', handleMouseDown);
    canvas.off('mouse:move', handleMouseMove);
    canvas.off('mouse:up', handleMouseUp);
  };
};

export const triangleTool = (canvas: fabric.Canvas) => {
  return createShapeTool(
    canvas,
    (x, y) =>
      new fabric.Triangle({
        left: x,
        top: y,
        width: 0,
        height: 0,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
      })
  );
};

export const rectangleTool = (canvas: fabric.Canvas) => {
  return createShapeTool(
    canvas,
    (x, y) =>
      new fabric.Rect({
        left: x,
        top: y,
        width: 0,
        height: 0,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
      })
  );
};
