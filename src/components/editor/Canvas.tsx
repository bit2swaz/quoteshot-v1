"use client";

import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import type { KonvaEventObject } from "konva/lib/Node";
import { useCanvasStore } from "~/store/canvasStore";

// This is our main canvas component.
const Canvas = () => {
  // Pulling state and actions from our Zustand store.
  const {
    width,
    height,
    backgroundColor,
    text,
    textColor,
    fontSize,
    fontFamily,
    textX,
    textY,
    setTextPosition, // Get the action from the store
  } = useCanvasStore();

  // This function is called when the user stops dragging the text.
  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    // Save the new, final position to our Zustand store.
    setTextPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  return (
    <div className="overflow-hidden rounded-xl shadow-2xl">
      <Stage width={width} height={height}>
        <Layer>
          {/* Background Rectangle */}
          <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={backgroundColor}
          />
          {/* Quote Text */}
          <Text
            text={text}
            x={textX}
            y={textY}
            fontSize={fontSize}
            fontFamily={fontFamily}
            fill={textColor}
            width={width - 200} // Give it some padding
            align="center"
            draggable // This makes the text draggable
            onDragEnd={handleDragEnd} // This saves the position after dragging
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
