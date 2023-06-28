import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

//styles
import styles from "./navbar.module.css";
import CartCard from './CartCard';
import { useCart } from '../../store/useCart';
import { BsCartXFill } from 'react-icons/bs';

function Cart() {
    const {cart, totalPrice} = useCart()
    console.log("cart: ", cart);
  return (
    <div className={styles.cart}>
        <div className={styles.cartProducts}>
            {!cart.length && (
                <div className={styles.empty}>
                    <BsCartXFill />
                    <p>Kurven er tom</p>
                </div>
            )}
            {cart.map((product) => (
                <CartCard product={product}/>
            ))}
        </div>
        <div className={styles.cartTotal}>
            <div className={styles.flex}>
                <p><strong>Total:</strong></p>
                <p>
                    kr {totalPrice ? parseFloat(totalPrice).toFixed(2) : 0}
                </p>
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