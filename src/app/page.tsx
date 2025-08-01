import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-8 text-white">
      <div className="max-w-3xl text-center">
        {/* Header Section */}
        <h1 className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
          Turn Words into Visuals.
        </h1>
        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          Create aesthetic quote cards in seconds. For your Instagram story, X
          feed, or just for yourself. Fast, focused, and frictionless.
        </p>

        {/* Call to Action */}
        <div className="mt-10">
          <Link
            href="/editor"
            className="transform rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-500"
          >
            Create Quote Now &rarr;
          </Link>
        </div>

        {/* Preview Placeholder */}
        <div className="mx-auto mt-16 w-full max-w-xl">
          <p className="mb-2 text-sm text-gray-500">PREVIEW</p>
          <div className="aspect-square rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl">
            <div className="flex h-full w-full items-center justify-center text-center">
              <p className="text-2xl text-gray-400">
                &quot;The journey of a thousand miles begins with a single
                step.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
