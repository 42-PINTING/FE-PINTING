'use client';
import React, { useEffect } from 'react';
import { Tool } from '@/app/painting/_component/_utils/toolIndex';

interface SwitchToolProps {
  handleToolChange: (tool: string) => void;
  tool: string;
  canvas: fabric.Canvas | null;
}

export const SwitchTool: React.FC<SwitchToolProps> = ({
  handleToolChange,
  tool,
  canvas,
}) => {
  useEffect(() => {
    if (!canvas) return;

    let removeListeners: (() => void) | undefined;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        canvas.isDrawingMode = false;
        Tool.panning.enable(canvas);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        Tool.panning.enable(canvas);
        if (tool !== 'panning') {
          handleToolChange(tool); // 원래 도구로 되돌리기
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    switch (tool) {
      case 'pen':
        Tool.selection.disable(canvas);
        removeListeners = Tool.pen.basic(canvas);
        break;
      case 'test':
        canvas.selection = false;
        Tool.selection.disable(canvas);
        canvas.isDrawingMode = false;
        break;
      case 'select':
        removeListeners = Tool.selection.enable(canvas); // 선택 기능 활성화
        break;
      case 'panning':
        removeListeners = Tool.panning.enable(canvas);
        break;
      default:
        Tool.selection.disable(canvas);
        break;
    }

    return () => {
      if (removeListeners) {
        removeListeners();
      }
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [tool, canvas]);

  const handleButtonClick = (selectedTool: string) => {
    handleToolChange(selectedTool);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('pen')}>펜</button>
      <button onClick={() => handleButtonClick('test')}>test</button>
      <button onClick={() => handleButtonClick('select')}>선택</button>
      <button onClick={() => handleButtonClick('panning')}>이동</button>
    </div>
  );
};

