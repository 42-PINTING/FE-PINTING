import { fabric } from 'fabric';

export const enableTextTool = (canvas: fabric.Canvas) => {
  let isDown = false;
  let origX = 0;
  let origY = 0;
  let rect: fabric.Rect | null = null;
  let isDragging = false;

  const handleMouseDown = (e: fabric.IEvent) => {
    if (e.pointer) {
      isDown = true;
      const pointer = canvas.getPointer(e.e);
      origX = pointer.x;
      origY = pointer.y;

      rect = new fabric.Rect({
        left: origX,
        top: origY,
        width: 0,
        height: 0,
        fill: 'rgba(0,0,0,0)', // 투명한 사각형으로 드래그 영역 표시
        stroke: 'black',
        strokeWidth: 1,
        selectable: false,
        evented: false,
      });
      canvas.add(rect);
    }
  };

  const handleMouseMove = (e: fabric.IEvent) => {
    if (!isDown || !rect) return;
    isDragging = true;
    const pointer = canvas.getPointer(e.e);
    rect.set({
      left: Math.min(origX, pointer.x),
      top: Math.min(origY, pointer.y),
      width: Math.abs(origX - pointer.x),
      height: Math.abs(origY - pointer.y),
    });
    canvas.renderAll();
  };

  const handleMouseUp = (e: fabric.IEvent) => {
    if (isDown && rect) {
      const pointer = canvas.getPointer(e.e);
      const width = Math.abs(origX - pointer.x);
      const height = Math.abs(origY - pointer.y);

      if (isDragging && width > 10 && height > 10) {
        // 드래그한 경우
        const textbox = new fabric.Textbox('Edit Me', {
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          fontFamily: 'Arial',
          fontSize: 24,
          fill: '#333',
          editable: true,
        });
        canvas.add(textbox);
        canvas.setActiveObject(textbox);
        textbox.enterEditing();
        textbox.hiddenTextarea?.focus();
      } else {
        // 드래그하지 않은 경우
        const textbox = new fabric.Textbox('Edit Me', {
          left: origX,
          top: origY,
          width: 10,
          height: 10,
          fontFamily: 'Arial',
          fontSize: 24,
          fill: '#333',
          editable: true,
        });
        canvas.add(textbox);
        canvas.setActiveObject(textbox);
        textbox.enterEditing();
        textbox.hiddenTextarea?.focus();
      }

      canvas.remove(rect);
      canvas.renderAll();
      rect = null;
    }
    isDragging = false;
    isDown = false;
  };

  canvas.on('mouse:down', handleMouseDown);
  canvas.on('mouse:move', handleMouseMove);
  canvas.on('mouse:up', handleMouseUp);

  return () => {
    canvas.off('mouse:down', handleMouseDown);
    canvas.off('mouse:move', handleMouseMove);
    canvas.off('mouse:up', handleMouseUp);
  };
};
