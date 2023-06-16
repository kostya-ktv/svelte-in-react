import { readable } from "svelte/store";
import { create } from "zustand";

interface IStore {
    count: number
    increment: () => void
}

const useStore = create<IStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1}))
}))

export const counter = readable(useStore.getState(), (set) => {
    const unsubscribe = useStore.subscribe(set)
    return () => unsubscribe()
})
export default useStore