'use client';
import {
  basicPen,
  PenSettings,
} from '@/app/painting/_component/_utils/penTool';
import {
  enableSelection,
  disableSelection,
} from '@/app/painting/_component/_utils/selectTool';
import {
  enablePanning,
  disablePanning,
} from '@/app/painting/_component/_utils/panningTool';
import { ShapeTool, ShapeSettings } from './shapesTool';
import { enableTextTool } from './textTool';
import { enableLineTool, LineSettings } from './lineTool';

export const Pen = {
  basic: basicPen,
  settings: PenSettings,
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
  rectangle: {
    enable: ShapeTool.enableRectangle,
    settings: ShapeSettings,
  },
  triangle: {
    enable: ShapeTool.enableTriangle,
    settings: ShapeSettings,
  },
  circle: {
    enable: ShapeTool.enableCircle,
    settings: ShapeSettings,
  },
};

export const Line = {
  basic: enableLineTool,
  settings: LineSettings,
};

export const Tool = {
  pen: Pen,
  selection: Selection,
  panning: Panning,
  shapes: Shapes,
  text: Text,
  line: Line,
};
