import { create } from "zustand";

interface CanvasState {
  isWelcomeModalOpen: boolean; // New state to control the modal
  width: number;
  height: number;
  backgroundColor: string;
  text: string;
  fontSize: number;
  fontFamily: string;
  textColor: string;
  textX: number;
  textY: number;
}

interface CanvasActions {
  closeWelcomeModal: () => void; // New action to close the modal
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setText: (text: string) => void;
  setTextPosition: (position: { x: number; y: number }) => void;
  setFontSize: (fontSize: number) => void;
  setFontFamily: (fontFamily: string) => void;
  setTextColor: (textColor: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
}

export const useCanvasStore = create<CanvasState & CanvasActions>((set) => ({
  isWelcomeModalOpen: true, // Default to true so it shows on first load
  width: 1080,
  height: 1080,
  backgroundColor: "#1a202c",
  text: "The journey of a thousand miles begins with a single step.",
  fontSize: 64,
  fontFamily: "Inter",
  textColor: "#ffffff",
  textX: 100,
  textY: 100,

  // --- ACTIONS ---
  closeWelcomeModal: () => set({ isWelcomeModalOpen: false }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setText: (text) => set({ text }),
  setTextPosition: (position) => set({ textX: position.x, textY: position.y }),
  setFontSize: (fontSize) => set({ fontSize }),
  setFontFamily: (fontFamily) => set({ fontFamily }),
  setTextColor: (textColor) => set({ textColor }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
}));
