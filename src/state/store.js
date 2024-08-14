import { create } from "zustand";

const store = create((set) => ({
    Currency: 'usd',
    setCurrency: (newCurrency) => set((state) => {
        return{
            ...state,
            currency: newCurrency
        }
    })
}));

export default store;