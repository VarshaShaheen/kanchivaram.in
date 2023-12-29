"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CarouselComponent = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-full h-56 md:h-[80vh] sm:h-[50vh] sm:mt-4">
            {windowWidth > 768 ? (
                <Image
                    src="/carousel/carousel-desktop.jpg"
                    alt="Desktop view"
                    layout="fill"
                    objectFit="cover"
                />
            ) : (
                <Image
                    src="/carousel/carousel-mobile.jpg"
                    alt="Mobile view"
                    layout="fill"
                    objectFit="contain"
                />
            )}
        </div>

    );
};

export default CarouselComponent;
