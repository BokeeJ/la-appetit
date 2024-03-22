
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '/src/App.css'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { preporuka } from '../Services/nasaPreporuka'
function NasaPreporuka() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {preporuka.map((slika, id) => {
                    return (
                        <SwiperSlide key={id}>
                            <img className='h-[250px] w-[200px] rounded-xl' src={slika.img} />
                            <h1 className='text-white text-xl flex justify-center mt-1 font-link'>{slika.name}</h1>
                        </SwiperSlide>
                    )
                })}


            </Swiper></div>
    )
}

export default NasaPreporuka