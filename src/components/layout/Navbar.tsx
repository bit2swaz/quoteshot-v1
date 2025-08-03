"use client";

import React from "react";
import ExportControl from "~/components/editor/controls/ExportControl";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Import the Link component

const Navbar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b border-gray-700 bg-gray-900 px-4 sm:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile Sidebar Toggle */}
        <button onClick={toggleSidebar} className="text-white lg:hidden">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo is now a clickable link to the homepage */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          <h1 className="hidden text-xl font-bold text-white sm:block">
            QuoteShot
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ExportControl />
      </div>
    </nav>
  );
};

export default Navbar;
