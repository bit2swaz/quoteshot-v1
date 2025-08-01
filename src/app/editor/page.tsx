"use client";

import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import { useCanvasStore } from "~/store/canvasStore";
import DraggableText from "~/components/editor/DraggableText";

// A simple component for just the background
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

export default function EditorPage() {
  const { width, height } = useCanvasStore();

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
      {/* This is our main container. It's relative so the absolute positioned
        draggable text stays within it.
      */}
      <div
        className="relative overflow-hidden rounded-xl shadow-2xl"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* The Konva canvas for the background is at the bottom layer */}
        <BackgroundCanvas />

        {/* The DraggableText component sits on top */}
        <DraggableText />
      </div>
    </div>
  );
}
