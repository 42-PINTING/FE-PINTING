'use client';
import React, { useEffect, useRef } from 'react';

const WhiteBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');
    if (context) {
      canvas.width = window.innerWidth * (3 / 5);
      canvas.height = window.innerHeight * (3 / 5);
      context.fillStyle = '#ffffff'; // 배경색 설정
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      resizeCanvas(canvas);
      const handleResize = () => resizeCanvas(canvas);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return <canvas ref={canvasRef} style={{ border: '1px solid #000' }}></canvas>;
};

export default WhiteBoard;
