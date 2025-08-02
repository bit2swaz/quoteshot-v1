import { create } from "zustand";
import { persist } from "zustand/middleware";

// The state and action interfaces remain the same
interface CanvasState {
  isWelcomeModalOpen: boolean;
  width: number;
  height: number;
  backgroundColor: string;
  backgroundImage: string | null;
  text: string;
  fontSize: number;
  fontFamily: string;
  textColor: string;
  textX: number;
  textY: number;
}

interface CanvasActions {
  closeWelcomeModal: () => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setText: (text: string) => void;
  setTextPosition: (position: { x: number; y: number }) => void;
  setFontSize: (fontSize: number) => void;
  setFontFamily: (fontFamily: string) => void;
  setTextColor: (textColor: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setBackgroundImage: (imageUrl: string) => void;
  clearBackgroundImage: () => void;
}

// We now wrap our store creation in the `persist` middleware
export const useCanvasStore = create<CanvasState & CanvasActions>()(
  persist(
    (set) => ({
      // The initial state is the same as before
      isWelcomeModalOpen: true,
      width: 1080,
      height: 1080,
      backgroundColor: "#1a202c",
      backgroundImage: null,
      text: "The journey of a thousand miles begins with a single step.",
      fontSize: 64,
      fontFamily: "Inter",
      textColor: "#ffffff",
      textX: 100,
      textY: 100,

      // The actions are also the same
      closeWelcomeModal: () => set({ isWelcomeModalOpen: false }),
      setWidth: (width) => set({ width }),
      setHeight: (height) => set({ height }),
      setText: (text) => set({ text }),
      setTextPosition: (position) =>
        set({ textX: position.x, textY: position.y }),
      setFontSize: (fontSize) => set({ fontSize }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setTextColor: (textColor) => set({ textColor }),
      setBackgroundColor: (backgroundColor) =>
        set({ backgroundColor, backgroundImage: null }),
      setBackgroundImage: (imageUrl) => set({ backgroundImage: imageUrl }),
      clearBackgroundImage: () => set({ backgroundImage: null }),
    }),
    {
      // Configuration for the persistence
      name: "quoteshot-storage", // The key to use in localStorage
    },
  ),
);
