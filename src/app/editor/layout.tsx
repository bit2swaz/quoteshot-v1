"use client";

import React from "react";
import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";
import MobileTabBar from "~/components/editor/MobileTabBar";
import MobileControlPanel from "~/components/editor/MobileControlPanel";
import { useCanvasStore } from "~/store/canvasStore";
import TextControl from "~/components/editor/controls/TextControl";
import StyleControl from "~/components/editor/controls/StyleControl";
import BackgroundControl from "~/components/editor/controls/BackgroundControl";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeMobilePanel } = useCanvasStore();

  const renderPanelContent = () => {
    switch (activeMobilePanel) {
      case "text":
        return <TextControl />;
      case "style":
        return <StyleControl />;
      case "background":
        return <BackgroundControl />;
      default:
        return null;
    }
  };

  const getPanelTitle = () => {
    switch (activeMobilePanel) {
      case "text":
        return "Text";
      case "style":
        return "Style";
      case "background":
        return "Background";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Navbar
        isSidebarOpen={false}
        toggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex flex-1 pt-16">
        {/* Desktop Sidebar */}
        <Sidebar isSidebarOpen={false} />
        {/* Main content area now has padding for the mobile tab bar */}
        <main className="flex-1 pb-16 lg:ml-80 lg:pb-0">{children}</main>
      </div>
      {/* Mobile UI */}
      <MobileTabBar />
      {activeMobilePanel && (
        <MobileControlPanel title={getPanelTitle()}>
          {renderPanelContent()}
        </MobileControlPanel>
      )}
    </div>
  );
}
