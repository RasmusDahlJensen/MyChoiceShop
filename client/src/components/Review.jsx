import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

//styles
import styles from "./Review.module.css"

function Review() {
  return (
    <div className={styles.review}>
        <h3>Bedste Produkt ever</h3>
        <span>
            Mr review 16-12-2022
        </span>
        <p className={styles.rating}>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStar/>
            <BsStar/>
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate asperiores nostrum voluptatem temporibus. Tempora fugit, ex voluptatibus sapiente, harum facere inventore rem maxime cupiditate atque repellendus quisquam id impedit?
        </p>
    </div>
  )
}

export default Review