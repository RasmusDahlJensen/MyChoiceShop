import React from 'react'
import ProductCard from './ProductCard'

import styles from "./Products.module.css"
import SkeletonProductCard from '../skeletons/SkeletonProductCard';

function Products({data, loading}) {
  console.log(data);
  return (
    <section className={styles.products}>
      {loading && [1,2,3,4,5].map(() => (
        <SkeletonProductCard />
      ))}
      {data && data.map(product => (
        <ProductCard data={product} key={product.id}/>
      )) }
    </section>
  )
}

export default Products