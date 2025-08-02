/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Draggable from "react-draggable";
import { useCanvasStore } from "~/store/canvasStore";

// This is our new, robust editor component.
const Editor = () => {
  const {
    width,
    height,
    backgroundColor,
    text,
    fontFamily,
    fontSize,
    textColor,
    textX,
    textY,
    setTextPosition,
  } = useCanvasStore();

  const nodeRef = useRef(null);

  const handleDrag = (e: any, data: { x: number; y: number }) => {
    setTextPosition({ x: data.x, y: data.y });
  };

  const debugInfo = {
    text,
    fontSize,
    textColor,
    textX,
    textY,
  };

  return (
    // Main container for positioning and sizing
    <div
      id="export-container"
      className="relative overflow-hidden rounded-xl shadow-2xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Layer 1: Background Canvas (explicitly on the bottom) */}
      <div className="absolute top-0 left-0 z-0">
        <Stage width={width} height={height}>
          <Layer>
            <Rect
              x={0}
              y={0}
              width={width}
              height={height}
              fill={backgroundColor}
            />
          </Layer>
        </Stage>
      </div>

      {/* Layer 2: Draggable Text (explicitly on top) */}
      <div className="absolute top-0 left-0 z-10 h-full w-full">
        <Draggable
          nodeRef={nodeRef}
          bounds="parent"
          position={{ x: textX, y: textY }}
          onStop={handleDrag}
        >
          <div
            ref={nodeRef}
            className="cursor-move p-5"
            style={{
              fontFamily: fontFamily,
              fontSize: `${fontSize}px`,
              color: textColor,
              width: "880px",
              textAlign: "center",
              border: "2px dashed limegreen", // Bright green for visibility
            }}
          >
            {text}
            <pre className="mt-4 rounded-lg bg-black/50 p-2 text-left text-xs">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Editor;
