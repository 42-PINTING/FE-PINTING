export const PanningTool = (canvas: fabric.Canvas) => {
  let isPanning = false;
  let lastPosX = 0;
  let lastPosY = 0;

  canvas.isDrawingMode = false;
  canvas.selection = false;

  canvas.on('mouse:down', (opt: fabric.IEvent<MouseEvent>) => {
    const e = opt.e;
    isPanning = true;
    lastPosX = e.clientX;
    lastPosY = e.clientY;
    canvas.selection = false;
  });

  canvas.on('mouse:move', (opt: fabric.IEvent<MouseEvent>) => {
    if (isPanning && opt.e) {
      const e = opt.e;
      const vpt = canvas.viewportTransform;
      if (vpt) {
        vpt[4] += e.clientX - lastPosX;
        vpt[5] += e.clientY - lastPosY;
        canvas.requestRenderAll();
        lastPosX = e.clientX;
        lastPosY = e.clientY;
      }
    }
  });

  canvas.on('mouse:up', () => {
    isPanning = false;
    canvas.selection = true;
  });
};

export const DisablePanningTool = (canvas: fabric.Canvas) => {
  canvas.off('mouse:down');
  canvas.off('mouse:move');
  canvas.off('mouse:up');

  canvas.isDrawingMode = false;
  canvas.selection = true;
};
