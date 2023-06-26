import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import styles from "./ProductDetail.module.css"
import ReviewForm from '../components/forms/ReviewForm'
import { useParams } from 'react-router-dom'
import Review from '../components/Review'

function Product() {
  const {id} = useParams()

  return (
  <div className="container">
    <main className={styles.productDetails}>
      <div className={styles.product}>

        <img src="https://files.refurbed.com/ii/macbook-pro-2019-133-tb-1643102071.jpg?t=resize&h=600&w=800" alt="Product" />

        <div className={styles.aside}>
          <h1>MacBook</h1>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe at enim rem maiores expedita unde, accusamus quis dolorum ipsum. Placeat aut doloremque corrupti voluptatibus nostrum amet deserunt ratione dolorum.
          </p>
          <div className={styles.pricing}>
            <h3>Kr 399,0</h3>
            <div className={styles.order}>
              <button className='btn'>
                put i kurven
              </button>
              <p className='secondary-btn'>
                på lager: 4
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.reviews}>
          <h2>Andmeldelser</h2>
          <ReviewForm productId={id}/>

          <Review />
          <Review />
          <Review />
      </div>
    </main>
  </div>
  )
}

export default Product