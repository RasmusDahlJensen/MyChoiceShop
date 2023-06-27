import React from 'react'

import styles from "./ProductCard.module.css"
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function ProductCard({showReviews, showMoreButton, data}) {
  console.log(data);
  return (
    <Link to={`/product/${data.id}`} style={{textDecoration: "none", color: "black"}}>
      <article className={styles.card}>
        <img src={data.image} alt={data.product_name} />
        <div className={styles.text}>
          <h2>{data.product_name}</h2>
          {showReviews && (
            <p className={styles.rating}>
              <BsStarFill/>
              <BsStarFill/>
              <BsStarHalf/>
              <BsStar/>
              <BsStar/>
              <strong>4.7</strong>
              <span>
                (211 anmeldelser)
              </span>
            </p>
          )}
          <p>{data.description.slice(0,50)}...</p>
          <span >
            Kr {data.price}
          </span>
          
        </div>
        {showReviews}
      </article>
    </Link>
  )
}

export default ProductCard