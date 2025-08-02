/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

interface CanvasActions {
  openWelcomeModal: () => void;
  closeWelcomeModal: () => void;
  resetState: () => void; // New action to reset the canvas
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  // ... other actions
  setBackgroundColor: (backgroundColor: string) => void;
  setBackgroundImage: (imageUrl: string) => void;
}

// We now wrap our store creation in the `persist` middleware
export const useCanvasStore = create<
  CanvasState & Omit<CanvasActions, "openWelcomeModal">
>()(
  persist(
    (set) => ({
      ...initialState,
      isWelcomeModalOpen: true,

      // --- ACTIONS ---
      openWelcomeModal: () => set({ isWelcomeModalOpen: true }),
      closeWelcomeModal: () => set({ isWelcomeModalOpen: false }),
      // This action resets the canvas state to its initial values
      resetState: () => set(initialState),
      setWidth: (width) => set({ width }),
      setHeight: (height) => set({ height }),
      setText: (text: any) => set({ text }),
      setTextPosition: (position: { x: any; y: any }) =>
        set({ textX: position.x, textY: position.y }),
      setFontSize: (fontSize: any) => set({ fontSize }),
      setFontFamily: (fontFamily: any) => set({ fontFamily }),
      setTextColor: (textColor: any) => set({ textColor }),
      setBackgroundColor: (backgroundColor) =>
        set({ backgroundColor, backgroundImage: null }),
      setBackgroundImage: (imageUrl) => set({ backgroundImage: imageUrl }),
      clearBackgroundImage: () => set({ backgroundImage: null }),
    }),
    {
      name: "quoteshot-storage",
      // We only want to persist the design, not the modal's open/closed state.
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !["isWelcomeModalOpen"].includes(key),
          ),
        ),
    },
  ),
);
