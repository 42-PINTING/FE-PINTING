'use client';
import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { SwitchTool } from './_utils/switchTool';
import { useRecoilState } from 'recoil';
import { toolState } from '../_atoms/penAtoms';

const WhiteBoard = () => {
  const fabricRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [tool, setTool] = useRecoilState(toolState);

  const setCanvasSize = (canvas: fabric.Canvas) => {
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

      newCanvas.on('mouse:wheel', (opt) => {
        const delta = opt.e.deltaY;
        let zoom = newCanvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        newCanvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
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

  const handleToolChange = (selectedTool: string) => {
    setTool(selectedTool);
  };

  return (
    <>
      <SwitchTool
        handleToolChange={setTool}
        tool={tool}
        canvas={canvasRef.current}
      />
      <canvas
        id='canvas'
        ref={fabricRef}
        style={{ border: '1px solid black' }}
      ></canvas>
    </>
  );
};

export default WhiteBoard;
