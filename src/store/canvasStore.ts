import { create } from "zustand";

interface CanvasState {
  isWelcomeModalOpen: boolean;
  width: number;
  height: number;
  backgroundColor: string;
  backgroundImage: string | null; // Can be a URL string or null
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
  setBackgroundImage: (imageUrl: string) => void; // New action for images
  clearBackgroundImage: () => void; // New action to remove the image
}

export const useCanvasStore = create<CanvasState & CanvasActions>((set) => ({
  isWelcomeModalOpen: true,
  width: 1080,
  height: 1080,
  backgroundColor: "#1a202c",
  backgroundImage: null, // Default to no image
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
  // When setting a solid color, clear any existing background image.
  setBackgroundColor: (backgroundColor) =>
    set({ backgroundColor, backgroundImage: null }),
  // When setting an image, it becomes the new background.
  setBackgroundImage: (imageUrl) => set({ backgroundImage: imageUrl }),
  clearBackgroundImage: () => set({ backgroundImage: null }),
}));
