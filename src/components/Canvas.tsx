"use client";

import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer, Text as KonvaText } from "react-konva";
import Konva from "konva";

const CanvasComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageDimensions, setStageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setStageDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Set initial dimensions
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Ensure Konva renders correctly when dimensions are updated from 0
  if (stageDimensions.width === 0 || stageDimensions.height === 0) {
    return <div ref={containerRef} className="h-full w-full flex-1" />;
  }

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex-1 rounded-lg bg-gray-200 shadow-inner dark:bg-gray-700"
    >
      <Stage width={stageDimensions.width} height={stageDimensions.height}>
        <Layer>
          <KonvaText
            text="Your Quote Here"
            fontSize={40}
            fill="#333333" // Dark gray for light mode
            x={stageDimensions.width / 2}
            y={stageDimensions.height / 2}
            offsetX={
              new Konva.Text({
                text: "Your Quote Here",
                fontSize: 40,
              }).width() / 2
            }
            offsetY={
              new Konva.Text({
                text: "Your Quote Here",
                fontSize: 40,
              }).height() / 2
            }
            align="center"
            verticalAlign="middle"
            // You might want to use a theme-aware color here, or pass it as prop
            // For now, using a static color
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasComponent;
