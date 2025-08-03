"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-30 border-b border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
      {/* Increased padding here (py-4) to make the navbar taller */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600"></div>
          <span className="text-2xl font-bold text-white">QuoteShot</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a href="#features" className="transition-colors hover:text-white">
            Features
          </a>
          <a href="#showcase" className="transition-colors hover:text-white">
            Showcase
          </a>
          {/* Disabled Links */}
          <a href="#" className="cursor-not-allowed opacity-50">
            About
          </a>
          <a href="#" className="cursor-not-allowed opacity-50">
            Contact Us
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Disabled Sign In Button */}
          <button className="cursor-not-allowed text-sm font-medium text-gray-300 opacity-50">
            Sign In
          </button>
          <Link
            href="/editor"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Launch Editor
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-gray-900/80 pb-4 backdrop-blur-lg md:hidden">
          <nav className="flex flex-col items-center gap-4 text-lg text-gray-200">
            <a href="#features" onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a href="#showcase" onClick={() => setIsOpen(false)}>
              Showcase
            </a>
            <a href="#" className="cursor-not-allowed opacity-50">
              About
            </a>
            <a href="#" className="cursor-not-allowed opacity-50">
              Contact Us
            </a>
            <Link
              href="/editor"
              className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white"
            >
              Launch Editor
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
