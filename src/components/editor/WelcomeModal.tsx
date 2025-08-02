"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";

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
  const { setWidth, setHeight, closeWelcomeModal, resetState } =
    useCanvasStore();

  // This handler is for continuing with the saved state
  const handleContinue = (width: number, height: number) => {
    setWidth(width);
    setHeight(height);
    closeWelcomeModal();
  };

  // This handler resets the state before setting the new size
  const handleStartNew = (width: number, height: number) => {
    resetState(); // Reset the canvas to defaults
    setWidth(width);
    setHeight(height);
    closeWelcomeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-white">
          Welcome Back!
        </h2>
        <p className="mt-2 text-center text-gray-400">
          Start a new creation or continue where you left off.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Map over the presets to create new cards */}
          {presets.map((preset) => (
            <div
              key={preset.name}
              className="flex flex-col justify-between rounded-lg bg-gray-700 p-5"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {preset.name}
                </h3>
                <p className="text-sm text-gray-400">{preset.subtitle}</p>
              </div>
              <div className="mt-6 space-y-2">
                <button
                  onClick={() => handleStartNew(preset.width, preset.height)}
                  className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Start New
                </button>
                <button
                  onClick={() => handleContinue(preset.width, preset.height)}
                  className="w-full rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-gray-500"
                >
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
