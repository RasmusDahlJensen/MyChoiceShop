import React from 'react'
import ProductCard from './ProductCard'

import styles from "./Products.module.css"

function Products({data}) {
  console.log(data);
  return (
    <section className={styles.products}>
        {data && data.map(product => (
          <ProductCard data={product} key={product.id}/>
        )) }
    </section>
  )
}

export default Products