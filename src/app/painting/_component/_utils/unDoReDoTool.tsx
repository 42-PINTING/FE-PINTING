// undoRedoTool.tsx
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  canvasHistoryState,
  canvasIndexState,
  undoRedoState,
} from '@/app/painting/_atoms/canvasAtoms';
import { fabric } from 'fabric';

interface UndoRedoToolProps {
  canvas: fabric.Canvas | null;
}

const UndoRedoTool: React.FC<UndoRedoToolProps> = ({ canvas }) => {
  const history = useRecoilValue(canvasHistoryState);
  const [currentIndex, setCurrentIndex] = useRecoilState(canvasIndexState);
  const [undoState, setUndoState] = useRecoilState(undoRedoState);

  const handleUndo = () => {
    if (currentIndex >= 0 && canvas) {
      const previousState = history[currentIndex - 1];
      canvas.loadFromJSON(previousState, () => {
        // canvas.renderAll();
        setUndoState(1);
      });
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1 && canvas) {
      const nextState = history[currentIndex + 1];
      canvas.loadFromJSON(nextState, () => {
        // canvas.renderAll();
        setUndoState(1);
      });
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
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
