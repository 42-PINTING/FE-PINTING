// undoRedoTool.tsx
import React from 'react';
import { useRecoilState } from 'recoil';
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
  const [currentIndex, setCurrentIndex] = useRecoilState(canvasIndexState);

  const handleUndo = () => {
    if (currentIndex > 0 && canvas) {
      const previousState = history[currentIndex - 1];
      canvas.loadFromJSON(previousState, () => {
        canvas.renderAll();
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1 && canvas) {
      const nextState = history[currentIndex + 1];
      canvas.loadFromJSON(nextState, () => {
        canvas.renderAll();
      });
      setCurrentIndex(currentIndex + 1);
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
