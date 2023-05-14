import { create } from "zustand";

interface QuantityState {
    quantity: number;
    increase: () => void;
    decrease: () => void;
}

const useQuantityStore = create<QuantityState>()((set) => ({
    quantity: 0,
    increase: () => set((state) => ({ quantity: state.quantity + 1 })),
    decrease: () => set((state) => ({ quantity: state.quantity - 1 })),
}));

export default useQuantityStore;
