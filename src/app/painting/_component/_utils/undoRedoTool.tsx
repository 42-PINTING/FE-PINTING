import { useRecoilState } from 'recoil';
import { historyState, historyIndexState } from '../../_atoms/canvasAtoms';
import { fabric } from 'fabric';

const UndoRedoTool = ({
  canvas,
  handleUndoRedo,
}: {
  canvas: fabric.Canvas | null;
  handleUndoRedo: (action: () => void) => void;
}) => {
  const [history, setHistory] = useRecoilState(historyState);
  const [historyIndex, setHistoryIndex] = useRecoilState(historyIndexState);

  const undo = () => {
    handleUndoRedo(() => {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const objects = history[newIndex];
        renderObjects(objects);
        console.log(newIndex);
      }
    });
  };

  const redo = () => {
    handleUndoRedo(() => {
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        const objects = history[newIndex];
        renderObjects(objects);
      }
    });
  };

  const renderObjects = (objects: any[]) => {
    if (canvas) {
      canvas.clear();
      fabric.util.enlivenObjects(
        objects,
        (enlivenedObjects: fabric.Object[]) => {
          enlivenedObjects.forEach((obj) => {
            canvas.add(obj);
          });
          canvas.renderAll();
        },
        'fabric'
      );
    }
  };

  return (
    <div>
      <button onClick={undo} disabled={historyIndex <= 0}>
        Undo
      </button>
      <button onClick={redo} disabled={historyIndex >= history.length - 1}>
        Redo
      </button>
    </div>
  );
};

export default UndoRedoTool;
