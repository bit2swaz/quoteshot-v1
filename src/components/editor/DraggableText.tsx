/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Draggable from "react-draggable";
import { useCanvasStore } from "~/store/canvasStore";

const DraggableText = () => {
  // Get all the state and actions we need from the store
  const {
    text,
    fontFamily,
    fontSize,
    textColor,
    textX,
    textY,
    setTextPosition,
  } = useCanvasStore();

  // This function is called when the user stops dragging
  const handleDrag = (e: any, data: { x: number; y: number }) => {
    // Update the text's position in our Zustand store
    setTextPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      bounds="parent" // Restricts dragging to the parent container
      position={{ x: textX, y: textY }} // Controlled position from the store
      onStop={handleDrag} // Call our function when dragging stops
    >
      <div
        className="absolute cursor-move p-5"
        style={{
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          color: textColor,
          width: "880px", // 1080px (canvas width) - 200px padding
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </Draggable>
  );
};

export default DraggableText;
