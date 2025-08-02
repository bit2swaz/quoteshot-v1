"use client";

import React from "react";
import TextControl from "~/components/editor/controls/TextControl";
import StyleControl from "~/components/editor/controls/StyleControl";
import BackgroundControl from "~/components/editor/controls/BackgroundControl";
import ResolutionControl from "~/components/editor/controls/ResolutionControl"; // Import the new component

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 z-10 h-[calc(100vh-4rem)] w-80 overflow-y-auto border-r border-gray-700 bg-gray-800 p-6">
      <div className="space-y-6">
        {/* Add the new resolution control at the top */}
        <ResolutionControl />

        <div className="h-px bg-gray-700"></div>
        <TextControl />
        <div className="h-px bg-gray-700"></div>
        <StyleControl />
        <div className="h-px bg-gray-700"></div>
        <BackgroundControl />
      </div>
    </aside>
  );
};

export default Sidebar;
