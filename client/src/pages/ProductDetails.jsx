import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import styles from "./ProductDetail.module.css"
import ReviewForm from '../components/forms/ReviewForm'
import { useParams } from 'react-router-dom'
import Review from '../components/Review'
import { useFetch } from '../hooks/useFetch'

function Product() {
  const {id} = useParams()
  const {data, error, loading} = useFetch(`/api/product/${id}`)

  const calculateReviews = (reviews) => {
    let rating = 0 
  }

  if(loading){
    return <p>Loading</p>
  }

  if(error){
    return <p>Something went wrong, try and refresh the page.</p>
  }

  console.log(data);
  return (
  <div className="container">
    {data && <main className={styles.productDetails}>
      <div className={styles.product}>

        <img src={data.image} alt="Product" />

        <div className={styles.aside}>
          <h1>{data.product_name}</h1>
          <p className={styles.rating}>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarHalf/>
            <BsStar/>
            <BsStar/>
            <strong>4.7</strong>
            <span>
              ({data.reviews.length} anmeldelser)
            </span>
          </p>
          <p>
           {data.description}
          </p>
          <div className={styles.pricing}>
            <h3>Kr {data.price}</h3>
            <div className={styles.order}>
              <button className='btn'>
                put i kurven
              </button>
              <p className='secondary-btn'>
                på lager: {data.quantity}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.reviews}>
          <h2>Andmeldelser</h2>
          <ReviewForm productId={id}/>

          {data.reviews.map(review => (
            <Review data={review}/>
          ))}
      </div>
    </main>}
  </div>
  )
}

export default Product