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
        { id: 1, path: "/1.jpg" },
        { id: 2, path: "/2.jpg" },
        { id: 3, path: "/3.jpg" },
        { id: 4, path: "/4.jpg" },
        { id: 5, path: "/5.jpg" },
        { id: 6, path: "/6.jpg" },
        { id: 7, path: "/7.jpg" },
        { id: 8, path: "/8.jpg" },
        { id: 9, path: "/9.jpg" },
        { id: 10, path: "/10.jpg" },
        { id: 11, path: "/11.jpg" },
        { id: 12, path: "/12.jpg" },
        { id: 13, path: "/13.jpg" },
        { id: 14, path: "/14.jpg" },
        { id: 15, path: "/15.jpg" },
        { id: 16, path: "/16.jpg" },
        { id: 17, path: "/17.jpg" },
        { id: 18, path: "/18.jpg" },
        { id: 19, path: "/19.jpg" },
        { id: 20, path: "/20.jpg" },
        { id: 21, path: "/21.jpg" },
        { id: 22, path: "/22.jpg" },
        { id: 23, path: "/23.jpg" },
        { id: 24, path: "/24.jpg" },
        { id: 25, path: "/25.jpg" },
        { id: 26, path: "/26.jpg" },
        { id: 27, path: "/27.jpg" },
        { id: 28, path: "/28.jpg" },
        { id: 29, path: "/29.jpg" },
        { id: 30, path: "/30.jpg" },
        { id: 31, path: "/31.jpg" },
        { id: 32, path: "/32.jpg" },
        { id: 33, path: "/33.jpg" },
        { id: 34, path: "/34.jpg" },
        { id: 35, path: "/35.jpg" },
        { id: 36, path: "/36.jpg" },
        { id: 37, path: "/37.jpg" },
        { id: 38, path: "/38.jpg" },


    ];

    return (
        <div className="flex flex-col items-center relative">
            {/* Glavna slika */}
            <div className="relative mt-8">
                <motion.img
                    key={images[currentIndex].id}
                    className=" lg:w-[900px] lg:h-[600px] w-[400px] h-[350px] md:w-[600px] md:h-[400px] rounded-2xl"
                    src={images[currentIndex].path}
                    alt="Main Picture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                {/* Strelice */}
                <div>
                    <GrLinkPrevious size={30} className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-white" onClick={goToPrevious} />
                </div>
                <div>
                    <GrLinkNext size={30} className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-white" onClick={goToNext} />
                </div>
            </div>

            {/* Male slike */}
            <div className="flex flex-wrap md:flex-row lg:flex-row justify-center mt-4">
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
