import React, { useEffect, useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { calculateReviews } from '../hooks/useRating'

//styles
import styles from "./ProductDetail.module.css"

//components
import ReviewForm from '../components/forms/ReviewForm'
import SkeletonProductDetails from '../skeletons/SkeletonProductDetails'
import Review from '../components/Review'


function Product() {
  const {id} = useParams()

  const [ratingNumber, setRatingNumber] = useState(null)

  const { data, error, loading } = useFetch(`/api/product/${id}`)
  const {data: reviewData } = useFetch(`/api/reviews/${id}`)

  useEffect(() => {
    if(reviewData && reviewData.length){
      setRatingNumber(calculateReviews(reviewData))
    } 

  }, [reviewData])

  if(loading){
    return (
      <div className="container">
        <SkeletonProductDetails />
      </div>
    )
  }

  if(error){
    return <p>Something went wrong, try and refresh the page.</p>
  }
  
  
  return (
  <div className="container">
    {data && <main className={styles.productDetails}>
      <div className={styles.product}>
        <img src={data.image} alt="Product" />
        <div className={styles.aside}>
          <h1>{data.product_name}</h1>
          <p className={styles.rating}>
            {reviewData && reviewData.length && reviewData ? (
              <>
                <BsStarFill/>
                <BsStarFill/>
                <BsStar/>
                <BsStar/>
                <BsStar/>
              
              </>
            ) : (
              <>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>
                <BsStar/>
                <BsStar/>
              </>
            )}
            <strong>
              {ratingNumber ? (ratingNumber) : "0"}
              {}
            </strong>
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