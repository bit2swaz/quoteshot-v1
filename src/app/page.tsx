/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Image, Wind, Download, Type } from "lucide-react";

// --- Reusable FeatureCard Component ---
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// --- Data for our Showcase Gallery ---
const examples = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    fontClass: "font-serif",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    fontClass: "font-sans",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=1770&auto=format&fit=crop",
    quote: "Simplicity is the ultimate sophistication.",
    fontClass: "font-mono",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-gray-900 text-white">
      {/* --- Hero Section --- */}
      <section className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
        <h1 className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
          Turn Words into Visuals.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
          Create aesthetic quote cards in seconds. For your Instagram story, X
          feed, or just for yourself. Fast, focused, and frictionless.
        </p>
        <div className="mt-10">
          <Link
            href="/editor"
            className="transform rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-500"
          >
            Create Quote Now &rarr;
          </Link>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mt-4 text-gray-400">
              A focused toolset to get you from idea to image in record time.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Image size={24} />}
              title="Dynamic Backgrounds"
              description="Choose from solid colors or millions of high-quality images from Unsplash."
            />
            <FeatureCard
              icon={<Type size={24} />}
              title="Curated Fonts"
              description="Access a hand-picked selection of beautiful fonts perfect for making a statement."
            />
            <FeatureCard
              icon={<Wind size={24} />}
              title="Instant Resizing"
              description="Start with presets for posts, stories, and more. Your design adapts instantly."
            />
            <FeatureCard
              icon={<Download size={24} />}
              title="One-Click Export"
              description="Download your creation as a high-quality PNG or get all sizes in a single ZIP file."
            />
          </div>
        </div>
      </section>

      {/* --- Showcase Gallery Section --- */}
      <section className="bg-gray-900/50 px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-white">
              Designed for Impact.
            </h2>
            <p className="mt-4 text-gray-400">
              Create share-worthy content that stops the scroll.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg"
              >
                <img
                  src={example.imageUrl}
                  alt={`Example quote card ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <p
                    className={`text-center text-2xl font-semibold text-white ${example.fontClass} text-shadow-lg`}
                  >
                    &quot;{example.quote}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
