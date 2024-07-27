'use client';
import React, { useEffect, useState } from 'react';
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
  const [brushWidth, setBrushWidth] = useState(2);
  const [brushColor, setBrushColor] = useState('black');
  const [strokeColor, setStrokeColor] = useState('black');
  const [strokeWidth, setStrokeWidth] = useState(2);

  useEffect(() => {
    if (!canvas) return;

    let removeListeners: (() => void) | undefined;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        canvas.isDrawingMode = false;
        Tool.panning.enable(canvas);
      } else if (e.key === 'delete') {
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          canvas.remove(activeObject);
          canvas.requestRenderAll();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        Tool.panning.disable(canvas);
        if (tool !== 'panning') {
          handleToolChange(tool);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    switch (tool) {
      case 'pen':
        Tool.selection.disable(canvas);
        removeListeners = Tool.pen.basic(canvas, brushWidth, brushColor);
        break;
      case 'test':
        canvas.selection = false;
        Tool.selection.disable(canvas);
        canvas.isDrawingMode = false;
        break;
      case 'select':
        removeListeners = Tool.selection.enable(canvas);
        break;
      case 'panning':
        removeListeners = Tool.panning.enable(canvas);
        break;
      case 'rectangle':
        removeListeners = Tool.shapes.rectangle.enable(
          canvas,
          strokeColor,
          strokeWidth
        );
        break;
      case 'triangle':
        removeListeners = Tool.shapes.triangle.enable(
          canvas,
          strokeColor,
          strokeWidth
        );
        break;
      case 'circle':
        removeListeners = Tool.shapes.circle.enable(
          canvas,
          strokeColor,
          strokeWidth
        );
        break;
      case 'text':
        removeListeners = Tool.text.enabletext(canvas);
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
  }, [tool, canvas, brushWidth, brushColor, strokeColor, strokeWidth]);

  const handleButtonClick = (selectedTool: string) => {
    handleToolChange(selectedTool);
  };

  const SettingsComponent = (() => {
    if (tool === 'pen') {
      return Tool.pen.settings;
    } else if (
      tool === 'rectangle' ||
      tool === 'triangle' ||
      tool === 'circle'
    ) {
      return Tool.shapes[tool as keyof typeof Tool.shapes].settings;
    }
    return null;
  })();

  return (
    <div>
      <button onClick={() => handleButtonClick('pen')}>펜</button>
      <button onClick={() => handleButtonClick('test')}>test</button>
      <button onClick={() => handleButtonClick('select')}>선택</button>
      <button onClick={() => handleButtonClick('panning')}>이동</button>
      <button onClick={() => handleButtonClick('rectangle')}>사각형</button>
      <button onClick={() => handleButtonClick('triangle')}>삼각형</button>
      <button onClick={() => handleButtonClick('circle')}>원형</button>
      <button onClick={() => handleButtonClick('text')}>텍스트</button>

      {SettingsComponent && (
        <SettingsComponent
          canvas={canvas}
          brushWidth={brushWidth}
          setBrushWidth={setBrushWidth}
          brushColor={brushColor}
          setBrushColor={setBrushColor}
          strokeColor={strokeColor}
          setStrokeColor={setStrokeColor}
          strokeWidth={strokeWidth}
          setStrokeWidth={setStrokeWidth}
        />
      )}
    </div>
  );
};
