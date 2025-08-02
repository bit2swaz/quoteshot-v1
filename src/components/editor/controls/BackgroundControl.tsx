/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/components/editor/controls/BackgroundControl.tsx
"use client";

import React, { useState } from "react";
import { useCanvasStore } from "~/store/canvasStore";

const BackgroundControl = () => {
  const { backgroundColor, setBackgroundColor, setBackgroundImage } =
    useCanvasStore();

  const [searchQuery, setSearchQuery] = useState("Nature");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    setIsLoading(true);
    setSearchResults([]);
    try {
      const response = await fetch(`/api/unsplash?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
      // You could show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Background</h3>

      {/* Solid Color Picker */}
      <div>
        <label htmlFor="bg-color" className="text-sm font-medium text-gray-300">
          Solid Color
        </label>
        <div className="relative mt-1">
          <input
            id="bg-color"
            type="color"
            className="block h-10 w-full cursor-pointer rounded-lg border border-gray-600 bg-gray-700 p-1"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
      </div>

      <div className="h-px bg-gray-700"></div>

      {/* Unsplash Image Search */}
      <div>
        <label
          htmlFor="unsplash-search"
          className="text-sm font-medium text-gray-300"
        >
          Search Unsplash
        </label>
        <form onSubmit={handleSearch} className="mt-1 flex gap-2">
          <input
            id="unsplash-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-600 bg-gray-700 p-2 text-white"
            placeholder="e.g., Mountains"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            {isLoading ? "..." : "Go"}
          </button>
        </form>
      </div>

      {/* Search Results Grid */}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {searchResults.map((url) => (
            <button
              key={url}
              onClick={() => setBackgroundImage(url)}
              className="aspect-square overflow-hidden rounded-md bg-gray-600"
            >
              <img
                src={url}
                alt="Unsplash search result"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundControl;
