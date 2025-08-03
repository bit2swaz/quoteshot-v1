import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the initial state as a constant so we can reuse it for resetting
const initialState = {
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
};

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

// The CanvasActions interface is now simpler and more accurate.
interface CanvasActions {
  closeWelcomeModal: () => void;
  resetState: () => void;
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

// The generic type is now correct: `CanvasState & CanvasActions`
export const useCanvasStore = create<CanvasState & CanvasActions>()(
  persist(
    (set) => ({
      ...initialState,
      isWelcomeModalOpen: true,

      // --- ACTIONS ---
      closeWelcomeModal: () => set({ isWelcomeModalOpen: false }),
      resetState: () => set(initialState),
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
      name: "quoteshot-storage",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["isWelcomeModalOpen"].includes(key),
          ),
        ),
    },
  ),
);
