// src/app/editor/layout.tsx
"use client";

import React from "react";
import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout is now only for desktop, so we can simplify it.
  return (
    <div className="hidden min-h-screen flex-col bg-gray-900 text-white lg:flex">
      <Navbar />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="ml-80 flex-1">{children}</main>
      </div>
    </div>
  );
}
