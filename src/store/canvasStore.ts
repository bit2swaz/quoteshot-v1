import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  width: 1080,
  height: 1080,
  backgroundColor: "#1a202c",
  backgroundImage: null,
  text: "“The journey of a thousand miles begins with a single step.”\n\n— Lao Tzu",
  fontSize: 64,
  fontFamily: "Inter",
  textColor: "#ffffff",
  textX: 100,
  textY: 100,
};

// Define the possible panels that can be open on mobile
type MobilePanel = "text" | "style" | "background" | null;

interface CanvasState {
  activeMobilePanel: MobilePanel; // New state for mobile UI
  isWelcomeModalOpen: boolean;
  // ... other state properties
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
  setActiveMobilePanel: (panel: MobilePanel) => void; // New action
  closeWelcomeModal: () => void;
  resetState: () => void;
  // ... other actions
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

export const useCanvasStore = create<CanvasState & CanvasActions>()(
  persist(
    (set) => ({
      ...initialState,
      activeMobilePanel: null, // Default to no panel being open
      isWelcomeModalOpen: true,

      // --- ACTIONS ---
      setActiveMobilePanel: (panel) => set({ activeMobilePanel: panel }),
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
            ([key]) =>
              !["isWelcomeModalOpen", "activeMobilePanel"].includes(key),
          ),
        ),
    },
  ),
);
