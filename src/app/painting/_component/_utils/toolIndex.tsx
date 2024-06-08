'use client';
import { BasicPen } from '@/app/painting/_component/_utils/PenTool';
import {
  PanningTool,
  DisablePanningTool,
} from '@/app/painting/_component/_utils/PanningTool';
import selectionTool from '@/app/painting/_component/_utils/SelectionTool';
import {
  TriangleTool,
  RectangleTool,
  CircleTool,
} from '@/app/painting/_component/_utils/ShapeTool';

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
