// 'use client';
// import React, { useEffect } from 'react';
// import { Tool } from '@/app/painting/_component/_utils/toolIndex';

// interface SwitchToolProps {
//   handleToolChange: (tool: string) => void;
//   tool: string;
//   canvas: HTMLCanvasElement | null;
// }

// export const SwitchTool: React.FC<SwitchToolProps> = ({
//   handleToolChange,
//   tool,
//   canvas,
// }) => {
//   useEffect(() => {
//     if (!canvas) return;

//     let removeListeners: (() => void) | undefined;

//     switch (tool) {
//       case 'pen':
//         console.log('Switching to pen tool');
//         removeListeners = Tool.pen.basic(canvas);
//         break;
//       case 'test':
//         console.log('test1');
//       default:
//         break;
//     }

//     return () => {
//       if (removeListeners) {
//         removeListeners();
//       }
//     };
//   }, [tool, canvas]);

//   const handleButtonClick = (selectedTool: string) => {
//     handleToolChange(selectedTool);
//   };

//   return (
//     <div>
//       <button onClick={() => handleButtonClick('pen')}>펜</button>
//       <button onClick={() => handleButtonClick('test')}>test</button>
//     </div>
//   );
// };
