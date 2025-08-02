"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";

const TextControl = () => {
  // Get the current text and the action to update it from the store
  const { text, setText } = useCanvasStore();

  return (
    <div className="space-y-2">
      <label htmlFor="quote-text" className="text-sm font-medium text-gray-300">
        Quote Text
      </label>
      <textarea
        id="quote-text"
        rows={5}
        className="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default TextControl;
