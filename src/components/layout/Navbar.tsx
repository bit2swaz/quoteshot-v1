"use client";

import React from "react";
import { toPng } from "html-to-image";

// Simple placeholder for an icon. You can replace this with a real icon library later.
const IconPlaceholder = () => (
  <div className="h-6 w-6 rounded-md bg-gray-600"></div>
);

const Navbar = () => {
  // This function handles the image download process.
  const handleDownload = () => {
    // Find the element to export using its ID.
    const element = document.getElementById("export-container");

    if (!element) {
      console.error("Export container not found!");
      // Here you might want to show a user-friendly error message.
      return;
    }

    // Use html-to-image to convert the element to a PNG.
    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        // Create a temporary link element to trigger the download.
        const link = document.createElement("a");
        link.download = "quoteshot.png"; // Set the filename for the download.
        link.href = dataUrl; // Set the image data as the href.
        link.click(); // Programmatically click the link to start the download.
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      });
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-20 flex h-16 items-center justify-between border-b border-gray-700 bg-gray-900 px-6">
      {/* Left side: Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
        <h1 className="text-xl font-bold text-white">Quoteshot</h1>
      </div>

      {/* Right side: Actions and User Info */}
      <div className="flex items-center gap-4">
        {/* The onClick event is now wired up to our handleDownload function. */}
        <button
          onClick={handleDownload}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Download
        </button>
        <IconPlaceholder />
        <IconPlaceholder />
      </div>
    </nav>
  );
};

export default Navbar;
