import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { useFilters } from './hooks/useFilters.js'
import { Filters } from './components/Filters'
import { CartProvider } from './context/cart'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  const categories = () => {
    const categoriesArr = initialProducts.map(product => product.category)
    const newArr = []
    categoriesArr.forEach(category => {
      if(!newArr.includes(category)) {
        newArr.push(category)
      }
    })
    return newArr
  }

  return (
    <CartProvider>
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <Filters categories={categories()}/>
        <Products products={filteredProducts}/>    
        <Cart/>    
      </main>
    </CartProvider>
  )
}

export default App
