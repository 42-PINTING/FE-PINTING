'use client';
import React, { useEffect, useState } from 'react';
import { Tool } from '@/app/painting/_component/_utils/toolIndex';
import styles from '../../_styles/whiteBoard.module.scss';

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
      if (!canvas) return;

      if (e.key === 'Alt') {
        canvas.isDrawingMode = false;
        Tool.panning.enable(canvas);
      } else if (e.key === 'Delete') {
        const activeObjects = canvas.getActiveObjects();
        if (activeObjects.length > 0) {
          activeObjects.forEach((obj) => {
            canvas.remove(obj);
          });
          canvas.discardActiveObject();
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
      case 'select':
        console.log('select');
        removeListeners = Tool.selection.enable(canvas);
        break;
      case 'panning':
        console.log('123123123');
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
      case 'line':
        removeListeners = Tool.line.basic(canvas, strokeWidth, strokeColor);
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
    } else if (tool === 'line') {
      return Tool.line.settings;
    }
    return null;
  })();

  return (
    <div>
      <div className={styles.switchMargin}>
        <a
          className={styles.switchPen}
          onClick={() => handleButtonClick('pen')}
        ></a>
        <a
          className={styles.switchIcon}
          onClick={() => handleButtonClick('select')}
        ></a>
        <a
          className={styles.switchMove}
          onClick={() => handleButtonClick('panning')}
        ></a>
        <a
          className={styles.switchRectangle}
          onClick={() => handleButtonClick('rectangle')}
        ></a>
        <a
          className={styles.switchAngle}
          onClick={() => handleButtonClick('triangle')}
        ></a>
        <a
          className={styles.switchCircle}
          onClick={() => handleButtonClick('circle')}
        ></a>
        <a
          className={styles.switchLine}
          onClick={() => handleButtonClick('line')}
        ></a>
        <a
          className={styles.switchText}
          onClick={() => handleButtonClick('text')}
        ></a>
      </div>

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
