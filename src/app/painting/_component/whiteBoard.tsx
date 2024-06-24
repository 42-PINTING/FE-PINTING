'use client';
import { useEffect, useRef } from 'react';

const WhiteBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadFabric = async () => {
      const fabricScript = document.createElement('script');
      fabricScript.src = '/fabric.min.js';
      fabricScript.onload = () => {
        const fabric = (window as any).fabric;
        const canvas = new fabric.Canvas(canvasRef.current);

        // 캔버스를 브라우저 창의 3분의 2 크기로 설정
        const width = (window.innerWidth * 2) / 3;
        const height = (window.innerHeight * 2) / 3;
        canvas.setWidth(width);
        canvas.setHeight(height);
      };
      document.head.appendChild(fabricScript);
    };

    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.style.border = '1px solid black';
    }

    loadFabric();
  }, []);

  return <canvas ref={canvasRef} id='whiteBoard'></canvas>;
};

export default WhiteBoard;
