"use client";

import React, { useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 rounded-md bg-white p-2 shadow-lg md:hidden dark:bg-gray-800"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar Overlay for small screens */}
      {isSidebarOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex-shrink-0 transform overflow-y-auto bg-white p-4 shadow-md transition-transform duration-300 ease-in-out dark:bg-gray-800 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:block md:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <h2 className="mb-4 text-xl font-semibold">App Sidebar</h2>
          {/* Placeholder for app-specific sidebar content */}
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                App Link 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                App Link 2
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col overflow-hidden md:ml-0">
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
