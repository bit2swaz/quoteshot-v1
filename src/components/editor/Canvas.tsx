"use client";

import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import type { KonvaEventObject } from "konva/lib/Node";
import { useCanvasStore } from "~/store/canvasStore";

const Canvas = () => {
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
    setTextPosition,
  } = useCanvasStore();

  const handleDragStart = () => {
    console.log("DRAG START");
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    console.log("DRAG END");
    setTextPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  // This function changes the cursor to a pointer on hover
  const handleMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "pointer";
    }
  };

  // This function reverts the cursor back
  const handleMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "default";
    }
  };

  return (
    // The Stage component is the canvas itself.
    // We add a rounded border and shadow directly here.
    <Stage
      width={width}
      height={height}
      className="rounded-xl bg-white shadow-2xl"
    >
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
          width={width - 200}
          align="center"
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
