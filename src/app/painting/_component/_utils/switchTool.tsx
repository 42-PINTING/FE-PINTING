'use client';
import React, { useEffect } from 'react';
import { Tool } from '@/app/painting/_component/_utils/toolIndex';

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

    let removeListeners: (() => void) | undefined;

    switch (tool) {
      case 'pen':
        Tool.disablePanning(canvas);
        Tool.pen.basic(canvas);
        break;
      case 'selection':
        Tool.disablePanning(canvas);
        Tool.selection(canvas);
        break;
      case 'panning':
        canvas.discardActiveObject();
        Tool.panning(canvas);
        break;
      case 'triangle':
        Tool.disablePanning(canvas);
        removeListeners = Tool.shape.triangle(canvas);
        break;
      case 'rectangle':
        Tool.disablePanning(canvas);
        removeListeners = Tool.shape.rectangle(canvas);
        break;
      case 'circle':
        Tool.disablePanning(canvas);
        removeListeners = Tool.shape.circle(canvas);
        break;
      default:
        break;
    }

    return () => {
      if (removeListeners) {
        removeListeners();
      }
    };
  }, [tool, canvas]);

  const handleButtonClick = (selectedTool: string) => {
    handleToolChange(selectedTool);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('pen')}>펜</button>
      <button onClick={() => handleButtonClick('selection')}>선택</button>
      <button onClick={() => handleButtonClick('panning')}>이동</button>
      <button onClick={() => handleButtonClick('triangle')}>삼각형</button>
      <button onClick={() => handleButtonClick('rectangle')}>사각형</button>
      <button onClick={() => handleButtonClick('circle')}>원</button>
    </div>
  );
};

export default SwitchTool;
