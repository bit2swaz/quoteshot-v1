"use client";

import React from "react";
import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";
import Footer from "~/components/layout/Footer";
import MobileBlocker from "~/components/layout/MobileBlocker";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Desktop Layout: Hidden on screens smaller than 'lg' */}
      <div className="hidden min-h-screen flex-col bg-gray-900 text-white lg:flex">
        <Navbar />
        <div className="flex flex-1 pt-16">
          <Sidebar />
          <main className="ml-80 flex flex-1 flex-col">
            {/* This makes the main content area fill available space */}
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </div>
      </div>

      {/* Mobile Blocker: Only visible on screens smaller than 'lg' */}
      <div className="lg:hidden">
        <MobileBlocker />
      </div>
    </>
  );
}
