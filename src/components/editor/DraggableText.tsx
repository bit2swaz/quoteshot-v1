/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";
import { useCanvasStore } from "~/store/canvasStore";

const DraggableText = () => {
  const {
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
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      position={{ x: textX, y: textY }}
      onStop={handleDrag}
    >
      <div
        ref={nodeRef}
        className="absolute cursor-move p-5"
        style={{
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          color: textColor,
          width: "880px",
          textAlign: "center",
          border: "1px dashed red", // Added a border for visibility
        }}
      >
        {/* The actual text */}
        {text}

        {/* --- DEBUG OVERLAY --- */}
        <pre className="mt-4 rounded-lg bg-black/50 p-2 text-left text-xs">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
        {/* --- END DEBUG OVERLAY --- */}
      </div>
    </Draggable>
  );
};

export default DraggableText;
