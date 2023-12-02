"use client";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const CarouselComponent = () => {
    return (
        <div className="mx-auto ">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000} // Change slide every 3 seconds (adjust as needed)
                showStatus={false}
                showThumbs={false}
            >
                <div  >
                    <img
                        src="/carousel/car2.jpg"
                        alt="Slide 1"
                    />
                </div>
                <div >
                    <img
                        src="/carousel/car2.jpg"
                        alt="Slide 2"
                    />
                </div>
                <div >
                    <img
                        src="/carousel/car2.jpg"
                        alt="Slide 3"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
