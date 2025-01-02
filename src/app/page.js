'use client'

import ComingItem from "@/components/ComingItem";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import SwiperContent from "@/components/SwiperContent";
import Link from "next/link";

export default function Home() {
  const imgSrc = Array.from({length: 17}, (_, i) => `images/loading-1-${i+1}.webp`);
  const mainText = 'Enjoy making sounds !'
  const tapText = 'TAP TO NEXT'

  return (
    <div className="page">
      <div className="page-loading">
        <div className="loading-coming">
          {imgSrc.map((src, i) => (
            <ComingItem key={i} imgSrc={src} />
          ))}
        </div>  
      </div>  
      <div className="page-canvas">
        <canvas width={1920} height={953} />
      </div>
      <main className="page-main">
        <div data-span>
          {mainText.split("").map((char,index)=>(
            <React.Fragment key={index}>
              <span>{char === " " ? "\u00A0" : char}</span>
              
            </React.Fragment>
          ))}
        </div>
      </main>
      <div className="page-swiper">
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <SwiperContent innerText='We wish you a Merry christmas ' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent innerText='Christmas With Me ' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent innerText='Rudolph My Deer ' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent innerText='Jingle Bells ' />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperContent innerText="We're Falling In Love " />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="page-tap">
        <div data-span>
          {tapText.split("").map((char,index)=>(
              <React.Fragment key={index}>
                <span>{char === " " ? "\u00A0" : char}</span>

              </React.Fragment>
            ))}
        </div>
      </div>
      <footer className="page-footer">
        <div className="footer-link">
          <Link href='https://github.com/msun97'>
            
          </Link>
          <Link href='https://www.notion.so/8af176c4e64646d2bfed61d4dea267af'/>
          <Link href='https://hollypp.tistory.com/'/>
          <small></small>
        </div>
      </footer>
      <div className="page-frame"></div>
      <div className="page-sound"></div>
      <div className="page-side"></div>
      <div className="page-countdown"></div>
      <div className="page-particles"></div>
      <div className="page-noise"></div>
    </div>
  );
}
