import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
    const images = [
        {
            src: '/price-category/1.JPG',
            caption: '1000 - 5000',
            destination: '/price-category/1000-5000',
        },
        {
            src: '/price-category/2.JPG',
            caption: '5000 - 10000',
            destination: '/price-category/5000-10000',
        },
        {
            src: '/price-category/3.JPG',
            caption: '10000 - 15000',
            destination: '/price-category/10000-15000',
        },
        {
            src: '/price-category/4.JPG',
            caption: '15000 - 20000',
            destination: '/price-category/15000-20000',
        },
        {
            src: '/price-category/5.JPG',
            caption: '20000 - 25000',
            destination: '/price-category/20000-25000',
        },
        {
            src: '/price-category/6.JPG',
            caption: '25000 - 30000',
            destination: '/price-category/25000-30000',
        },
    ];

    return (
        <div className="flex overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 flex-shrink-0  "
                >
                    <Link href={image.destination} key={index}>
                        <div className="relative">
                            <Image
                                src={image.src}
                                alt={image.caption}
                                className="price-category-img hover:scale-105 transition-transform duration-300 ease-in-out"
                                width={6000}
                                height={4480}
                            />
                            <p className="flex my-2 items-center font-serif text-black justify-center text-center line-height lg:text-xl md:text-base">
                                {image.caption}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>

    );
};

export default Gallery;
