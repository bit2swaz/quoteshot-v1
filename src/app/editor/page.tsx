"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the main Canvas component
const Canvas = dynamic(() => import("~/components/editor/Canvas"), {
  ssr: false,
  loading: () => (
    <div className="h-[1080px] w-[1080px] animate-pulse rounded-xl bg-gray-700"></div>
  ),
});

export default function EditorPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
      <Canvas />
    </div>
  );
}
