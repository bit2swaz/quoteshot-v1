"use client";

import React, { useEffect } from "react";
import TextControl from "~/components/editor/controls/TextControl";
import StyleControl from "~/components/editor/controls/StyleControl";
import BackgroundControl from "~/components/editor/controls/BackgroundControl";

const Sidebar = () => {
  // This useEffect will add the animation class to the elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".sidebar-animate")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed top-16 left-0 z-10 h-[calc(100vh-4rem)] w-80 overflow-y-auto border-r border-gray-700 bg-gray-800 p-6">
      <div className="space-y-6">
        <div className="sidebar-animate" style={{ animationDelay: "0.1s" }}>
          <TextControl />
        </div>
        <div
          className="sidebar-animate h-px bg-gray-700"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div className="sidebar-animate" style={{ animationDelay: "0.3s" }}>
          <StyleControl />
        </div>
        <div
          className="sidebar-animate h-px bg-gray-700"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div className="sidebar-animate" style={{ animationDelay: "0.5s" }}>
          <BackgroundControl />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
