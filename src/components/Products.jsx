import { useContext } from "react";
import { CartContext } from "../context/cart";
import { ProductItem } from "./ProductItem";

export function Products({ products }) {
    const { cart } = useContext(CartContext)

    return (
      <>
        <ul className='products'>
        {
          products.map(product => {
            const isInCart = cart.findIndex(item => item.id === product.id) >= 0 
            return (
              <ProductItem {...product} isInCart={isInCart} product={product} />
            )
          })
        }
        </ul>
        </>
    )
}