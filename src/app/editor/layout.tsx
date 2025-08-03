"use client";

import React, { useState } from "react";
import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      {/* Pass sidebar state and toggle function to Navbar */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-1 pt-16">
        {/* Pass sidebar state to Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />
        {/* Main content area adjusts its left margin based on sidebar state */}
        <main
          className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
