"use client";

import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import { useCanvasStore } from "~/store/canvasStore";
import DraggableText from "~/components/editor/DraggableText";
import { useHasMounted } from "~/hooks/useHasMounted"; // Import our new hook

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

const Editor = () => {
  const { width, height } = useCanvasStore();
  const hasMounted = useHasMounted(); // Use the hook

  // If the component has not mounted yet, we can render nothing or a loader.
  // This prevents the DraggableText from rendering prematurely.
  if (!hasMounted) {
    return null; // or return a loading spinner
  }

  return (
    <div
      id="export-container"
      className="relative overflow-hidden rounded-xl shadow-2xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <BackgroundCanvas />

      {/* Only render DraggableText once we know we are on the client */}
      <DraggableText />
    </div>
  );
};

export default Editor;
