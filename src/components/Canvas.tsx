"use client";

import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer, Text as KonvaText } from "react-konva";
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

      // Calculate the position of the text node relative to the container div
      const textPosition = textNode.absolutePosition();
      const stageBox = stage.container().getBoundingClientRect();
      const containerBox = containerRef.current.getBoundingClientRect();

      // Calculate the absolute position of the Konva text on the screen
      const absLeft = stageBox.left + textPosition.x;
      const absTop = stageBox.top + textPosition.y;

      // Calculate the position relative to the parent containerRef
      const relLeft = absLeft - containerBox.left;
      const relTop = absTop - containerBox.top;

      const textarea = document.createElement("textarea");
      textarea.value = quoteText;
      textarea.style.position = "absolute";
      textarea.style.left = `${relLeft}px`;
      textarea.style.top = `${relTop}px`;
      textarea.style.width = `${textNode.width()}px`;
      textarea.style.height = `${textNode.height()}px`;
      textarea.style.fontSize = `${textNode.fontSize()}px`;
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
      className="relative h-full w-full flex-1 rounded-lg bg-gray-200 shadow-inner dark:bg-gray-700"
    >
      <Stage width={stageDimensions.width} height={stageDimensions.height}>
        <Layer>
          <KonvaText
            text={quoteText}
            fontSize={40}
            fill="#333333"
            x={stageDimensions.width / 2}
            y={stageDimensions.height / 2}
            offsetX={
              new Konva.Text({ text: quoteText, fontSize: 40 }).width() / 2
            }
            offsetY={
              new Konva.Text({ text: quoteText, fontSize: 40 }).height() / 2
            }
            align="center"
            verticalAlign="middle"
            onDblClick={() => setIsEditing(true)}
            visible={!isEditing} // Hide Konva text when editing
            ref={textNodeRef}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
