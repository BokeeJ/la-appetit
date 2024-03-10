import React, { useState } from 'react';
/// reactIcons
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
///motion framer
import { motion } from "framer-motion";

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
        { id: 11, path: "/11.jpg" }
    ];

    return (
        <div className="flex flex-col items-center relative">
            {/* Glavna slika */}
            <div className="relative mt-8">
                <motion.img
                    key={images[currentIndex].id}
                    className="w-[900px] h-[600px] rounded-2xl"
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
            <div className="flex flex-col md:flex-row lg:flex-row justify-center mt-4">
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
