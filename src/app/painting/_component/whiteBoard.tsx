'use client';
import { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';

const Paint = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [initialCanvasSize, setInitialCanvasSize] = useState({
    width: 1000,
    height: 500,
  });

  useEffect(() => {
    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: initialCanvasSize.width,
      height: initialCanvasSize.height,
    });
    setCanvas(newCanvas);
    newCanvas.on('mouse:wheel', function (opt) {
      const delta = opt.e.deltaY;
      let zoom = newCanvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      newCanvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });

    const resizeCanvas = () => {
      // 브라우저 창 크기가 초기 설정 값보다 클 때만 새로운 크기를 적용합니다.
      const newWidth = Math.max(
        window.innerWidth * (2 / 3),
        initialCanvasSize.width
      );
      const newHeight = Math.max(
        window.innerHeight * (2 / 3),
        initialCanvasSize.height
      );
      newCanvas.setWidth(newWidth);
      newCanvas.setHeight(newHeight);
      newCanvas.renderAll();
    };
    window.addEventListener('resize', resizeCanvas);

    return () => {
      newCanvas.dispose();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width='800'
        height='600'
        style={{ border: '1px solid #ccc' }}
      ></canvas>
    </div>
  );
};

export default Paint;
