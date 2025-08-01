"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import our new master Editor component with SSR turned off.
// This is the key to fixing the "Can't resolve 'canvas'" error.
const Editor = dynamic(() => import("~/components/editor/Editor"), {
  ssr: false,
  // Show a loading skeleton while the editor is loading on the client
  loading: () => (
    <div className="h-[1080px] w-[1080px] animate-pulse rounded-xl bg-gray-700"></div>
  ),
});

export default function EditorPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
      <Editor />
    </div>
  );
}
