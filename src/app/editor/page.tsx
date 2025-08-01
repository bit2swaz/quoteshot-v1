"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the Canvas component with SSR turned off.
// This prevents the Konva library from being loaded on the server.
const Canvas = dynamic(() => import("~/components/editor/Canvas"), {
  ssr: false,
  // Optional: show a loading skeleton while the component is being loaded.
  loading: () => (
    <div className="h-[1080px] w-[1080px] animate-pulse rounded-xl bg-gray-700"></div>
  ),
});

// This is the main page for our quote editor application.
export default function EditorPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
      <Canvas />
    </div>
  );
}
