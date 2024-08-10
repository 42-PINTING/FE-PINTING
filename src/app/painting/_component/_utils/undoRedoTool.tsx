import React from 'react';
import { fabric } from 'fabric';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { historyState, historyIsLocked } from '../../_atoms/canvasAtoms';
import styles from '../../_styles/whiteBoard.module.scss';

export const UndoRedoTool: React.FC<{ canvas: fabric.Canvas | null }> = ({
  canvas,
}) => {
  const [history, setHistory] = useRecoilState(historyState);
  const setIsLocked = useSetRecoilState(historyIsLocked);

  const handleUndoClick = () => {
    if (canvas && canvas._objects.length > 0) {
      const poppedObject = canvas._objects.pop();
      setHistory((prev) => {
        if (prev === undefined) {
          return poppedObject ? [poppedObject] : [];
        }
        return poppedObject ? [...prev, poppedObject] : prev;
      });
      canvas.renderAll();
    }
  };

  const handleRedoClick = () => {
    if (canvas && history) {
      if (history.length > 0) {
        setIsLocked(true);
        canvas.add(history[history.length - 1]);
        const newHistory = history.slice(0, -1);
        setHistory(newHistory);
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleUndoClick}
        disabled={!canvas || canvas.getObjects().length === 0}
        className={styles.switchStyle}
      >
        되돌리기
      </button>
      <button onClick={handleRedoClick} disabled={history?.length === 0}
        className={styles.switchStyle}>
        앞으로
      </button>
    </div>
  );
};
