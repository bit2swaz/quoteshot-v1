"use client";

import React from "react";
import Link from "next/link";
import { toPng } from "html-to-image";

const Navbar = () => {
  // Logic for downloading the canvas as a single PNG
  const handleDownload = () => {
    const element = document.getElementById("export-container");
    if (!element) {
      console.error("Export container not found!");
      return;
    }
    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "quoteshot.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      });
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b border-gray-700 bg-gray-900 px-4 sm:px-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
        <h1 className="hidden text-xl font-bold text-white sm:block">
          QuoteShot
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={handleDownload}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          Download PNG
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
