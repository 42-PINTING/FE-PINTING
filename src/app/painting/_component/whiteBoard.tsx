'use client';
import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { SwitchTool } from './_utils/switchTool';
import { useRecoilState } from 'recoil';
import { toolState } from '../_atoms/penAtoms';
import { historyState, historyIsLocked } from '../_atoms/canvasAtoms';
import { UndoRedoTool } from './_utils/undoRedoTool';
import styles from '../_styles/whiteBoard.module.scss';

const WhiteBoard = () => {
  const fabricRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [tool, setTool] = useRecoilState(toolState);
  const [history, setHistory] = useRecoilState(historyState);
  const [isLocked, setIsLocked] = useRecoilState(historyIsLocked);

  const setCanvasSize = (canvas: fabric.Canvas) => {
    const width = (window.innerWidth * 2) / 3;
    const height = (window.innerHeight * 2.36) / 3;
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

  const saveHistory = () => {
    if (!isLocked) {
      setHistory([]); // 예시로 빈 배열을 사용
    }
    setIsLocked(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.on('object:added', saveHistory);
      canvas.on('object:modified', saveHistory);
      canvas.on('object:removed', saveHistory);
    }

    return () => {
      if (canvas) {
        canvas.off('object:added', saveHistory);
        canvas.off('object:modified', saveHistory);
        canvas.off('object:removed', saveHistory);
      }
    };
  }, [canvasRef.current]);

  const handleToolChange = (selectedTool: string) => {
    setTool(selectedTool);
  };

  return (
    <>
    <div className={styles.switchPanel}>
      <SwitchTool
        handleToolChange={setTool}
        tool={tool}
        canvas={canvasRef.current}
    
      />
     
      <UndoRedoTool canvas={canvasRef.current} />
      </div>
      <canvas className={styles.canvasSet}
        id='canvas'
        ref={fabricRef}
        style={{ border: '1px solid black', borderRadius:'8px' }}
      ></canvas>
    </>
  );
};

export default WhiteBoard;
