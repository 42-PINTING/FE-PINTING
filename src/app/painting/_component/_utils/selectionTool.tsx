const SelectionTool = (canvas: fabric.Canvas) => {
  canvas.isDrawingMode = false;
  canvas.selection = true;
};

export default SelectionTool;
