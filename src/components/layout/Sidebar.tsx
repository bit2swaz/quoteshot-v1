"use client";

import React from "react";
import TextControl from "~/components/editor/controls/TextControl";

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 z-10 h-[calc(100vh-4rem)] w-80 border-r border-gray-700 bg-gray-800 p-6">
      <div className="space-y-6">
        {/* Render our new TextControl component */}
        <TextControl />

        {/* Placeholders for future controls */}
        <div className="h-px bg-gray-700"></div>
        <div className="h-32 animate-pulse rounded-lg bg-gray-700/50"></div>
        <div className="h-48 animate-pulse rounded-lg bg-gray-700/50"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
