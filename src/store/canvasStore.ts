import { create } from "zustand";

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

interface CanvasActions {
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setText: (text: string) => void;
  setTextPosition: (position: { x: number; y: number }) => void;
}

export const useCanvasStore = create<CanvasState & CanvasActions>((set) => ({
  width: 1080,
  height: 1080,
  backgroundColor: "#1a202c",
  text: "The journey of a thousand miles begins with a single step.",
  fontSize: 64,
  fontFamily: "Inter",
  textColor: "#ffffff",
  textX: 100,
  textY: 100,

  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setText: (text) => set({ text }),
  setTextPosition: (position) => set({ textX: position.x, textY: position.y }),
}));
