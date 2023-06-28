import { create } from 'zustand'

const useStore = create((set) => ({
  cart: [],
    addProduct: (product) => {
        set((state) => {
            cart: [product, ...state.cart]
        })
    },
    removeAllProducts: () => set((state) => {
        cart: []
    }),
    removeProducts: (productId) => {
        set((state) => {
        cart: state.cart.map((product) => product.id !== productId)
        })
    }
}))