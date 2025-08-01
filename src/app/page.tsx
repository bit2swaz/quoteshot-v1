import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Sidebar />

      {/* Main Canvas Area */}
      <div className="pt-16 pl-80">
        {" "}
        {/* Adjust for sidebar and navbar dimensions */}
        <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-gray-800/50">
          {/* The Canvas will go here */}
          <div className="flex h-3/4 w-1/2 items-center justify-center rounded-xl bg-gray-700 shadow-2xl">
            <p className="text-gray-400">Canvas Placeholder</p>
          </div>
        </div>
      </div>
    </main>
  );
}
