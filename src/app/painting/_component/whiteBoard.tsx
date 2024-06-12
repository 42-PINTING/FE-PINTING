'use client';
import { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { toolState } from '@/app/painting/_atoms/penAtoms';
import {
  canvasHistoryState,
  canvasIndexState,
  undoRedoState,
} from '../_atoms/canvasAtoms';
import { SwitchTool } from '@/app/painting/_component/_utils/switchTool';
import UndoRedoTool from './_utils/unDoReDoTool';

const WhiteBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [initialCanvasSize] = useState({
    width: 1000,
    height: 500,
  });
  const [tool, setTool] = useRecoilState(toolState);
  const [history, setHistory] = useRecoilState(canvasHistoryState);
  const [currentIndex, setCurrentIndex] = useRecoilState(canvasIndexState);
  const [undoState, setUndoState] = useRecoilState(undoRedoState);

  // Canvas 초기화 useEffect
  useEffect(() => {
    if (!canvasRef.current) return;

    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: initialCanvasSize.width,
      height: initialCanvasSize.height,
    });
    setCanvas(newCanvas);

    const initialState = newCanvas.toJSON();
    setHistory([initialState.objects as fabric.Object[]]);
    setCurrentIndex(0);

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
      const newWidth = Math.max(
        window.innerWidth * (2 / 3),
        initialCanvasSize.width
      );
      const newHeight = Math.max(
        window.innerHeight * (2 / 3),
        initialCanvasSize.height
      );
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

  // 히스토리 관리 useEffect
  useEffect(() => {
    if (!canvas) return;

    const saveState = (event: fabric.IEvent) => {
      if (!event.target) return;
      if (undoState === 1) {
        setUndoState(0);
        // canvas.renderAll();
        // undoState가 1일 경우 saveState 실행하지 않음
      } else if (undoState === 0) {
        const json = JSON.stringify(canvas.toJSON());
        const newHistory = [...history.slice(0, currentIndex), json];

        if (newHistory.length > 10) {
          newHistory.shift();
        }

        setHistory(newHistory as fabric.Object[][]);
        setCurrentIndex(newHistory.length);
        console.log(currentIndex);
      }
    };

    canvas.on('object:added', saveState);
    canvas.on('object:modified', saveState);
    canvas.on('object:removed', saveState);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        if (canvas.getActiveObject()) {
          canvas.remove(canvas.getActiveObject() as fabric.Object);
          saveState;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      canvas.off('object:added', saveState);
      canvas.off('object:modified', saveState);
      canvas.off('object:removed', saveState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    currentIndex,
    history,
    undoState,
    setCurrentIndex,
    setHistory,
    setUndoState,
  ]);

  const handleToolChange = (selectedTool: string) => {
    setTool(selectedTool);
  };

  return (
    <div>
      <SwitchTool
        handleToolChange={handleToolChange}
        tool={tool}
        canvas={canvas}
      />
      <UndoRedoTool canvas={canvas} />
      <canvas
        ref={canvasRef}
        width='800'
        height='600'
        style={{ border: '1px solid #ccc' }}
      ></canvas>
    </div>
  );
};

export default WhiteBoard;
