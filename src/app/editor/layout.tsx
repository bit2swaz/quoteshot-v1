import Navbar from "~/components/layout/Navbar";
import Sidebar from "~/components/layout/Sidebar";

// This layout component will wrap all pages inside the /editor route.
export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Sidebar />
      {/* The main content area for the editor.
        The pl-80 class adds left padding to account for the sidebar's width.
        The pt-16 class adds top padding to account for the navbar's height.
      */}
      <main className="pt-16 pl-80">{children}</main>
    </div>
  );
}
