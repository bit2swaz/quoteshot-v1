/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer, Text as KonvaText, Rect } from "react-konva";
import Konva from "konva";

export interface CanvasComponentProps {
  quoteText: string;
  setQuoteText: (text: string) => void;
}

const Canvas: React.FC<CanvasComponentProps> = ({
  quoteText,
  setQuoteText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textNodeRef = useRef<Konva.Text>(null);
  const [stageDimensions, setStageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Calculate Konva text metrics outside of render to avoid recalculations
  const konvaTextConfig = {
    text: quoteText,
    fontSize: 40,
  };
  const tempKonvaText = new Konva.Text(konvaTextConfig);

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

  useEffect(() => {
    if (isEditing && textNodeRef.current && containerRef.current) {
      const textNode = textNodeRef.current;
      const stage = textNode.getStage();
      if (!stage) return;

      // Use getClientRect to get accurate dimensions including transforms
      const textRect = textNode.getClientRect();

      const textarea = document.createElement("textarea");
      textarea.value = quoteText;
      textarea.style.position = "absolute";

      // Calculate position relative to the container for textarea
      const stageRect = stage.container().getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      // Adjusted position for textarea based on textNodeRect and container offset
      textarea.style.left = `${stageRect.left + textRect.x - containerRect.left}px`;
      textarea.style.top = `${stageRect.top + textRect.y - containerRect.top}px`;
      textarea.style.width = `${textRect.width}px`;
      textarea.style.height = `${textRect.height}px`;

      textarea.style.fontSize = `${textNode.fontSize() * textNode.scaleX()}px`;
      textarea.style.fontFamily = textNode.fontFamily();
      textarea.style.color = textNode.fill() as string;
      textarea.style.backgroundColor = "transparent";
      textarea.style.border = "1px solid gray";
      textarea.style.outline = "none";
      textarea.style.resize = "none";
      textarea.style.padding = "0";
      textarea.style.overflow = "hidden";
      textarea.style.lineHeight = textNode.lineHeight()?.toString() ?? "1";
      textarea.style.textAlign = textNode.align() || "left";
      textarea.style.verticalAlign = textNode.verticalAlign() || "top";
      textarea.style.whiteSpace = "pre-wrap"; // Important for text wrapping
      textarea.style.wordBreak = "break-word";
      textarea.style.transformOrigin = "left top";
      textarea.style.transform = `rotateZ(${textNode.rotation()}deg)`;

      containerRef.current.appendChild(textarea);

      textarea.focus();

      const handleBlur = () => {
        setQuoteText(textarea.value);
        setIsEditing(false);
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
          // Allow Shift+Enter for new line
          e.preventDefault();
          setQuoteText(textarea.value);
          setIsEditing(false);
        }
      };

      textarea.addEventListener("blur", handleBlur);
      textarea.addEventListener("keydown", handleKeyDown);

      return () => {
        textarea.removeEventListener("blur", handleBlur);
        textarea.removeEventListener("keydown", handleKeyDown);
        if (containerRef.current?.contains(textarea)) {
          containerRef.current.removeChild(textarea);
        }
      };
    }
  }, [isEditing, quoteText, setQuoteText, stageDimensions]);

  // Ensure Konva renders correctly when dimensions are updated from 0
  if (stageDimensions.width === 0 || stageDimensions.height === 0) {
    return <div ref={containerRef} className="h-full w-full flex-1" />;
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-auto relative h-full w-full flex-1 rounded-lg bg-gray-200 shadow-inner dark:bg-gray-700"
    >
      <Stage
        width={stageDimensions.width}
        height={stageDimensions.height}
        onDblClick={() => console.log("Stage Double Clicked")}
      >
        <Layer listening={true}>
          {stageDimensions.width > 0 && stageDimensions.height > 0 && (
            <>
              {/* Rect for more reliable double-click detection (now always rendered) */}
              <Rect
                x={stageDimensions.width / 2 - tempKonvaText.width() / 2}
                y={stageDimensions.height / 2 - tempKonvaText.height() / 2}
                width={tempKonvaText.width()}
                height={tempKonvaText.height()}
                fill="red" // Still red for debugging. Change to "transparent" once working.
                onDblClick={() => {
                  console.log("KonvaText Rect Double Clicked");
                  setIsEditing(true);
                }}
                visible={!isEditing}
                listening={true}
              />
              <KonvaText
                text={quoteText}
                fontSize={40}
                fill="#333333"
                x={stageDimensions.width / 2}
                y={stageDimensions.height / 2}
                offsetX={tempKonvaText.width() / 2}
                offsetY={tempKonvaText.height() / 2}
                align="center"
                verticalAlign="middle"
                visible={!isEditing} // Hide Konva text when editing
                ref={textNodeRef}
                perfectDrawEnabled={false} // May help with event issues
                listening={true} // Ensure it's listening for events
              />
            </>
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
