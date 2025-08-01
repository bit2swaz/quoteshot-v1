"use client";

import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import type { KonvaEventObject } from "konva/lib/Node";

const DebugCanvas = () => {
  const handleMouseEnter = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "pointer";
      console.log("MOUSE ENTER: Cursor should be pointer.");
    }
  };

  const handleMouseLeave = (e: KonvaEventObject<MouseEvent>) => {
    const container = e.target.getStage()?.container();
    if (container) {
      container.style.cursor = "default";
      console.log("MOUSE LEAVE: Cursor should be default.");
    }
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    console.log(`DRAG END: x: ${e.target.x()}, y: ${e.target.y()}`);
  };

  return (
    <Stage width={1080} height={1080} className="rounded-xl shadow-2xl">
      <Layer>
        <Rect x={0} y={0} width={1080} height={1080} fill="#1a202c" />
        <Rect
          x={200}
          y={200}
          width={200}
          height={200}
          fill="red"
          draggable
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onDragEnd={handleDragEnd}
        />
      </Layer>
    </Stage>
  );
};

export default DebugCanvas;
