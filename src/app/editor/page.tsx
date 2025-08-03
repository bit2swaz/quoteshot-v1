/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useCanvasStore } from "~/store/canvasStore";
import WelcomeModal from "~/components/editor/WelcomeModal";

// Dynamically import the new ScalableCanvas component
const ScalableCanvas = dynamic(
  () =>
    import("~/components/editor/EditorCanvas").then(
      (mod) => mod.ScalableCanvas,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-xl bg-gray-700/50"></div>
    ),
  },
);

export default function EditorPage() {
  const { isWelcomeModalOpen } = useCanvasStore();

  return (
    <div className="h-full w-full">
      <ScalableCanvas />
      {isWelcomeModalOpen && <WelcomeModal />}
    </div>
  );
}
