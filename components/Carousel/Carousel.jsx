/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import styles from './Carousel.module.scss'

const Carousel = (props) => {
 const { children, show } = props

 const [currentIndex, setCurrentIndex] = useState(0)
 const [length, setLength] = useState(children.length)

 const [touchPosition, setTouchPosition] = useState(null)

 // Set the length to match current children from props
 useEffect(() => {
  setLength(children.length)
 }, [children])

 const next = () => {
  if (currentIndex < length - show) {
   setCurrentIndex((prevState) => prevState + 1)
  }
 }

 const prev = () => {
  if (currentIndex > 0) {
   setCurrentIndex((prevState) => prevState - 1)
  }
 }

 const handleTouchStart = (e) => {
  const touchDown = e.touches[0].clientX
  setTouchPosition(touchDown)
 }

 const handleTouchMove = (e) => {
  const touchDown = touchPosition

  if (touchDown === null) {
   return
  }

  const currentTouch = e.touches[0].clientX
  const diff = touchDown - currentTouch

  if (diff > 5) {
   next()
  }

  if (diff < -5) {
   prev()
  }

  setTouchPosition(null)
 }

 return (
  <Wrapper>
   <div className={styles.carousel_container}>
    <div className={styles.carousel_wrapper}>
     {/* You can alwas change the content of the button to other things */}
     {currentIndex > 0 && (
      <button
       type="button"
       onClick={prev}
       className={styles.carousel_leftArrow}
      >
       &lt;
      </button>
     )}
     <div
      className={styles.carousel_wrapper_content}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
     >
      <div
       className={`${styles.carousel_content} ${
        styles[`carousel_show-${show}`]
       }`}
       style={{
        transform: `translateX(-${currentIndex * (100 / show)}%)`,
       }}
      >
       {children}
      </div>
     </div>
     {/* You can alwas change the content of the button to other things */}
     {currentIndex < length - show && (
      <button
       type="button"
       onClick={next}
       className={styles.carousel_rightArrow}
      >
       &gt;
      </button>
     )}
    </div>
   </div>
  </Wrapper>
 )
}

export default Carousel
