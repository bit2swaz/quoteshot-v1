"use client";

import React from "react";
import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";
import Footer from "~/components/layout/Footer";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This wrapper is for the desktop-only view
    <div className="hidden min-h-screen bg-gray-900 text-white lg:block">
      <Navbar />
      <Sidebar />
      {/* This div wraps all content to the right of the sidebar */}
      <div className="ml-80 flex flex-col" style={{ height: "100vh" }}>
        {/* The main content area grows to fill space, pushing the footer down */}
        <main className="flex-1 overflow-y-auto pt-16">{children}</main>
        {/* The footer is now inside the container with the correct left margin */}
        <Footer />
      </div>
    </div>
  );
}
