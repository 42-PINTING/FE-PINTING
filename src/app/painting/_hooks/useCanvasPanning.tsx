import { useEffect, useState } from 'react';
import { fabric } from 'fabric';

// 커스텀 훅: useCanvasPanning
export function useCanvasPanning(canvasInstance, activeTool) {
  const [isDragging, setIsDragging] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasInstance) return;

    const isPanningMode = activeTool === 'move';

    // Event handlers for panning
    const handleMouseDown = (opt) => {
      if (isPanningMode) {
        const evt = opt.e;
        setIsDragging(true);
        setLastPos({ x: evt.clientX, y: evt.clientY });
      }
    };

    const handleMouseMove = (opt) => {
      if (isDragging && isPanningMode) {
        const e = opt.e;
        const deltaX = e.clientX - lastPos.x;
        const deltaY = e.clientY - lastPos.y;

        const vpt = canvasInstance.viewportTransform;
        if (vpt) {
          vpt[4] += deltaX;
          vpt[5] += deltaY;
          canvasInstance.requestRenderAll();
          setLastPos({ x: e.clientX, y: e.clientY });
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    canvasInstance.on('mouse:down', handleMouseDown);
    canvasInstance.on('mouse:move', handleMouseMove);
    canvasInstance.on('mouse:up', handleMouseUp);

    return () => {
      canvasInstance.off('mouse:down', handleMouseDown);
      canvasInstance.off('mouse:move', handleMouseMove);
      canvasInstance.off('mouse:up', handleMouseUp);
    };
  }, [canvasInstance, activeTool]);
}
