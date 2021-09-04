import React, { useContext } from 'react'

import CartContext from '../contexts/CartContext'

const ProductsCard = ({ category, description, id, image, price, rating, title }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div>
      <img src={image} />
      <div>
        <h4>{title}</h4>
        <span>{rating.rate}</span>
        <span>{rating.count}</span>
      </div>
      <p>{description}</p>
      <div>{price}</div>
      <button onClick={handleAddToCart({ category, description, id, image, price, rating, title })}>Add to cart</button>
    </div>
  )
}

export default ProductsCard
