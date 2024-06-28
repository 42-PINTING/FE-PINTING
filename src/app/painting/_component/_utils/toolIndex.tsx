'use client';
import { basicPen } from '@/app/painting/_component/_utils/penTool';
import {
  enableSelection,
  disableSelection,
} from '@/app/painting/_component/_utils/selectTool';
import { enablePanning } from '@/app/painting/_component/_utils/panningTool';

export const Pen = {
  basic: basicPen,
};

export const Selection = {
  enable: enableSelection,
  disable: disableSelection,
};

export const Panning = {
  enable: enablePanning,
};

export const Tool = {
  pen: Pen,
  selection: Selection,
  panning: Panning,
};
