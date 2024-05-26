import { basicPen } from '@/app/painting/_component/_utils/penTool';
import {
  panningTool,
  disablePanningTool,
} from '@/app/painting/_component/_utils/panningTool';
import selectionTool from '@/app/painting/_component/_utils/selectionTool';

export const Pen = {
  basic: basicPen,
};

export const Tool = {
  pen: Pen,
  selection: selectionTool,
  panning: panningTool,
  disablePanning: disablePanningTool,
};
