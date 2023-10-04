import { useContext } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "../context/cart";

export function  ProductItem ({id, title, thumbnail, price, isInCart, product}) {
    const { addToCart, removeFromCart } = useContext(CartContext)

    return (
      <li className='product' key={product.id}>
        <img src={thumbnail} alt={title} />
        <p className="product-name">{title}</p>
        <p className="price">${price} </p>
        <button className={isInCart ? 'incart' : ''} onClick={
          isInCart
          ?
          () => removeFromCart(product)
          :
          () => addToCart(product)
        }>
          {
            isInCart
            ?
            <RemoveFromCartIcon />
            :
            <AddToCartIcon />
          }
        </button>
      </li>
    )
}