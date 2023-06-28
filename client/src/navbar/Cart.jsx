import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

//styles
import styles from "./navbar.module.css";
import CartCard from './CartCard';

function Cart() {
  return (
    <div className={styles.cart}>
        <div className={styles.cartProducts}>
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
        </div>
        <div className={styles.cartTotal}>
            <div className={styles.flex}>
                <p><strong>Total:</strong></p>
                <p>kr 3999</p>
            </div>
            <div className={styles.btn}>
                Til kurv
                <AiOutlineShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default Cart