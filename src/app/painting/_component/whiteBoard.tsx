'use client';

import React, { useEffect, useRef } from 'react';

const WhiteBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = '#ffffff'; // 배경색 설정
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);
  return <canvas ref={canvasRef} style={{ border: '1px solid #000' }}></canvas>;
};

export default WhiteBoard;
