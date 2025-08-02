"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";

// Define our resolution presets
const presets = [
  { name: "Square", width: 1080, height: 1080 },
  { name: "Story", width: 1080, height: 1920 },
  { name: "X Post", width: 1600, height: 900 },
  { name: "Portrait", width: 1080, height: 1350 },
];

const ResolutionControl = () => {
  // Get the actions to set width and height from the store
  const { setWidth, setHeight, width: currentWidth } = useCanvasStore();

  const handlePresetClick = (width: number, height: number) => {
    setWidth(width);
    setHeight(height);
  };

  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold text-white">Canvas Size</h3>
      <div className="grid grid-cols-2 gap-2">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => handlePresetClick(preset.width, preset.height)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              currentWidth === preset.width
                ? "bg-indigo-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResolutionControl;
