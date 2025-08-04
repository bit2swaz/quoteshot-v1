import React from "react";
import { Smartphone } from "lucide-react";

const MobileBlocker = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 p-8 text-center text-white">
      <Smartphone size={48} className="mb-4 text-indigo-400" />
      <h2 className="mb-2 text-2xl font-bold">
        Mobile Experience Coming Soon!
      </h2>
      <p className="max-w-md text-gray-400">
        QuoteShot is currently optimized for desktop. Please visit on a larger
        screen for the best experience.
      </p>
    </div>
  );
};

export default MobileBlocker;
