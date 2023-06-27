import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

//styles
import styles from "./Review.module.css"

function Review({data}) {

  const formatTime = (time) => {
    let now = new Date(time).toLocaleString("da-DK", {
      month: "long",
      day: "numeric",
      year: "numeric"
      
    })
    // now = now.replaceAll(".", "/")

      return now
  }

  return (
    <div className={styles.review}>
        <h3>Bedste Produkt ever</h3>
        <span>
            Mr review {formatTime(data.createdAt)}
        </span>
        <p className={styles.rating}>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
        </p>
        <p>
            {data.comment}
        </p>
    </div>
  )
}

export default Review