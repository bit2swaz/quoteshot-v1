"use client";

import React, { useRef, useEffect } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import type { KonvaEventObject } from "konva/lib/Node";
import { useCanvasStore } from "~/store/canvasStore";
import type { Text as TextType } from "konva/lib/shapes/Text";

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
    setTextPosition, // Get the new action from the store
  } = useCanvasStore();

  const textRef = useRef<TextType>(null);

  // Center text initially
  useEffect(() => {
    if (textRef.current) {
      const textNode = textRef.current;
      const textWidth = textNode.width();
      const newX = (width - textWidth) / 2;
      // Only set initial position if it hasn't been moved
      if (textX === 540) {
        // Check against initial default
        setTextPosition({ x: newX, y: textY });
      }
    }
  }, [text, fontSize, fontFamily, width, setTextPosition, textX, textY]);

  // This function is called when the user stops dragging the text.
  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    // Save the new position to our Zustand store.
    setTextPosition({
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
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
            ref={textRef}
            text={text}
            x={textX}
            y={textY}
            fontSize={fontSize}
            fontFamily={fontFamily}
            fill={textColor}
            width={width - 100} // Add some horizontal padding
            padding={20}
            align="center"
            draggable // This makes the text draggable!
            onDragEnd={handleDragEnd} // And this saves the position!
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
