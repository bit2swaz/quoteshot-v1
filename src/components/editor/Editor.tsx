"use client";

import React from "react";
import { Stage, Layer, Rect } from "react-konva";
import { useCanvasStore } from "~/store/canvasStore";
import DraggableText from "~/components/editor/DraggableText";
import { useHasMounted } from "~/hooks/useHasMounted";

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
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      id="export-container"
      className="relative overflow-hidden rounded-xl shadow-2xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <BackgroundCanvas />
      <DraggableText />
    </div>
  );
};

export default Editor;
