// src/components/layout/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-6xl px-8 py-6 text-center text-sm text-gray-400">
        <p>
          © 2025 QuoteShot. Made with ❤️ by{" "}
          <a
            href="https://github.com/bit2swaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 transition-colors hover:text-indigo-300"
          >
            bit2swaz
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
