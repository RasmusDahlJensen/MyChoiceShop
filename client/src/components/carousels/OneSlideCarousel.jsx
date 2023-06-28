import { highlightsSlides } from '../../constants/constants'
import {BsChevronLeft, BsChevronRight, BsDot} from "react-icons/bs"

import styles from "./OneSlideCarousel.module.css"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function OneSlideCarousel() {
    console.log(highlightsSlides);
  return (
    <Carousel 
        useKeyboardArrows={true}
        renderArrowNext={(clickHandler, hasNext) => {
            return(
                hasNext && <button className={styles.right} onClick={clickHandler}>
                    <BsChevronRight/>
                </button>
            )
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
            return(
                hasNext && <button className={styles.left} onClick={clickHandler}>
                <BsChevronLeft/>
            </button>
            )
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
            return (
                <li
                  onClick={clickHandler}
                  className={`${styles.dot} ${isSelected ? styles.active : ""}`}
                  key={index}
                  role="button"
                />
            )
        }}
        showStatus={false}
        showThumbs={false}
    >
        {highlightsSlides && highlightsSlides.map((slide) => (
            <div>
                <img src={slide.src} alt={slide.alt}/>
            </div>
        ))}
    </Carousel>
  )
}

export default OneSlideCarousel