/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import Draggable from "react-draggable";
import { useCanvasStore } from "~/store/canvasStore";
import useImage from "use-image";

// --- Internal Components ---
const Background = () => {
  const { width, height, backgroundColor, backgroundImage } = useCanvasStore();
  const [image] = useImage(backgroundImage || "", "anonymous");
  return (
    <>
      <Rect x={0} y={0} width={width} height={height} fill={backgroundColor} />
      {image && (
        <KonvaImage image={image} x={0} y={0} width={width} height={height} />
      )}
    </>
  );
};

const EditorCanvas = () => {
  const {
    width,
    height,
    text,
    fontFamily,
    fontSize,
    textColor,
    textX,
    textY,
    setTextPosition,
  } = useCanvasStore();
  const nodeRef = useRef(null);
  const handleDrag = (e: any, data: { x: number; y: number }) =>
    setTextPosition({ x: data.x, y: data.y });

  return (
    <div id="export-container" className="relative" style={{ width, height }}>
      <div className="absolute top-0 left-0 z-0">
        <Stage width={width} height={height}>
          <Layer>
            <Background />
          </Layer>
        </Stage>
      </div>
      <div className="absolute top-0 left-0 z-10 h-full w-full">
        <Draggable
          nodeRef={nodeRef}
          bounds="parent"
          position={{ x: textX, y: textY }}
          onStop={handleDrag}
        >
          <div
            ref={nodeRef}
            className="cursor-move p-5"
            style={{
              fontFamily,
              fontSize: `${fontSize}px`,
              color: textColor,
              width: width - width * 0.1,
              textAlign: "center",
              textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {text}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

// --- Main Exported Component ---
// This is the component we will dynamically import. It handles scaling.
const ClientOnlyEditor = () => {
  const { width: canvasWidth, height: canvasHeight } = useCanvasStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const scaleX = (clientWidth - 48) / canvasWidth;
      const scaleY = (clientHeight - 48) / canvasHeight;
      setScale(Math.min(scaleX, scaleY, 1));
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [canvasWidth, canvasHeight]);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center p-6"
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
        <EditorCanvas />
      </div>
    </div>
  );
};

export default ClientOnlyEditor;
