"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useCanvasStore } from "~/store/canvasStore";
import WelcomeModal from "~/components/editor/WelcomeModal";
import MobileBlocker from "~/components/layout/MobileBlocker";

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
    <>
      {/* Desktop Content: This will be hidden on screens smaller than 'lg' */}
      <div className="hidden h-full w-full lg:block">
        <ClientOnlyEditor />
        {isWelcomeModalOpen && <WelcomeModal />}
      </div>

      {/* Mobile Blocker: This will only be visible on screens smaller than 'lg' */}
      <div className="lg:hidden">
        <MobileBlocker />
      </div>
    </>
  );
}
