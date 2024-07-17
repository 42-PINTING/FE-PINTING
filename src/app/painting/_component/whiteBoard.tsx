'use client';
import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { SwitchTool } from './_utils/switchTool';
import { useRecoilState } from 'recoil';
import { toolState } from '../_atoms/penAtoms';
import { historyState, historyIndexState } from '../_atoms/canvasAtoms';
import UndoRedoTool from './_utils/undoRedoTool';

const WhiteBoard = () => {
  const fabricRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [tool, setTool] = useRecoilState(toolState);
  const [history, setHistory] = useRecoilState(historyState);
  const [historyIndex, setHistoryIndex] = useRecoilState(historyIndexState);
  const [isUpdatingHistory, setIsUpdatingHistory] = useState(true);

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

      newCanvas.forEachObject((obj) => {
        obj.selectable = false;
      });

      // 객체가 추가될 때 selectable 속성을 false로 설정
      newCanvas.on('object:added', (e: fabric.IEvent) => {
        if (e.target) {
          e.target.selectable = false;
        }
      });

      newCanvas.on('mouse:wheel', (opt: fabric.IEvent<WheelEvent>) => {
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

  useEffect(() => {
    if (canvasRef.current) {
      const updateHistory = () => {
        const objects = canvasRef.current
          ?.getObjects()
          .map((obj) => obj.toObject()) as any[];
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(objects);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
      };

      canvasRef.current.on('object:added', updateHistory);

      return () => {
        canvasRef.current?.off('object:added', updateHistory);
      };
    }
  }, [canvasRef, setHistory, setHistoryIndex, history, historyIndex]);

  const handleToolChange = (selectedTool: string) => {
    setTool(selectedTool);
  };

  const handleUndoRedo = (action: () => void) => {
    setIsUpdatingHistory(false);
    action();
    setTimeout(() => setIsUpdatingHistory(true), 0); // 다음 렌더링 주기에서 다시 활성화
  };

  return (
    <>
      <SwitchTool
        handleToolChange={setTool}
        tool={tool}
        canvas={canvasRef.current}
      />
      <UndoRedoTool
        canvas={canvasRef.current}
        handleUndoRedo={handleUndoRedo}
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
