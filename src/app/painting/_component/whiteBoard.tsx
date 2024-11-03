'use client';
import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { SwitchTool } from './_utils/switchTool';
import { useRecoilState } from 'recoil';
import { toolState } from '../_atoms/penAtoms';
import { historyState, historyIsLocked } from '../_atoms/canvasAtoms';
import { UndoRedoTool } from './_utils/undoRedoTool';
import styles from '../_styles/whiteBoard.module.scss';

const WhiteBoard = () => {
  const fabricRef = useRef<HTMLCanvasElement | null>(null);
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [tool, setTool] = useRecoilState(toolState);
  const [history, setHistory] = useRecoilState(historyState);
  const [isLocked, setIsLocked] = useRecoilState(historyIsLocked);

  const setCanvasSize = (canvas: fabric.Canvas) => {
    const width = (window.innerWidth * 2) / 3;
    const height = (window.innerHeight * 2.36) / 3;
    canvas.setWidth(width);
    canvas.setHeight(height);
  };

  useEffect(() => {
    if (fabricRef.current && !canvasRef.current) {
      const newCanvas = new fabric.Canvas(fabricRef.current);
      canvasRef.current = newCanvas;
      setCanvasSize(newCanvas);

      newCanvas.forEachObject((obj) => {
        obj.selectable = false;
      });

      // 객체가 추가될 때 selectable 속성을 false로 설정
      newCanvas.on('object:added', (e: fabric.IEvent) => {
        if (e.target) {
          e.target.selectable = false;
        }
      });

      newCanvas.on('mouse:wheel', (opt: fabric.IEvent<WheelEvent>) => {
        const delta = opt.e.deltaY;
        let zoom = newCanvas.getZoom();

        // 줌 인/줌 아웃의 제한 범위 설정 (예: 최소 0.5, 최대 3)
        const minZoom = 0.5;
        const maxZoom = 3;

        // 줌 레벨 조정
        zoom *= 0.999 ** delta;

        // 줌 레벨 제한
        zoom = Math.max(minZoom, Math.min(maxZoom, zoom));

        newCanvas.setZoom(zoom);

        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
    }

    const handleResize = () => {
      if (canvasRef.current) {
        setCanvasSize(canvasRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const saveHistory = () => {
    if (!isLocked) {
      setHistory([]); // 예시로 빈 배열을 사용
    }
    setIsLocked(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.on('object:added', saveHistory);
      canvas.on('object:modified', saveHistory);
      canvas.on('object:removed', saveHistory);
    }

    return () => {
      if (canvas) {
        canvas.off('object:added', saveHistory);
        canvas.off('object:modified', saveHistory);
        canvas.off('object:removed', saveHistory);
      }
    };
  }, [canvasRef.current]);

  const handleToolChange = (selectedTool: string) => {
    setTool(selectedTool);
  };

  // const handlePrintJSON = () => {
  //   if (canvasRef.current) {
  //     // 예시로 SVG 파일을 경로로 추가
  //     const svgPath = '/assets/your_svg_file.svg'; // 사용하고자 하는 SVG 파일 경로로 변경하세요.

  //     // 첫 번째 객체의 sourcePath 속성을 설정
  //     const firstObject = canvasRef.current.item(0);
  //     if (firstObject && firstObject.type === 'path') {
  //       firstObject.set('sourcePath', svgPath);
  //     }

  //     // toDatalessJSON을 사용하여 최적화된 JSON 출력
  //     const datalessJSON = canvasRef.current.toDatalessJSON();
  //     console.log('Optimized Dataless JSON:', JSON.stringify(datalessJSON));
  //   }
  // };

  return (
    <>
      <div className={styles.switchPanel}>
        <SwitchTool
          handleToolChange={setTool}
          tool={tool}
          canvas={canvasRef.current}
        />

        <UndoRedoTool canvas={canvasRef.current} />
      </div>
      {/* <button onClick={handlePrintJSON} style={{ marginBottom: '10px' }}>
        Print Canvas JSON
      </button> */}
      <canvas
        className={styles.canvasSet}
        id='canvas'
        ref={fabricRef}
        style={{ border: '1px solid black', borderRadius: '8px' }}
      ></canvas>
    </>
  );
};

export default WhiteBoard;
