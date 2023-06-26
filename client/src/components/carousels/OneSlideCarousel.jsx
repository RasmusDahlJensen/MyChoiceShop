import React, { useEffect, useRef, useState } from 'react'
import { highlightsSlides } from '../../constants/constants'
import {BsChevronLeft, BsChevronRight, BsDot} from "react-icons/bs"
import styles from "./OneSlideCarousel.module.css"

function OneSlideCarousel() {
    const [pages, setPages] = useState(0)
    const width = useRef(null)
    
    let containerWidth = null;
    let containerDimension = null;

    useEffect(() => {
        containerDimension = width.current.getBoundingClientRect();
        containerWidth = containerDimension.width;
    }, [width, pages])
    
    window.onresize = function(event) {
        console.log(width.current);
        containerDimension = width.current.getBoundingClientRect().width;
        containerWidth = containerDimension.width;
    };

  return (
    <div className={styles.carouselContainer}>
        {pages !== 0 ? <BsChevronLeft 
        className={`${styles.left} ${styles.active}`}
        onClick={() => {
            if(width && pages !== 0){
                width.current.scrollLeft -= containerWidth;
                setPages(pages - 1)
            }
        }}
        />: <BsChevronLeft className={styles.left} style={{opacity: 0.5}}/>}
        <div className={styles.carousel} ref={width}>
            {width && (
                <>
                    {highlightsSlides.map(slide => (
                        <img src={slide.src} alt={slide.alt} key={slide.alt} />
                    ))}
                    
                </>
            )}
        </div>

        {pages !== highlightsSlides.length - 1 ? <BsChevronRight 
        className={`${styles.right} ${styles.active}`}
        onClick={() => {
            if(pages !== highlightsSlides.length - 1){
                width.current.scrollLeft += containerWidth;
                setPages(pages + 1)
            }
        }}
        />: <BsChevronRight className={styles.right} style={{opacity: 0.5}}/>}

        <div className={styles.nav}>
            {highlightsSlides.map((slide, index) => (
                <BsDot style={{
                    transition: "0.3s",
                    opacity: pages === index ? 0.5 : 1
                }} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default OneSlideCarousel