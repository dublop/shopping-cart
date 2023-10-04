import { useContext } from "react";
import { CartIcon, CartPlus, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "../context/cart";

export function Cart() {
    const { cart, addToCart, clearCart } = useContext(CartContext)
    return (
        <>
        <label htmlFor='cart' className='cart-icon'>
          <CartIcon />
        </label>
        <input type="checkbox" id='cart' hidden/>

        <aside className="cart">
            <ul>
            {
                cart.map(item => (
                    <li className="cart-item"  key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <h4>{item.title} - <span>{item.price}</span></h4>
                        <div>
                            <span>Qty: {item.quantity}</span>
                            <button onClick={() => addToCart(item)}>
                                <CartPlus />
                            </button>
                        </div>
                    </li>
                 ))
            }
            </ul>
            <button className="clear-cart" onClick={clearCart}>
                <RemoveFromCartIcon />
            </button>
        </aside>
        </>
    )
}