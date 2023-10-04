import { useState, createContext } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
    const initialValue =  JSON.parse(window.localStorage.getItem('cart-01')) || []

    const updateLocalStorage = (newCart) => {
        localStorage.setItem('cart-01', JSON.stringify(newCart))
    }

    const [cart, setCart] = useState(initialValue)

    const updateCart = (product, action) => {
        const isInCart = [...cart].findIndex(item => item.id === product.id)

        if(action === 'add') {
            if(isInCart >= 0) {
                const newCart = structuredClone(cart)
                newCart[isInCart].quantity += 1
                updateLocalStorage(newCart)
                return setCart(newCart)
            } else {
                const newCart = setCart(prevState => [
                    ...prevState,
                    {
                        ...product,
                        quantity: 1
                    }
                ])

                updateCart([...cart, {...product, quantity:1}])

                return newCart
            }
        } else {
            const newCart = [...cart].filter(item => item.id != product.id)
            updateLocalStorage(newCart)
            return setCart(newCart)
        }
    }

    const clearCart = () => {
        updateLocalStorage([])
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