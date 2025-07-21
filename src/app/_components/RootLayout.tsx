import React from "react";
import { ThemeProvider } from "@/lib/theme";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-shrink-0 overflow-y-auto bg-white p-4 shadow-md md:block dark:bg-gray-800">
          <div className="flex h-full flex-col">
            <h2 className="mb-4 text-xl font-semibold">Sidebar</h2>
            {/* Placeholder for sidebar content */}
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Link 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
