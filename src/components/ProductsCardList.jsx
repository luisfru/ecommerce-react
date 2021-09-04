import React, { useEffect } from 'react'

import ProductsCard 

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
      <ProductsCard key={product.id} {...product}
    ))}
    </div>
  )
}

  export default ProductsCardList