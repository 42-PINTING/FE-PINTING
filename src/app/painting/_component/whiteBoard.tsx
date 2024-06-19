'use client';
import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { toolState } from '@/app/painting/_atoms/penAtoms';
import { SwitchTool } from './_utils/switchTool';

const WhiteBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tool, setTool] = useRecoilState(toolState);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.cursor = tool === 'pen' ? 'crosshair' : 'default';
    }
  }, [tool]);

  const handleToolChange = (selectedTool: string) => {
    setTool(selectedTool);
  };

  return (
    <>
      <SwitchTool
        handleToolChange={handleToolChange}
        tool={tool}
        canvas={canvasRef.current}
      />
      <canvas ref={canvasRef} style={{ border: '1px solid #000' }}></canvas>
    </>
  );
};

export default WhiteBoard;
