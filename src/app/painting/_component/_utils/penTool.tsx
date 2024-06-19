'use client';

interface DrawOptions {
  context: CanvasRenderingContext2D;
  prevPos: { x: number; y: number };
  currPos: { x: number; y: number };
}

const draw = ({ context, prevPos, currPos }: DrawOptions) => {
  if (!context) return;

  context.beginPath();
  context.moveTo(prevPos.x, prevPos.y);
  context.lineTo(currPos.x, currPos.y);
  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.stroke();
  context.closePath();
};

export const basicPen = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d');

  if (!context) return;

  let drawing = false;
  let prevPos = { x: 0, y: 0 };

  const startDrawing = (event: MouseEvent) => {
    drawing = true;
    prevPos = { x: event.offsetX, y: event.offsetY };
  };

  const stopDrawing = () => {
    drawing = false;
  };

  const drawLine = (event: MouseEvent) => {
    if (!drawing) return undefined;

    const currPos = { x: event.offsetX, y: event.offsetY };
    draw({ context, prevPos, currPos });
    prevPos = currPos;
  };

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', drawLine);

  return () => {
    canvas.removeEventListener('mousedown', startDrawing);
    canvas.removeEventListener('mouseup', stopDrawing);
    canvas.removeEventListener('mousemove', drawLine);
  };
};
