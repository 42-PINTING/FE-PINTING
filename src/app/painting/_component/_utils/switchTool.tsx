import React, { useEffect } from 'react';
import penTool from '@/app/painting/_component/_utils/penToolIndex';

interface SwitchToolProps {
  handleToolChange: (selectedTool: string) => void;
  tool: string;
  canvas: fabric.Canvas | null;
}

const SwitchTool: React.FC<SwitchToolProps> = ({
  handleToolChange,
  tool,
  canvas,
}) => {
  useEffect(() => {
    if (!canvas) return;

    switch (tool) {
      case 'pen':
        penTool.disablePanning(canvas);
        penTool.basicPen(canvas);
        break;
      case 'selection':
        penTool.disablePanning(canvas);
        penTool.selection(canvas);
        break;
      case 'panning':
        canvas.discardActiveObject();
        penTool.panning(canvas);
        break;
      default:
        break;
    }
  }, [tool, canvas]);

  const handleButtonClick = (selectedTool: string) => {
    handleToolChange(selectedTool);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('pen')}>펜</button>
      <button onClick={() => handleButtonClick('selection')}>선택</button>
      <button onClick={() => handleButtonClick('panning')}>이동</button>
    </div>
  );
};

export default SwitchTool;
