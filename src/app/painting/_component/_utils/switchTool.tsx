import React, { useEffect } from 'react';
import penTool from '@/app/painting/_component/_utils/penToolIndex';

interface SwitchToolProps {
  handleToolChange: (selectedTool: string) => void;
  tool: string;
  canvas: fabric.Canvas | null; // canvas 추가
}

const SwitchTool: React.FC<SwitchToolProps> = ({
  handleToolChange,
  tool,
  canvas,
}) => {
  // 선택된 도구에 따라 적절한 동작 수행
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
        penTool.panning(canvas);
        break;
      default:
        break;
    }
  }, [tool, canvas]); // canvas를 의존성 배열에 추가

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
