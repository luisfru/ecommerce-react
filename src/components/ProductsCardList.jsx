import React, { useEffect, useState } from 'react'

import ProductsCard from './ProductsCard'

const ProductsCardList = () => {
  const [productsList, setProductsList] = useState([])

  useEffect(() => {
    window.fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductsList(data))
  }, [])

  return (
    <div>
      {productsList.map(product => (
        <ProductsCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductsCardList
