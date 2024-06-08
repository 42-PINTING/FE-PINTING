const selectionTool = (canvas: fabric.Canvas) => {
  canvas.isDrawingMode = false;
  canvas.selection = true;
};

export default selectionTool;
