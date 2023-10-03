import { products } from '../mocks/products.json'
export async function getProducts() {
    const response = await fetch(products)
    const data = await response.json()
    console.log(data)
    return data
}