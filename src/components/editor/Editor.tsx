"use client";

import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import { useCanvasStore } from "~/store/canvasStore";
import DraggableText from "~/components/editor/DraggableText";

// A simple component for just the background, defined locally
const BackgroundCanvas = () => {
  const { width, height, backgroundColor } = useCanvasStore();
  return (
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
  );
};

// This is our main editor component that combines the background and text
const Editor = () => {
  const { width, height } = useCanvasStore();

  return (
    <div
      id="export-container" // We'll use this ID later for exporting the image
      className="relative overflow-hidden rounded-xl shadow-2xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* The Konva canvas for the background is at the bottom layer */}
      <BackgroundCanvas />

      {/* The DraggableText component sits on top */}
      <DraggableText />
    </div>
  );
};

export default Editor;
