'use client';
import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const WhiteBoard = () => {
  const fabricRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();

  useEffect(() => {
    if (fabricRef.current) {
      const newCanvas = new fabric.Canvas('canvas', {
        width: 500,
        height: 500,
      });
      setCanvas(newCanvas);
    }
  }, []);

  return (
    <>
      <canvas id='canvas'></canvas>
    </>
  );
};

export default WhiteBoard;
