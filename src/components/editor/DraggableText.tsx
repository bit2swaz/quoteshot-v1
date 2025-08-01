/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react"; // Import useRef
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

  // Create a ref to attach to the DOM node
  const nodeRef = useRef(null);

  const handleDrag = (e: any, data: { x: number; y: number }) => {
    setTextPosition({ x: data.x, y: data.y });
  };

  return (
    // Pass the nodeRef to the Draggable component
    <Draggable
      nodeRef={nodeRef} // This is the crucial fix for React 19
      bounds="parent"
      position={{ x: textX, y: textY }}
      onStop={handleDrag}
    >
      {/* Attach the ref to the actual element being dragged */}
      <div
        ref={nodeRef}
        className="absolute cursor-move p-5"
        style={{
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          color: textColor,
          width: "880px",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </Draggable>
  );
};

export default DraggableText;
