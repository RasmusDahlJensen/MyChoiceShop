import React, { useEffect, useRef, useState } from 'react'
import { highlightsSlides } from '../../constants/constants'
import {BsChevronLeft, BsChevronRight, BsDot} from "react-icons/bs"
import styles from "./ProductCarousel.module.css"
import ProductCard from '../ProductCard'
import SkeletonProductCard from '../../skeletons/SkeletonProductCard'

function OneSlideCarousel({data = false, title, loading}) {
    const width = useRef(null)
    
    let containerWidth = null;
    let containerDimension = null;

    console.log("here: ", data);
    useEffect(() => {
        containerDimension = width.current.getBoundingClientRect();
        containerWidth = containerDimension.width;
    }, [width])

  return (
    <div className={styles.carouselContainer}>
        <h2 style={{marginLeft: "20px"}}>{title && title}</h2>
        {/* Left arrow */}
        <div 
        className={`${styles.left} ${styles.circle}`}
        onClick={() => {
            if(width){
                containerDimension = width.current.getBoundingClientRect();
                containerWidth = containerDimension.width;
                width.current.scrollLeft -= containerWidth;
            }
        }}
        >
            <BsChevronLeft />
        </div>

        {/* carousel */}
        <div className={styles.carousel} ref={width}>
            {loading && [1,2,3,4,5].map(() => (
                <SkeletonProductCard />
            ))}
            {width && (
                <>
                    {/* product carousel */}
                    {data && width && data.map((product) =>{
                        return <ProductCard data={product} key={product.id} classes={styles.productCard}/>
                        
                    })}
                </>
            )}
        </div>

        {/* right arrow */}
        <div 
            className={`${styles.right} ${styles.circle}`}
            onClick={() => {
                if(width){
                    containerDimension = width.current.getBoundingClientRect();
                    containerWidth = containerDimension.width;
                    width.current.scrollLeft += containerWidth;
                }
            }}
        >
            <BsChevronRight />
        </div>
    </div>
  )
}

export default OneSlideCarousel