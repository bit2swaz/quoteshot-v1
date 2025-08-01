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

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    setTextPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "pointer";
    }
  };

  const handleMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "default";
    }
  };

  return (
    <Stage
      width={width}
      height={height}
      className="rounded-xl bg-white shadow-2xl"
    >
      <Layer>
        {/* Background */}
        <Rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={backgroundColor}
        />
        {/* The Draggable Text */}
        <Text
          text={text}
          x={textX}
          y={textY}
          fontSize={fontSize}
          fontFamily={fontFamily} // This will now work because the font is pre-loaded
          fill={textColor}
          width={width - 200}
          padding={20}
          align="center"
          draggable
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
