import React from 'react'
import ProductCard from './ProductCard'

import styles from "./Products.module.css"

function Products({showMoreButton}) {
  console.log(showMoreButton);
  return (
    <section className={styles.products}>
        <ProductCard />
        
    </section>
  )
}

export default Products