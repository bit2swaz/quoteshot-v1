"use client";

import React, { useState, useEffect } from "react";

interface UserOnboardingProps {
  children: React.ReactNode;
}

const LOCAL_STORAGE_KEY = "quoteshot_username";

const UserOnboarding: React.FC<UserOnboardingProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [inputName, setInputName] = useState<string>("");
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [isOverlayFadingOut, setIsOverlayFadingOut] = useState<boolean>(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(false);
  const [isWelcomeMessageFadingOut, setIsWelcomeMessageFadingOut] =
    useState<boolean>(false);

  // Check localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsername = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedUsername) {
        setUsername(storedUsername);
        setShowOverlay(false); // Do not show overlay if username exists
        setShowWelcomeMessage(true); // Show welcome message
      } else {
        setShowOverlay(true); // Show overlay if no username
      }
    }
  }, []);

  // Handle overlay fade out transition
  useEffect(() => {
    if (username && !showOverlay) {
      setIsOverlayFadingOut(true);
      const timer = setTimeout(() => {
        // Optionally, if you had complex overlay content that needed to be removed
        // from the DOM after fading, you would do it here.
      }, 500); // Duration of fade-out animation
      return () => clearTimeout(timer);
    }
  }, [username, showOverlay]);

  // Handle welcome message fade out transition
  useEffect(() => {
    if (showWelcomeMessage) {
      setIsWelcomeMessageFadingOut(false); // Ensure it's not fading out when first shown
      const timer = setTimeout(() => {
        setIsWelcomeMessageFadingOut(true);
        const hideTimer = setTimeout(() => {
          setShowWelcomeMessage(false);
        }, 500); // Duration of fade-out for welcome message
        return () => clearTimeout(hideTimer);
      }, 3000); // Display duration before fading out (3 seconds)
      return () => clearTimeout(timer);
    }
  }, [showWelcomeMessage]);

  const handleLetsGo = () => {
    if (inputName.trim()) {
      const trimmedName = inputName.trim();
      localStorage.setItem(LOCAL_STORAGE_KEY, trimmedName);
      setUsername(trimmedName);
      setShowOverlay(false);
      setShowWelcomeMessage(true); // Show welcome message after setting username
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  return (
    <>
      {username && children}

      {showWelcomeMessage && username && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-6 py-3 text-white shadow-lg transition-opacity duration-500 ease-in-out ${isWelcomeMessageFadingOut ? "opacity-0" : "opacity-100"} ${isWelcomeMessageFadingOut ? "pointer-events-none" : "pointer-events-auto"} `}
          style={{ zIndex: 1001 }}
        >
          Welcome back, {username}!
        </div>
      )}

      {showOverlay && (
        <div
          className={`bg-opacity-90 fixed inset-0 flex items-center justify-center bg-gray-900 transition-opacity duration-500 ease-in-out ${isOverlayFadingOut ? "opacity-0" : "opacity-100"} `}
          style={{ zIndex: 1000 }}
        >
          <div className="ease-out-back w-full max-w-md scale-100 transform rounded-lg bg-white p-8 text-center shadow-2xl transition-transform duration-500 dark:bg-gray-800 dark:text-white">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
              Welcome to Quoteshot!
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Please tell us your name or nickname to get started.
            </p>
            <input
              type="text"
              placeholder="Your Name/Nickname"
              className="mb-6 w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={inputName}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleLetsGo();
                }
              }}
            />
            <button
              onClick={handleLetsGo}
              className="w-full transform rounded-md bg-blue-600 py-3 text-lg font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-98"
            >
              Let&apos;s Go!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOnboarding;
