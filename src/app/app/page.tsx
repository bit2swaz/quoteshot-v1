"use client";

import React from "react";
import UserOnboarding from "@/components/UserOnboarding";
import dynamic from "next/dynamic";
import { useQuote } from "@/lib/quote-context";

// Import the props interface
import { type CanvasComponentProps } from "@/components/Canvas";

const CanvasComponent = dynamic<CanvasComponentProps>(
  () => import("@/components/Canvas"),
  {
    ssr: false,
  },
);

const AppEditorPage: React.FC = () => {
  const { quoteText, setQuoteText } = useQuote();

  return (
    <UserOnboarding>
      <CanvasComponent quoteText={quoteText} setQuoteText={setQuoteText} />
    </UserOnboarding>
  );
};

export default AppEditorPage;
