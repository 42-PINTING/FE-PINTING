'use client';
import { basicPen } from '@/app/painting/_component/_utils/penTool';
import {
  enableSelection,
  disableSelection,
} from '@/app/painting/_component/_utils/selectTool';
import {
  enablePanning,
  disablePanning,
} from '@/app/painting/_component/_utils/panningTool';
import { ShapeTool } from './shapesTool';
import { enableTextTool } from './textTool';

export const Pen = {
  basic: basicPen,
};

export const Text = {
  enabletext: enableTextTool,
};

export const Selection = {
  enable: enableSelection,
  disable: disableSelection,
};

export const Panning = {
  enable: enablePanning,
  disable: disablePanning,
};

export const Shapes = {
  rectangle: ShapeTool.enableRectangle,
  triangle: ShapeTool.enableTriangle,
  circle: ShapeTool.enableCircle,
};

export const Tool = {
  pen: Pen,
  selection: Selection,
  panning: Panning,
  shapes: Shapes,
  text: Text,
};
