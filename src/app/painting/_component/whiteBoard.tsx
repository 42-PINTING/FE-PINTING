'use client';
import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const WhiteBoard = () => {
  const fabricRef = useRef(null);
  const canvasRef = useRef(null);

  const setCanvasSize = (canvas) => {
    const width = (window.innerWidth * 2) / 3;
    const height = (window.innerHeight * 2) / 3;
    canvas.setWidth(width);
    canvas.setHeight(height);
  };
  useEffect(() => {
    if (fabricRef.current && !canvasRef.current) {
      const newCanvas = new fabric.Canvas(fabricRef.current);
      canvasRef.current = newCanvas;
      setCanvasSize(newCanvas);
    }

    const handleResize = () => {
      if (canvasRef.current) {
        setCanvasSize(canvasRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        id='canvas'
        ref={fabricRef}
        style={{ border: '1px solid black' }}
      ></canvas>
    </>
  );
};

export default WhiteBoard;
