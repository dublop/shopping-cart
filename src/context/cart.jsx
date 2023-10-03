import { useState, createContext } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const updateCart = (product, action) => {
        const isInCart = [...cart].findIndex(item => item.id === product.id)

        if(action === 'add') {
            if(isInCart >= 0) {
                const newCart = structuredClone(cart)
                newCart[isInCart].quantity += 1
                return setCart(newCart)
            } else {
                return setCart(prevState => [
                    ...prevState,
                    {
                        ...product,
                        quantity: 1
                    }
                ])
            }
        } else {
            const newCart = [...cart].filter(item => item.id != product.id)
            return setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            updateCart,
            clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}