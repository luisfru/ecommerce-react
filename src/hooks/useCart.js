import { useState } from 'react'

export const useCart = () => {
  const [products, setProducts] = useState([])

  const addToCart = product => {
    setProducts([...products, product])
  }
  const removeFromCart = product => {
    setProducts(product)
  }
  return {
    products,
    addToCart,
    removeFromCart
  }
}
