"use client";

import Link from "next/link";
import React from "react";

const LandingNavbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-30 border-b border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Updated Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          <span className="text-2xl font-bold text-white">Quoteshot</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#showcase" className="transition-colors hover:text-white">
            Showcase
          </a>
          <a
            href="#"
            className="cursor-not-allowed opacity-50 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="cursor-not-allowed opacity-50 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="cursor-not-allowed text-sm font-medium text-gray-300 opacity-50 transition-colors hover:text-white">
            Sign In
          </button>
          <Link
            href="/editor"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Launch Editor
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
