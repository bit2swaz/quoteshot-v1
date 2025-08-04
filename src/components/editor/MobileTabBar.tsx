/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Type, Palette, Image as ImageIcon } from "lucide-react";
import { useCanvasStore } from "~/store/canvasStore";

const MobileTabBar = () => {
  const { activeMobilePanel, setActiveMobilePanel } = useCanvasStore();

  const tabs = [
    { name: "text", icon: <Type size={24} /> },
    { name: "style", icon: <Palette size={24} /> },
    { name: "background", icon: <ImageIcon size={24} /> },
  ];

  return (
    <div className="fixed right-0 bottom-0 left-0 z-20 flex h-16 items-center justify-around border-t border-gray-700 bg-gray-900 lg:hidden">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveMobilePanel(tab.name as any)}
          className={`rounded-lg p-3 transition-colors ${
            activeMobilePanel === tab.name
              ? "bg-indigo-600 text-white"
              : "text-gray-400"
          }`}
        >
          {tab.icon}
        </button>
      ))}
    </div>
  );
};

export default MobileTabBar;
