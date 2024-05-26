import { basicPen } from '@/app/painting/_component/_utils/penTool';
import {
  panningTool,
  disablePanningTool,
} from '@/app/painting/_component/_utils/panningTool';
import selectionTool from '@/app/painting/_component/_utils/selectionTool';
import {
  triangleTool,
  rectangleTool,
} from '@/app/painting/_component/_utils/shapeTool';

export const Pen = {
  basic: basicPen,
};

export const Shapes = {
  triangle: triangleTool,
  rectangle: rectangleTool,
};

export const Tool = {
  pen: Pen,
  shape: Shapes,
  selection: selectionTool,
  panning: panningTool,
  disablePanning: disablePanningTool,
};
