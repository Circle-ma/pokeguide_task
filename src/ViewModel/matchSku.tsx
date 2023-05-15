import { create } from "zustand";
import Sku from "../Model/sku";

interface MatchedSkuState {
    matchedSku: Sku | undefined;
    setMatchedSku: (sku: Sku) => void;
}

const useMatchedSku = create<MatchedSkuState>((set) => ({
    matchedSku: undefined,
    setMatchedSku: (sku: Sku) => {
        set({ matchedSku: sku });
    },
}));

export default useMatchedSku;
