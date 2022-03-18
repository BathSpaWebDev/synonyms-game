import './timer.css';
import { Glass } from './glass';
import { NarrowContour } from './contours/narrow-contour';
import { NarrowestContour } from './contours/narrowest-contour';
import { TimerSlice } from './timer-slice';
import { WideContour } from './contours/wide-contour';
import { WidestContour } from './contours/widest-contour';
import { Wood } from './wood';

export const SandTimer = () => {
  return (
    <div className="timer-container flex flex-col w-40">
      <Wood />
      <div className="flex">
        <WidestContour />
        <Glass />
        <div className="sand flex flex-col w-28 h-8">
          <TimerSlice styles="sand-level w-28 h-4" />
          <TimerSlice styles="sand-level-a bg-yellow-400 w-28 h-4" />
        </div>
        <Glass />
        <WidestContour />
      </div>
      <div className="flex">
        <WidestContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-bl-xl" />
        <div className="sand flex flex-col w-28 h-8">
          <TimerSlice styles="sand-level-b bg-yellow-400 w-28 h-4" />
          <TimerSlice styles="sand-level-c bg-yellow-400 w-28 h-4 rounded-bl-xl rounded-br-xl" />
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-br-xl" />
        <WidestContour />
      </div>
      <div className="flex">
        <WideContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tr-xl rounded-bl-xl" />
        <div className="sand flex flex-col w-20 h-8">
          <TimerSlice styles="sand-level-d bg-yellow-400 w-20 h-4"/ >
          <TimerSlice styles="sand-level-e bg-yellow-400 w-20 h-4 rounded-bl-xl rounded-br-xl"/ >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl rounded-br-xl"/ >
        <WideContour />
      </div>
      <div className="flex">
        <NarrowContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tr-xl rounded-bl-xl"/ >
        <div className="sand flex flex-col w-12 h-8">
          <TimerSlice styles="sand-level-f bg-yellow-400 w-12 h-4"/ >
          <TimerSlice styles="sand-level-g bg-yellow-400 w-12 h-4  rounded-bl-xl rounded-br-xl"/ >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl rounded-br-xl"/ >
        <NarrowContour />
      </div>
      <div className="flex">
        <NarrowestContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tr-xl rounded-bl-xl"/ >
        <div className="sand flex flex-col w-4 h-8">
          <TimerSlice styles="sand-level-h bg-yellow-400 w-4 h-4"/ >
          <TimerSlice styles="sand-level-i bg-yellow-400 w-4 h-4 rounded-bl-xl rounded-br-xl"/ >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl rounded-br-xl"/ >
        <NarrowestContour />
      </div>
      <div className="flex">
        <NarrowestContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl rounded-br-xl"/ >
        <div className="sand flex flex-col w-4 h-8">
          <TimerSlice styles="sand-level-j w-4 h-4" / >
          <TimerSlice styles="sand-level-k w-4 h-4 rounded-tl-xl rounded-tr-xl" / >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-bl-xl rounded-tr-xl"/ >
        <NarrowestContour />
      </div>
      <div className="flex">
        <NarrowestContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl rounded-br-xl"/ >
        <div className="sand flex flex-col w-12 h-8">
          <TimerSlice styles="sand-level-l w-12 h-4 rounded-tl-xl rounded-tr-xl"/ >
          <TimerSlice styles="sand-level-m w-12 h-4"/ >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tr-xl rounded-bl-xl"/ >
        <NarrowestContour />
      </div>
      <div className="flex">
        <WideContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl rounded-br-xl"/ >
        <div className="sand flex flex-col w-20 h-8">
          <TimerSlice styles="sand-level-n w-20 h-4 rounded-tl-xl rounded-tr-xl"/ >
          <TimerSlice styles="sand-level-o w-20 h-4"/ >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tr-xl rounded-bl-xl"/ >
        <WideContour />
      </div>
      <div className="flex">
        <WidestContour />
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tl-xl"/ >
        <div className="sand flex flex-col w-28 h-8">
          <TimerSlice styles="sand-level-p w-28 h-4 rounded-tl-xl rounded-tr-xl"/ >
          <TimerSlice styles="sand-level-q w-28 h-4"/ >
        </div>
        <TimerSlice styles="glass bg-black w-4 h-8 rounded-tr-xl"/ >
        <WidestContour />
      </div>
      <div className="flex">
        <WidestContour />
        <Glass />
        <div className="sand flex flex-col w-28 h-8">
          <TimerSlice styles="sand-level-r w-28 h-4"/ >
          <TimerSlice styles="sand-level-s w-28 h-4"/ >
        </div>
        <Glass />
        <WidestContour />
      </div>
      <Wood />
    </div>
  );
}
