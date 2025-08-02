"use client";

import React from "react";
import { useCanvasStore } from "~/store/canvasStore";
import quotesData from "~/data/quotes.json"; // Import our new quotes data

const TextControl = () => {
  const { text, setText } = useCanvasStore();

  const handleGenerate = () => {
    // Pick a random quote from the imported data
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const randomQuote = quotesData[randomIndex]?.quote;

    if (randomQuote) {
      // Update the text in the store with the new quote
      setText(randomQuote);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor="quote-text"
          className="text-sm font-medium text-gray-300"
        >
          Quote Text
        </label>
        <button
          onClick={handleGenerate}
          className="rounded-md bg-indigo-900/50 px-3 py-1 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-900"
        >
          Generate
        </button>
      </div>
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
