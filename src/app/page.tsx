/* eslint-disable jsx-a11y/alt-text */
"use client";

import Link from "next/link";
import { Image, Wind, Download, Type } from "lucide-react";
import LandingNavbar from "~/components/layout/LandingNavbar";
import React, { useEffect, useRef, useState } from "react";

// --- Reusable Animated Card Component ---
const AnimatedCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;

      const rotateX = (y / height - 0.5) * -20; // Max rotation 10 degrees
      const rotateY = (x / width - 0.5) * 20; // Max rotation 10 degrees

      card.style.setProperty("--card-rotate-x", `${rotateX}deg`);
      card.style.setProperty("--card-rotate-y", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty("--card-rotate-x", "0deg");
      card.style.setProperty("--card-rotate-y", "0deg");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className={`card-3d ${className}`}>
      {children}
    </div>
  );
};

// --- Main Landing Page ---
export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <>
      <LandingNavbar />
      <main className="overflow-x-hidden text-white">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center p-8 pt-20 text-center">
          <div
            className={`transition-opacity duration-1000 ${isMounted ? "opacity-100" : "opacity-0"}`}
          >
            <h1
              style={{ animationDelay: "0.2s" }}
              className="animate-fade-in-up bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl"
            >
              Turn Words into Visuals.
            </h1>
            <p
              style={{ animationDelay: "0.4s" }}
              className="animate-fade-in-up mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
            >
              Because your brilliant thoughts deserve to look better than a
              default tweet.
            </p>
            <div
              style={{ animationDelay: "0.6s" }}
              className="animate-fade-in-up mt-10"
            >
              <Link
                href="/editor"
                className="inline-block transform rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-110 hover:bg-indigo-500 active:scale-100"
              >
                Create Quote Now &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-8 py-20">
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
              <AnimatedCard>
                <div className="h-full rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                    <Image size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Dynamic Backgrounds
                  </h3>
                  <p className="text-gray-400">
                    Choose from solid colors or millions of high-quality images
                    from Unsplash.
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard>
                <div className="h-full rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                    <Type size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Curated Fonts
                  </h3>
                  <p className="text-gray-400">
                    Access a hand-picked selection of beautiful fonts perfect
                    for making a statement.
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard>
                <div className="h-full rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                    <Wind size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Instant Resizing
                  </h3>
                  <p className="text-gray-400">
                    Start with presets for posts, stories, and more. Your design
                    adapts instantly.
                  </p>
                </div>
              </AnimatedCard>
              <AnimatedCard>
                <div className="h-full rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                    <Download size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    One-Click Export
                  </h3>
                  <p className="text-gray-400">
                    Download your creation as a high-quality PNG or get all
                    sizes in a single ZIP file.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Showcase Gallery Section */}
        <section id="showcase" className="bg-gray-900/50 px-8 py-20">
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
              {/* Showcase examples would go here, wrapped in AnimatedCard */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
