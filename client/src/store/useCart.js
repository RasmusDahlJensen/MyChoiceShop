import { create } from 'zustand'

export const useCart = create((set, get) => ({
  
    cart: [],
    totalItems: 0,
    totalPrice: 0,

    addProduct: (product) => {
        //get cart and get if item is in cart
        const cart = get().cart
        const cartItem = cart.find(item => item.id === product.id)

        //if cart item exist
        if(cartItem){
            const updatedCart = cart.map(p => {
                if(p.id === product.id ){
                    return {...product, amount: p.amount + 1}
                }else{
                    return p
                }  
            })
            set((state) => ({
                cart:  updatedCart,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price,
            }))
        } else{
            //if cart item dont exist
            set((state) => ({
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price,
                cart: [{...product, amount: 1}, ...state.cart]
            }))
        }

    },

    decreaseProduct: (product) => {
        //get cart, prices and item 
        const cart = get().cart
        let totalItems = get().totalItems
        let totalPrice = get().totalPrice

        const updatedCart = cart.filter((p) => {
            if(product.id === p.id && p.amount === 1){
                //if id matches and isn't the last amount decrease items and price
                totalItems = totalItems - 1
                totalPrice = totalPrice - product.price
            } else if(product.id === p.id){
                //if id matches
                totalItems = totalItems - 1
                totalPrice = totalPrice - product.price
                return {...p, amount: p.amount -= 1}
            } else {
                return p
            }
        })

        set((state) => ({
            cart: updatedCart,
            totalItems,
            totalPrice,
        }))
    },

    increaseProduct: (product) => {
        //get cart, prices and item 
        const cart = get().cart

        const updatedCart = cart.map((p) => {
            if(product.id === p.id){
                //if id matches
                return {...p, amount: p.amount + 1}
            } else {
                //if id dont match
                return p
            }
        })

        //set new state
        set((state) => ({
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
            cart: updatedCart,
        }))
    },


}))