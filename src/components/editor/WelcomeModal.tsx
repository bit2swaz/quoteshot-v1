"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";

// Define our presets with descriptive names
const presets = [
  { name: "Post (Square)", subtitle: "1080x1080", width: 1080, height: 1080 },
  {
    name: "Story (Portrait)",
    subtitle: "1080x1920",
    width: 1080,
    height: 1920,
  },
  { name: "Landscape", subtitle: "1920x1080", width: 1920, height: 1080 },
];

const WelcomeModal = () => {
  const { setWidth, setHeight, closeWelcomeModal } = useCanvasStore();

  const handleSelect = (width: number, height: number) => {
    setWidth(width);
    setHeight(height);
    closeWelcomeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-white">
          What are you creating?
        </h2>
        <p className="mt-2 text-center text-gray-400">
          Choose a canvas size to start.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Map over the functional presets */}
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handleSelect(preset.width, preset.height)}
              className="rounded-lg bg-gray-700 p-6 text-left transition-all duration-200 hover:scale-105 hover:bg-indigo-600"
            >
              <h3 className="text-lg font-semibold text-white">
                {preset.name}
              </h3>
              <p className="text-sm text-gray-400">{preset.subtitle}</p>
            </button>
          ))}

          {/* The non-functional "Custom" button */}
          <button
            disabled
            className="cursor-not-allowed rounded-lg bg-gray-700 p-6 text-left opacity-50"
          >
            <h3 className="text-lg font-semibold text-white">Custom Size</h3>
            <p className="text-sm text-gray-400">Coming soon</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
