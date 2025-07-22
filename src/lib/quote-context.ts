"use client";

import { createContext, useContext } from "react";

interface QuoteContextType {
  quoteText: string;
  setQuoteText: (text: string) => void;
}

export const QuoteContext = createContext<QuoteContextType | undefined>(
  undefined,
);

export const useQuote = (): QuoteContextType => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
};
