"use client";

import React from "react";
import ExportControl from "~/components/editor/controls/ExportControl";
// Simple placeholder for an icon.
const IconPlaceholder = () => (
  <div className="h-6 w-6 rounded-md bg-gray-600"></div>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 flex h-16 items-center justify-between border-b border-gray-700 bg-gray-900 px-6">
      {/* Left side: Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
        <h1 className="text-xl font-bold text-white">Quoteshot</h1>
      </div>

      {/* Right side: Actions and User Info */}
      <div className="flex items-center gap-4">
        {/* Replace the old button with our new component */}
        <ExportControl />
        <IconPlaceholder />
        <IconPlaceholder />
      </div>
    </nav>
  );
};

export default Navbar;
