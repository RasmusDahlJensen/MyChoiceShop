import React from 'react'

//styles
import styles from "./navbar.module.css";

function CartCard() {
  return (
    <div className={styles.cartCard}>
        <img src="https://images.samsung.com/is/image/samsung/p6pim/hk_en/galaxy-book/feature/hk_en-feature-thin-as-a-smartphone--powerful-as-a-pc-430327739?$FB_TYPE_A_MO_JPG$" alt="img" />
        <div className={styles.cartText}>
            <h4>Samsung galaxy book</h4>
            <span> 
                <p>kr 400</p>
                <p>x1</p>
            </span>
        </div>
    </div>
  )
}

export default CartCard