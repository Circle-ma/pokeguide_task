import { create } from "zustand";

interface UserOptionsState {
    userOptions: number[];
    setUserOptions: (options: number[]) => void;
}

const useUserOptionsStore = create<UserOptionsState>()((set) => ({
    userOptions: [],
    setUserOptions: (options: number[]) => set({ userOptions: options }),
}));

export default useUserOptionsStore;
