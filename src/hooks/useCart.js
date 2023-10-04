import { cartReducer, initialValue } from "../reducers/cart"

export function useCart() {
    const [state, dispatch] = useReducer(cartReducer, initialValue)

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    const removeFromCart = (product) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }

    const clearCart = (product) => {
        dispatch({
            type: 'CLEAR_CART',
            payload: product
        })
    }

    return { cart: state, addToCart, removeFromCart, clearCart }
}