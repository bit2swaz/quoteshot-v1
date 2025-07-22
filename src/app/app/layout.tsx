import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 overflow-y-auto bg-white p-4 shadow-md md:block dark:bg-gray-800">
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
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
