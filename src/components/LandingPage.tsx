import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-4 text-gray-900 sm:p-8 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="animate-fade-in mx-auto max-w-4xl py-16 text-center sm:py-24">
        <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-4xl leading-tight font-extrabold tracking-tight text-transparent drop-shadow-lg sm:text-6xl dark:from-purple-400 dark:to-indigo-400">
          Craft Stunning Quote Cards, Instantly.
        </h1>
        <p className="mb-8 text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-300">
          Your AI-powered design studio for social media.
        </p>
        <button className="transform rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-purple-600 hover:to-indigo-600 focus:ring-4 focus:ring-purple-300 focus:outline-none active:scale-95 dark:focus:ring-indigo-700">
          Create Quote Now
        </button>
      </section>

      {/* Features Section Placeholder */}
      <section className="mx-auto mt-16 w-full max-w-6xl border-t border-gray-200 py-16 text-center sm:py-24 dark:border-gray-700">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 sm:text-4xl dark:text-gray-200">
          Features
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          [Future content for features goes here, e.g., AI suggestions,
          customizable templates, various export formats.]
        </p>
      </section>

      {/* Examples Section Placeholder */}
      <section className="mx-auto mt-16 w-full max-w-6xl border-t border-gray-200 py-16 text-center sm:py-24 dark:border-gray-700">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 sm:text-4xl dark:text-gray-200">
          Examples
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          [Future content for examples goes here, e.g., image gallery of
          generated quotes, user testimonials.]
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
