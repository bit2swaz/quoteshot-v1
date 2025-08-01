import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 z-10 h-[calc(100vh-4rem)] w-80 border-r border-gray-700 bg-gray-800 p-6">
      <h2 className="mb-4 text-lg font-semibold text-white">Editor Controls</h2>
      <div className="space-y-4">
        <div className="h-24 animate-pulse rounded-lg bg-gray-700"></div>
        <div className="h-32 animate-pulse rounded-lg bg-gray-700"></div>
        <div className="h-48 animate-pulse rounded-lg bg-gray-700"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
