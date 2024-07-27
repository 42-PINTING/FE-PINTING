import { fabric } from 'fabric';

export const enableLineTool = (canvas: fabric.Canvas) => {
  let line: fabric.Line | null = null;
  let isDrawing = false;

  const startDrawing = (options: fabric.IEvent) => {
    isDrawing = true;
    const pointer = canvas.getPointer(options.e) as fabric.Point;
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    line = new fabric.Line(points, {
      strokeWidth: 2,
      fill: 'black',
      stroke: 'black',
      originX: 'center',
      originY: 'center',
    });
    canvas.add(line);
  };

  const drawing = (options: fabric.IEvent) => {
    if (!isDrawing || !line) return;

    const pointer = canvas.getPointer(options.e) as fabric.Point;
    line.set({
      x2: pointer.x,
      y2: pointer.y,
    });
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
