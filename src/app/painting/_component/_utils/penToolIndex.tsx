import setBasicPen from '@/app/painting/_component/_utils/setBasicPenTool';
import {
  setPenPanningTool,
  disablePanningTool,
} from '@/app/painting/_component/_utils/setPenPanningTool';
import setSelectionTool from '@/app/painting/_component/_utils/setSelectionTool';

const penTool = {
  basicPen: setBasicPen,
  selection: setSelectionTool,
  panning: setPenPanningTool,
  disablePanning: disablePanningTool,
};

export default penTool;
