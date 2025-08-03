"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useCanvasStore } from "~/store/canvasStore";
import WelcomeModal from "~/components/editor/WelcomeModal";

// Dynamically import our new master client-side component.
// This is the definitive fix for the build error.
const ClientOnlyEditor = dynamic(
  () => import("~/components/editor/ClientOnlyEditor"),
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
      <ClientOnlyEditor />
      {isWelcomeModalOpen && <WelcomeModal />}
    </div>
  );
}
