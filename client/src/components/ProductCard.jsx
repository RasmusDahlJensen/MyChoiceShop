import React from 'react'

import styles from "./ProductCard.module.css"
import { Link } from 'react-router-dom';

function ProductCard({data, classes}) {
  return (
    <Link to={`/product/${data.id}`} style={{textDecoration: "none", color: "black"}}>
      <article className={`${styles.card} ${classes}`}>
        <img src={data.image} alt={data.product_name} />
        <div className={styles.text}>
          <h2>{data.product_name.slice(0,29)}</h2>
          <p>{data.description.slice(0,50)}...</p>
          <span >
            Kr {data.price}
          </span>
          
        </div>
      </article>
    </Link>
  )
}

export default ProductCard