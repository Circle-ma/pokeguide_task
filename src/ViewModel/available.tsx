import { create } from "zustand";

interface AvailableState {
    isAvailable: boolean | undefined;
    setIsAvailable: (isAvailable: boolean) => void;
}

const useAvailableStore = create<AvailableState>((set) => ({
    isAvailable: true,
    setIsAvailable: (isAvailable: boolean) => set({ isAvailable: isAvailable }),
}));

export default useAvailableStore;

interface ChosenState {
    isChosen: boolean | undefined;
    setIsChosen: (isChosen: boolean) => void;
}

export const useChosenStore = create<ChosenState>((set) => ({
    isChosen: false,
    setIsChosen: (isChosen: boolean) => set({ isChosen: isChosen }),
}));
