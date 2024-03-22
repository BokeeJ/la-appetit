import React, { useState } from 'react';
/// reactIcons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
///motion framer
import { motion } from "framer-motion";
///swipe 


function Galerija() {
    const [fullscreen, setFullscreen] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);



    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setFullscreen(images[currentIndex].id);
    }

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setFullscreen(images[currentIndex].id);
    }

    const images = [
        { id: 1, path: "/1.webp" },
        { id: 2, path: "/2.webp" },
        { id: 3, path: "/3.webp" },
        { id: 4, path: "/pocetnaDesert.webp" },
        { id: 5, path: "/5.webp" },
        { id: 6, path: "/6.webp" },
        { id: 7, path: "/7.webp" },
        { id: 8, path: "/4.webp" },
        { id: 9, path: "/39.webp" },
        { id: 10, path: "/stepenice.webp" },
        { id: 11, path: "/11.webp" },
        { id: 12, path: "/42.webp" },
        { id: 13, path: "/13.webp" },
        { id: 14, path: "/14.webp" },
        { id: 15, path: "/15.webp" },
        { id: 16, path: "/16.webp" },
        { id: 17, path: "/17.webp" },
        { id: 18, path: "/18.webp" },
        { id: 19, path: "/19.webp" },
        { id: 20, path: "/35.webp" },
        { id: 21, path: "/21.webp" },
        { id: 22, path: "/41.webp" },
        { id: 23, path: "/34.webp" },
        { id: 24, path: "/40.webp" },
        { id: 25, path: "/pozadinaPocetna.webp" },
        { id: 26, path: "/26.webp" },
        { id: 27, path: "/27.webp" },
        { id: 28, path: "/28.webp" },
        { id: 29, path: "/29.webp" },
        { id: 30, path: "/biftekUlje.webp" },
        { id: 31, path: "/biftekZar.webp" },
        { id: 32, path: "/KolacSaMakom.webp" },
        { id: 33, path: "/PitasaVisnjama.webp" },
        { id: 34, path: "/38.webp" },
        { id: 35, path: "/35.webp" },
        { id: 36, path: "/36.webp" },
        { id: 37, path: "/37.webp" },










    ];

    return (
        <div className="flex flex-col items-center relative">
            {/* Glavna slika */}

            <div className="relative mt-8">

                <motion.img
                    key={images[currentIndex].id}
                    className=" lg:w-[800px] lg:h-[500px] w-[320px] h-[300px] md:w-[600px] md:h-[400px] rounded-2xl"
                    src={images[currentIndex].path}
                    alt="Main Picture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                {/* Strelice */}
                <div className='text-white font-link text-xl text-gray'>{`${currentIndex} of ${images.length}`}</div>
                <div>
                    <GrLinkPrevious size={30} className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-white" onClick={goToPrevious} />
                </div>
                <div>
                    <GrLinkNext size={30} className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-white" onClick={goToNext} />
                </div>

            </div>

            {/* Male slike */}
            <div className="flex flex-wrap md:flex-row lg:flex-row justify-center mt-4 cursor-pointer gap-2">
                {images.map((image, index) => (
                    <img
                        key={image.id}
                        className={`w-16 h-16 mx-2 rounded-2xl ${currentIndex === index ? 'border-2 border-blue-500' : ''}`}
                        src={image.path}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )

}

export default Galerija;
