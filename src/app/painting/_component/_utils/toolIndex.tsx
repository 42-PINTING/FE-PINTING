'use client';
import { basicPen } from '@/app/painting/_component/_utils/penTool';
import {
  enableSelection,
  disableSelection,
} from '@/app/painting/_component/_utils/selectTool';

export const Pen = {
  basic: basicPen,
};

export const Selection = {
  enable: enableSelection,
  disable: disableSelection,
};

export const Tool = {
  pen: Pen,
  selection: Selection,
};
