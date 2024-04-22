// TriangleTool.js
import { fabric } from 'fabric';
import React, { useEffect } from 'react';

const TriangleTool = ({ canvas }) => {
  useEffect(() => {
    let isDrawing = false;
    let originalPosition = { x: 0, y: 0 };
    let triangle = null;

    const startDrawing = (o) => {
      isDrawing = true;
      originalPosition = canvas.getPointer(o.e);

      triangle = new fabric.Triangle({
        width: 1,
        height: 1,
        fill: 'transparent',
        stroke: 'blue',
        strokeWidth: 2,
        left: originalPosition.x,
        top: originalPosition.y,
        selectable: false,
      });

      canvas.add(triangle);
    };

    const drawTriangle = (o) => {
      if (!isDrawing) return;

      const pointer = canvas.getPointer(o.e);
      const width = pointer.x - originalPosition.x;
      const height = pointer.y - originalPosition.y;

      triangle.set({ width: Math.abs(width), height: Math.abs(height) });
      triangle.set({
        left: Math.min(pointer.x, originalPosition.x),
        top: Math.min(pointer.y, originalPosition.y),
      });
      canvas.renderAll();
    };

    const endDrawing = () => {
      isDrawing = false;
    };

    if (canvas) {
      canvas.on('mouse:down', startDrawing);
      canvas.on('mouse:move', drawTriangle);
      canvas.on('mouse:up', endDrawing);
    }

    return () => {
      if (canvas) {
        canvas.off('mouse:down', startDrawing);
        canvas.off('mouse:move', drawTriangle);
        canvas.off('mouse:up', endDrawing);
      }
    };
  }, [canvas]);

  return <button>삼각형 도구</button>;
};

export default TriangleTool;
