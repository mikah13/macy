// store.ts
import { create } from "zustand";
import * as THREE from "three";
type Store = {
  assets: any[];
  selectedObject: THREE.Object3D | null;
  snapValue: number;
  setSelectedObject: (obj: THREE.Object3D) => void;
};

export const useStore = create<Store>((set) => ({
  assets: [],
  selectedObject: null,
  snapValue: 1,
  setSelectedObject: (obj) => set({ selectedObject: obj }),
}));
