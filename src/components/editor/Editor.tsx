/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
"use client";

import React, { useRef } from "react";
import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import Draggable from "react-draggable";
import { useCanvasStore } from "~/store/canvasStore";
import useImage from "use-image";

// This component renders the background, which can be a solid color or an image.
const Background = () => {
  const { width, height, backgroundColor, backgroundImage } = useCanvasStore();
  const [image] = useImage(backgroundImage || "", "anonymous");

  return (
    <>
      {/* Solid color rectangle is always there as a fallback */}
      <Rect x={0} y={0} width={width} height={height} fill={backgroundColor} />

      {/* If an image is loaded, display it on top */}
      {image && (
        <KonvaImage image={image} x={0} y={0} width={width} height={height} />
      )}
    </>
  );
};

const Editor = () => {
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

  const handleDrag = (e: any, data: { x: number; y: number }) => {
    setTextPosition({ x: data.x, y: data.y });
  };

  return (
    <div
      id="export-container"
      className="relative overflow-hidden rounded-xl shadow-2xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Layer 1: Background Canvas */}
      <div className="absolute top-0 left-0 z-0">
        <Stage width={width} height={height}>
          <Layer>
            <Background />
          </Layer>
        </Stage>
      </div>

      {/* Layer 2: Draggable Text */}
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
              fontFamily: fontFamily,
              fontSize: `${fontSize}px`,
              color: textColor,
              width: "880px",
              textAlign: "center",
              // Add a subtle text shadow to make text more readable on busy images
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

export default Editor;
