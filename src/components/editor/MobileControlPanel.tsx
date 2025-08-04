"use client";

import React from "react";
import { X } from "lucide-react";
import { useCanvasStore } from "~/store/canvasStore";

interface MobileControlPanelProps {
  title: string;
  children: React.ReactNode;
}

const MobileControlPanel = ({ title, children }: MobileControlPanelProps) => {
  const { setActiveMobilePanel } = useCanvasStore();

  return (
    <div className="fixed inset-0 z-40 flex flex-col justify-end lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setActiveMobilePanel(null)}
      ></div>

      {/* Panel */}
      <div
        className="animate-fade-in-up relative rounded-t-2xl border-t border-gray-700 bg-gray-800 p-4"
        style={{ animationDuration: "0.3s" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={() => setActiveMobilePanel(null)}
            className="text-gray-400"
          >
            <X size={24} />
          </button>
        </div>
        <div className="max-h-[40vh] overflow-y-auto pr-2">{children}</div>
      </div>
    </div>
  );
};

export default MobileControlPanel;
