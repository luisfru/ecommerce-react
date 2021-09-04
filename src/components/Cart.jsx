import React, { useContext } from 'react'

import CartContext from '../contexts/CartContext'

const Cart = () => {
  const { products } = useContext(CartContext)

  return (
    <div>
      <div>Carrito</div>
      {products.length > 0 && products.length}
    </div>
  )
}

export default Cart
