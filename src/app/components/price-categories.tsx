import Image from "next/image";

const Gallery = () => {
    const images = [
        {
            src: '/price-category/1.JPG',
            caption: '1000-5000',
            destination: '',
        },
        {
            src: '/price-category/2.JPG',
            caption: '5000-10000',
            destination: '/',
        },
        {
            src: '/price-category/3.JPG',
            caption: '10000-15000',
            destination: '/',
        },
        {
            src: '/price-category/4.JPG',
            caption: '15000-20000',
            destination: '/',
        },
        {
            src: '/price-category/2.JPG',
            caption: '20000-25000',
            destination: '/',
        },
        {
            src: '/price-category/3.JPG',
            caption: '25000-30000',
            destination: '/',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
                <div
                    key={index}
                    className=" md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 flex justify-center items-center"
                >
                    <div className="relative">
                        <Image
                            src={image.src}
                            alt={image.caption}
                            className="price-category-img hover:shadow-none"
                            width={6720}
                            height={4480}
                        />
                        <p className="absolute inset-0 flex items-center font-bold font-serif text-white justify-center text-center ">
                            {image.caption}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
