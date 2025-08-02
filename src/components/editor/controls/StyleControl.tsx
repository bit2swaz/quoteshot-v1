"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";

// A simple array of curated fonts
const fonts = [
  "Inter",
  "Lora",
  "Montserrat",
  "Playfair Display",
  "Roboto Mono",
  "Caveat",
  "Poppins",
];

const StyleControl = () => {
  const {
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    textColor,
    setTextColor,
  } = useCanvasStore();

  return (
    <div className="space-y-4">
      {/* Font Family Selector */}
      <div>
        <label
          htmlFor="font-family"
          className="text-sm font-medium text-gray-300"
        >
          Font Family
        </label>
        <select
          id="font-family"
          className="mt-1 w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* Font Size Slider */}
      <div>
        <label
          htmlFor="font-size"
          className="text-sm font-medium text-gray-300"
        >
          Font Size ({fontSize}px)
        </label>
        <input
          id="font-size"
          type="range"
          min="16"
          max="256"
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-600"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </div>

      {/* Text Color Picker */}
      <div>
        <label
          htmlFor="text-color"
          className="text-sm font-medium text-gray-300"
        >
          Text Color
        </label>
        <div className="relative mt-1">
          <input
            id="text-color"
            type="color"
            className="block h-10 w-full cursor-pointer rounded-lg border border-gray-600 bg-gray-700 p-1"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StyleControl;
