'use client';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  canvasHistoryState,
  canvasIndexState,
} from '@/app/painting/_atoms/canvasAtoms';
import { fabric } from 'fabric';

interface UndoRedoToolProps {
  canvas: fabric.Canvas | null;
}

const UndoRedoTool: React.FC<UndoRedoToolProps> = ({ canvas }) => {
  const [history, setHistory] = useRecoilState(canvasHistoryState);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [undoState, setUndoState] = useState(false);

  useEffect(() => {
    if (!canvas) return;

    const saveState = async () => {
      if (undoState) {
        setUndoState(false);
      } else {
        const json = JSON.stringify(canvas.toJSON());
        const newHistory = [...history.slice(0, currentIndex), json];
        if (newHistory.length > 10) {
          newHistory.shift();
        }
        setHistory(newHistory as fabric.Object[][]);
        setCurrentIndex(newHistory.length);
        console.log('test2');
      }
    };

    canvas.on('object:added', saveState);
    canvas.on('object:modified', saveState);
    canvas.on('object:removed', saveState);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        if (canvas.getActiveObject()) {
          canvas.remove(canvas.getActiveObject() as fabric.Object);
        }
        saveState();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      canvas.off('object:added', saveState);
      canvas.off('object:modified', saveState);
      canvas.off('object:removed', saveState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [canvas, history, currentIndex]);

  const handleUndo = () => {
    if (currentIndex > 0 && canvas) {
      setUndoState(true);
      const previousState = history[currentIndex - 1];
      canvas.loadFromJSON(previousState, () => {
        canvas.renderAll();
        setCurrentIndex(currentIndex - 1);
      });
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1 && canvas) {
      const nextState = history[currentIndex + 1];
      canvas.loadFromJSON(nextState, () => {
        canvas.renderAll();
        setCurrentIndex(currentIndex + 1);
        setUndoState(true);
      });
    }
  };
  return (
    <div>
      <button onClick={handleUndo} disabled={currentIndex <= 0}>
        되돌리기
      </button>
      <button
        onClick={handleRedo}
        disabled={currentIndex >= history.length - 1}
      >
        다시하기
      </button>
    </div>
  );
};

export default UndoRedoTool;
