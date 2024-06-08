'use client';
import { BasicPen } from '@/app/painting/_component/_utils/penTool';
import {
  PanningTool,
  DisablePanningTool,
} from '@/app/painting/_component/_utils/panningTool';
import selectionTool from '@/app/painting/_component/_utils/selectionTool';
import { TriangleTool, RectangleTool, CircleTool } from './shapeTool';

export const Pen = {
  basic: BasicPen,
};

export const Shapes = {
  triangle: TriangleTool,
  rectangle: RectangleTool,
  circle: CircleTool,
};

export const Tool = {
  pen: Pen,
  shape: Shapes,
  selection: selectionTool,
  panning: PanningTool,
  disablePanning: DisablePanningTool,
};
