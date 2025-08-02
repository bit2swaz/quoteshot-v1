"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useCanvasStore } from "~/store/canvasStore";
import WelcomeModal from "~/components/editor/WelcomeModal";

// Dynamically import our Editor component
const Editor = dynamic(() => import("~/components/editor/Editor"), {
  ssr: false,
  loading: () => (
    <div className="h-[1080px] w-[1080px] animate-pulse rounded-xl bg-gray-700"></div>
  ),
});

export default function EditorPage() {
  // Get the modal state from the store
  const { isWelcomeModalOpen } = useCanvasStore();

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
      <Editor />

      {/* Conditionally render the WelcomeModal on top of everything */}
      {isWelcomeModalOpen && <WelcomeModal />}
    </div>
  );
}
