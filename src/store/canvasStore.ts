import { create } from "zustand";

// Define the types for our state
interface CanvasState {
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

// Define the types for our actions (functions to update the state)
interface CanvasActions {
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setText: (text: string) => void;
  // New action to update the text's x and y coordinates
  setTextPosition: (position: { x: number; y: number }) => void;
}

// Create the Zustand store
export const useCanvasStore = create<CanvasState & CanvasActions>((set) => ({
  // Initial default values for the canvas state
  width: 1080,
  height: 1080, // Default to Instagram Post size
  backgroundColor: "#1a202c", // A dark gray
  text: "The journey of a thousand miles begins with a single step.",
  fontSize: 64,
  fontFamily: "Inter",
  textColor: "#ffffff",
  textX: 540,
  textY: 480,

  // --- ACTIONS ---
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setText: (text) => set({ text }),
  // Implementation for our new action
  setTextPosition: (position) => set({ textX: position.x, textY: position.y }),
}));
