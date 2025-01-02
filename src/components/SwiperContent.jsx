import React from 'react'
import Swiper from 'swiper'
import { SwiperSlide } from 'swiper/react'

const SwiperContent = ({innerText, imgSrc}) => {
  return (
    <>
      {innerText.split("").map((char,index)=>(
        <React.Fragment key={index}>
          <span>{char === " " ? "\u00A0" : char}</span>
        </React.Fragment>
      ))}
      <span>
        <img src='images/note.svg' />
      </span>
    </>
  )
}

export default SwiperContent