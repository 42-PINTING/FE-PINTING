'use client';

import React, { useEffect, useRef } from 'react';

const WhiteBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const resizeCanvas = (canvas) => {
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth * (3 / 5);
    canvas.height = window.innerHeight * (3 / 5);
    context.fillStyle = '#ffffff'; // 배경색 설정
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      resizeCanvas(canvas);
      window.addEventListener('resize', () => resizeCanvas(canvas));
    }
    return () => {
      window.removeEventListener('resize', () => resizeCanvas(canvas));
    };
  }, []);

  return <canvas ref={canvasRef} style={{ border: '1px solid #000' }}></canvas>;
};

export default WhiteBoard;
