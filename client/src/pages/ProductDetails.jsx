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
import { useCart } from '../store/useCart'


function Product() {
  const {id} = useParams()
  const { addProduct } = useCart()

  const [ratingNumber, setRatingNumber] = useState(null)
  const [starArray, setStarArray] = useState([])

  const { data, error, loading } = useFetch(`/api/product/${id}`)
  const {data: reviewData } = useFetch(`/api/reviews/${id}`)

  useEffect(() => {
    let emptyStars = 0;

    if(reviewData && reviewData.length){
      const n = calculateReviews(reviewData)
      setRatingNumber(n)
      emptyStars = 5 - parseInt(n)
    } 
    if(ratingNumber){
      let stars = []
      for(let i = 0; i < parseInt(ratingNumber); i++){
        stars.push(true)
      }
      for(let i = 0; i < emptyStars; i++){
        stars.push(false)
      }
      setStarArray(stars)
    }
    

  }, [reviewData, ratingNumber])

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
            {reviewData && reviewData.length && starArray ? starArray.map((boolean)=> {
              if(boolean){
                return <BsStarFill />
              }else{
                return <BsStar />
              }
            }) : (
              <>
                <BsStar/>
                <BsStar/>
                <BsStar/>
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
              <button 
              className='btn'
               onClick={() => addProduct(data)}
               >
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