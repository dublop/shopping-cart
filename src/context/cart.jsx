import { createContext } from "react"
import { useCart } from "../hooks/useCart"


export const CartContext = createContext()

export function CartProvider({ children }) {
    const { cart, addToCart, removeFromCart, clearCart } = useCart()
    return (
        <CartContext.Provider value={{
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}