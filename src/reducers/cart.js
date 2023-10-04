export const initialValue =  JSON.parse(window.localStorage.getItem('cart-01')) || []

const updateLocalStorage = (newCart) => {
    window.localStorage.setItem('cart-01', JSON.stringify(newCart))
}

export const cartReducer = (state, action) => {
    const { id } = action
    const isInCart = [...state].findIndex(item => item.id === id)

    switch (action.type) {
        case 'ADD_TO_CART':
            if(isInCart >= 0) {
                const newState = structuredClone(state)
                newCart[isInCart].quantity += 1
                updateLocalStorage(newState)
    
                return newState
            } else {
                const newState = [...state, {...action, quantity: 1}]
                updateCart(newState)

                return newState
            }
        case 'REMOVE_FROM_CART':
            const newState = [...state].filter(item => item.id != id)
            updateLocalStorage(newState)

            return setCart(newCart)
        case 'CLEAR_CART': 
            updateLocalStorage([])
            setCart([])
    }

}
