import React from 'react'

import styles from "./ProductCard.module.css"
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function ProductCard({showReviews, showMoreButton }) {
  console.log(showMoreButton);
  return (
    <Link to="/product/4" style={{textDecoration: "none", color: "black"}}>
      <article className={styles.card}>
        <img src="https://files.refurbed.com/ii/macbook-pro-2019-133-tb-1643102071.jpg?t=resize&h=600&w=800" alt="macbook" />
        <div className={styles.text}>
          <h2>Product #1</h2>
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
          <p>lorem ipsum dolor sit amet...</p>
          <span >
            Kr 399,00 
          </span>
          
        </div>
        {showReviews}
      </article>
    </Link>
  )
}

export default ProductCard