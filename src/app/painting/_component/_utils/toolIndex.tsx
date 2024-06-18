'use client';
<<<<<<< HEAD
import { basicPen, eraserTool } from '@/app/painting/_component/_utils/penTool';
=======
import { BasicPen } from '@/app/painting/_component/_utils/penTool';
>>>>>>> 40ff491be913f17140ce57e812026e114a08e46f
import {
  PanningTool,
  DisablePanningTool,
} from '@/app/painting/_component/_utils/panningTool';
import selectionTool from '@/app/painting/_component/_utils/selectionTool';
import { TriangleTool, RectangleTool, CircleTool } from './shapeTool';

export const Pen = {
<<<<<<< HEAD
  basic: basicPen,
  eraser: eraserTool,
=======
  basic: BasicPen,
>>>>>>> 40ff491be913f17140ce57e812026e114a08e46f
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
