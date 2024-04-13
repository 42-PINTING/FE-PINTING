'use client';
import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';

export default function WhiteBoard() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeTool, setActiveTool] = useState('select');

  useEffect(() => {
    if (!canvasRef.current || !canvas) return;

    switch (activeTool) {
      case 'select':
        handleSelectTool();
        break;

      case 'pen':
        handlePenTool();
        break;
    }
  }, [activeTool]);

  const handleSelectTool = () => {
    canvas.isDrawingMode = false;
  };
  const handlePenTool = () => {
    canvas.freeDrawingBrush.width = 10;
    canvas.isDrawingMode = true;
  };

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 400,
    });
    setCanvas(newCanvas);
    return () => {
      newCanvas.dispose();
    };
  }, []);
  return (
    <>
      <canvas style={{ border: '1px solid red' }} ref={canvasRef} />
      <button
        style={{ width: '48px', height: '48px', border: '1px solid black' }}
        onClick={() => setActiveTool('select')}
        disabled={activeTool === 'select'}
      >
        선택
      </button>
      <button
        style={{ width: '48px', height: '48px', border: '1px solid black' }}
        onClick={() => setActiveTool('pen')}
        disabled={activeTool === 'pen'}
      >
        펜
      </button>
    </>
  );
}
