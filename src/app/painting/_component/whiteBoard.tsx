'use client';
import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import { useCanvasPanning } from '../_hooks/useCanvasPanning';
import TriangleTool from './triangleTool';

export default function WhiteBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [activeTool, setActiveTool] = useState('pen');

  const [initialCanvasSize, setInitialCanvasSize] = useState({
    width: 1000,
    height: 500,
  });
  useCanvasPanning(canvas, activeTool);
  useEffect(() => {
    if (!canvasRef.current || !canvas) return;

    switch (activeTool) {
      case 'select':
        handleSelectTool();
        break;

      case 'pen':
        handlePenTool();
        break;

      case 'move':
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

  // useEffect(() => {
  //   const newCanvas = new fabric.Canvas(canvasRef.current, {
  //     width: 1000,
  //     height: 500,
  //   });
  //   setCanvas(newCanvas);
  //   newCanvas.on('mouse:wheel', function (opt) {
  //     const delta = opt.e.deltaY;
  //     let zoom = newCanvas.getZoom();
  //     zoom *= 0.999 ** delta;
  //     if (zoom > 20) zoom = 20;
  //     if (zoom < 0.01) zoom = 0.01;
  //     newCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
  //     opt.e.preventDefault();
  //     opt.e.stopPropagation();
  //   });
  //   const resizeCanvas = () => {
  //     newCanvas.setWidth(window.innerWidth);
  //     newCanvas.setHeight(window.innerHeight);
  //     newCanvas.renderAll();
  //   };
  //   window.addEventListener('resize', resizeCanvas);
  //   resizeCanvas();

  //   return () => {
  //     newCanvas.dispose();
  //     window.removeEventListener('resize', resizeCanvas);
  //   };
  // }, []);

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: initialCanvasSize.width,
      height: initialCanvasSize.height,
    });
    setCanvas(newCanvas);
    newCanvas.on('mouse:wheel', function (opt) {
      const delta = opt.e.deltaY;
      let zoom = newCanvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      newCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    const resizeCanvas = () => {
      // 브라우저 창 크기가 초기 설정 값보다 클 때만 새로운 크기를 적용합니다.
      const newWidth = Math.max(window.innerWidth, initialCanvasSize.width);
      const newHeight = Math.max(window.innerHeight, initialCanvasSize.height);
      newCanvas.setWidth(newWidth);
      newCanvas.setHeight(newHeight);
      newCanvas.renderAll();
    };
    window.addEventListener('resize', resizeCanvas);

    return () => {
      newCanvas.dispose();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas style={{ border: '1px solid red' }} ref={canvasRef} />
      {canvas && <TriangleTool canvas={canvas} />}{' '}
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
      <button
        style={{ width: '48px', height: '48px', border: '1px solid black' }}
        onClick={() => setActiveTool('move')}
        disabled={activeTool === 'move'}
      >
        이동
      </button>
    </>
  );
}
