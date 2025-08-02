/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import React, { useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import { useCanvasStore } from "~/store/canvasStore";

// Define the presets we want to export
const exportPresets = [
  { name: "Post-Square", width: 1080, height: 1080 },
  { name: "Story-Portrait", width: 1080, height: 1920 },
  { name: "Landscape", width: 1920, height: 1080 },
];

// A helper function to introduce a small delay, allowing React to re-render
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ExportControl = () => {
  const {
    setWidth,
    setHeight,
    width: originalWidth,
    height: originalHeight,
  } = useCanvasStore();
  const [isLoading, setIsLoading] = useState(false);

  // Single PNG Download Logic
  const handleDownloadPng = () => {
    const element = document.getElementById("export-container");
    if (!element) return;
    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "quoteshot.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(console.error);
  };

  // ZIP Download Logic
  const handleDownloadZip = async () => {
    setIsLoading(true);
    const element = document.getElementById("export-container");
    if (!element) return;

    const zip = new JSZip();

    for (const preset of exportPresets) {
      // 1. Set the new canvas size
      setWidth(preset.width);
      setHeight(preset.height);

      // 2. Wait for the DOM to update
      await wait(100);

      // 3. Generate the image
      const dataUrl = await toPng(element, { cacheBust: true });

      // 4. Add to zip
      // We need to get the raw data from the dataURL
      const blob = await (await fetch(dataUrl)).blob();
      zip.file(`quoteshot-${preset.name}.png`, blob);
    }

    // 5. Generate and download the zip file
    zip.generateAsync({ type: "blob" }).then((content) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "quoteshot-exports.zip";
      link.click();
    });

    // 6. Restore original canvas size
    setWidth(originalWidth);
    setHeight(originalHeight);
    setIsLoading(false);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDownloadPng}
        disabled={isLoading}
        className="rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-500 disabled:opacity-50"
      >
        Download PNG
      </button>
      <button
        onClick={handleDownloadZip}
        disabled={isLoading}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:opacity-50"
      >
        {isLoading ? "Processing..." : "Download All"}
      </button>
    </div>
  );
};

export default ExportControl;
