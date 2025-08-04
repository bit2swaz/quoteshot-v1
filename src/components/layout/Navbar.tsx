"use client";

import React from "react";
import ExportControl from "~/components/editor/controls/ExportControl";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-30 flex h-16 items-center justify-between border-b border-gray-700 bg-gray-900 px-6">
      <Link href="/" className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
        <h1 className="text-xl font-bold text-white">QuoteShot</h1>
      </Link>
      <div className="flex items-center gap-4">
        <ExportControl />
      </div>
    </nav>
  );
};

export default Navbar;
