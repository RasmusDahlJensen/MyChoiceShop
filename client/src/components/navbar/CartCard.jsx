import React from 'react'

//styles
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useCart } from '../../store/useCart';

function CartCard({product}) {
  const {decreaseProduct, increaseProduct} = useCart()
  return (
      <div className={styles.cartCard}>
        <Link 
        to={`/product/${product.id}`} 
        style={{textDecoration: "none", color: "#fafafa"}}
        >
          <img src={product.image} alt="img" />
        </Link>
        <div className={styles.cartText}>
            <h4>{product.product_name.slice(0, 20)}</h4>
            <div className={styles.justifyBetween}> 
                <p>Kr {product.price}</p>
                <div>
                  <BsChevronUp onClick={() => increaseProduct(product)}/>
                  <BsChevronDown  onClick={() => decreaseProduct(product)}/>
                  <p>x{product.amount}</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default CartCard