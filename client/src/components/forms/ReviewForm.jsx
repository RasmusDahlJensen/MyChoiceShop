import React, { useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

//styles
import styles from "./ReviewForm.module.css"
import { useFetch } from '../../hooks/useFetch'

function ReviewForm({productId}) {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(1)
    const [review, setReview] = useState("")

    

    const handleForm = async (e) => {
        e.preventDefault()
        console.log({
            user_id: "9b7dd2a9-1bea-4fd7-9269-7f1b31310481",
            product_id: parseInt(productId),
            rating,
            comment: review,
            title,
        });

        try{
            const result = await fetch("http://localhost:4000/api/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: "9b7dd2a9-1bea-4fd7-9269-7f1b31310481",
                    product_id: parseInt(productId),
                    rating,
                    comment: review,
                    title,
                })
            }) 

            setRating(1)
            setReview("")
            setTitle("")

            console.log(result);

        }catch(err){
            console.log(err);
        }
    }

  return (
    <form className={styles.form} onSubmit={handleForm}>
        <label>
        <span>Title</span>
        <input 
        type="text" 
        placeholder='Elsker min nye Macbook!!'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <label>
        <span>Anmeldelse</span>
        <textarea
        placeholder='Jeg har lige...'
        value={review}
        onChange={(e) => setReview(e.target.value)}
        />
        </label>
        <div className={styles.rate}>
            {rating >= 1 ? <BsStarFill onClick={() => setRating(1)}/> : <BsStar onClick={() => setRating(1)}/>}
            {rating >= 2 ? <BsStarFill onClick={() => setRating(2)}/> : <BsStar onClick={() => setRating(2)}/>}
            {rating >= 3 ? <BsStarFill onClick={() => setRating(3)}/> : <BsStar onClick={() => setRating(3)}/>}
            {rating >= 4 ? <BsStarFill onClick={() => setRating(4)}/> : <BsStar onClick={() => setRating(4)}/>}
            {rating >= 5 ? <BsStarFill onClick={() => setRating(5)}/> : <BsStar onClick={() => setRating(5)}/>}

        </div>
        <button className='btn'>
        Send
        </button>
    </form>
  )
}

export default ReviewForm