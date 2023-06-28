import React from 'react'
import ProductCard from './ProductCard'

import styles from "./Products.module.css"
import SkeletonProductCard from '../skeletons/SkeletonProductCard';

function Products({data, loading, title = false}) {
  // console.log(data);
  return (
    <section style={{padding: "20px"}}>
      {title && <h2>{title}</h2>}
     <div className={styles.products}>
        {loading && [1,2,3,4,5].map(() => (
          <SkeletonProductCard />
        ))}
        {data && data.length && data.map(product => (
          <ProductCard data={product} key={product.id} />
        )) }
    </div>
    </section>
  )
}

export default Products