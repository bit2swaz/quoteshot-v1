"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { useCanvasStore } from "~/store/canvasStore";
import Editor from "./Editor";

const EditorViewport = () => {
  const { width: canvasWidth, height: canvasHeight } = useCanvasStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;

      const { width: containerWidth, height: containerHeight } =
        containerRef.current.getBoundingClientRect();

      // Calculate scale to fit canvas within container with some padding
      const scaleX = (containerWidth - 80) / canvasWidth;
      const scaleY = (containerHeight - 80) / canvasHeight;

      const newScale = Math.min(scaleX, scaleY, 1); // Don't scale up, only down
      setScale(newScale);
    };

    updateScale(); // Initial scale calculation

    // Recalculate on window resize
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [canvasWidth, canvasHeight]);

  return (
    // This container will fill the available space and center its content
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      {/* We apply the calculated scale to a wrapper around the Editor */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <Editor />
      </div>
    </div>
  );
};

export default EditorViewport;
