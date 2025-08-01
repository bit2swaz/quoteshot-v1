import React from "react";

// Simple placeholder for an icon. You can replace this with a real icon library later.
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
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500">
          Download
        </button>
        <IconPlaceholder />
        <IconPlaceholder />
      </div>
    </nav>
  );
};

export default Navbar;
