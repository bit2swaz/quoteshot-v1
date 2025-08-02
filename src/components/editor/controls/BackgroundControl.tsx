"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";

const BackgroundControl = () => {
  const { backgroundColor, setBackgroundColor } = useCanvasStore();

  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold text-white">Background</h3>
      <div className="space-y-2">
        <label htmlFor="bg-color" className="text-sm font-medium text-gray-300">
          Solid Color
        </label>
        <div className="relative">
          <input
            id="bg-color"
            type="color"
            className="block h-10 w-full cursor-pointer rounded-lg border border-gray-600 bg-gray-700 p-1"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundControl;
