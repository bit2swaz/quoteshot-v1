"use client"; // This is a client component

import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
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
  } = useCanvasStore();

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
            width={width - 100} // Add some padding
            align="center"
            draggable // This makes the text draggable!
            // We will add an onDragEnd handler later to save the position
          />
        </Layer>
      </Stage>
    </div>
  );
};

// This is the main page for our quote editor application.
export default function EditorPage() {
  // We need to ensure the canvas only renders on the client side,
  // as Konva interacts with browser APIs that don't exist on the server.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
      {/* Conditionally render the Canvas component only on the client */}
      {isClient ? (
        <Canvas />
      ) : (
        <div className="h-3/4 w-1/2 animate-pulse rounded-xl bg-gray-700"></div>
      )}
    </div>
  );
}
