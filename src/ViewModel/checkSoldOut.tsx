import { create } from "zustand";

interface SoldOutState {
    isSoldOut: boolean | undefined;
    setIsSoldOut: (isSoldOut: boolean) => void;
}

const useSoldOutStore = create<SoldOutState>((set) => ({
    isSoldOut: false,
    setIsSoldOut: (isSoldOut: boolean) => set({ isSoldOut: isSoldOut }),
}));

export default useSoldOutStore;
