'use client';
import { basicPen, eraserTool } from '@/app/painting/_component/_utils/penTool';
import {
  panningTool,
  disablePanningTool,
} from '@/app/painting/_component/_utils/panningTool';
import selectionTool from '@/app/painting/_component/_utils/selectionTool';
import {
  triangleTool,
  rectangleTool,
  circleTool,
} from '@/app/painting/_component/_utils/shapeTool';

export const Pen = {
  basic: basicPen,
  eraser: eraserTool,
};

export const Shapes = {
  triangle: triangleTool,
  rectangle: rectangleTool,
  circle: circleTool,
};

export const Tool = {
  pen: Pen,
  shape: Shapes,
  selection: selectionTool,
  panning: panningTool,
  disablePanning: disablePanningTool,
};
