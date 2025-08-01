"use client";

import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import { useCanvasStore } from "~/store/canvasStore";

// This is our main canvas component.
const Canvas = () => {
  // Pulling state from our Zustand store.
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
  } = useCanvasStore();

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
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
            width={width - 100} // Add some horizontal padding
            padding={20}
            align="center"
            draggable // This makes the text draggable!
            // We'll add an onDragEnd handler later to save the position
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
