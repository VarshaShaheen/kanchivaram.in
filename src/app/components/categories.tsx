// CategoryGallery.tsx

import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/app/utils/constants";

function GridItem({ image, categoryName, categoryUrl }) {
    return (
        <div className="mb-2 relative">

                    <Image
                        className="w-100"
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                    />
                    <p className="absolute bottom-0.5 left-0.5 right-0.5 text-white text-gallery text-center font-sans ">{categoryName}</p>
                    <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-75 bg-gray-900 flex items-center justify-center">
                        <Link href={categoryUrl}>
                        <button className="text-white font-bold py-2 px-4 rounded border-2 border-white">Buy Now</button>
                        </Link>
                    </div>
        </div>
    );
}

const CategoryGallery = () => {
    return (
        <div className="gallery">
            <div className="grid m-0 grid-cols-1 grid-rows-1 lg:grid-cols-3 gap-2">
                {CATEGORIES.map((category, i) => (
                    <GridItem key={i} categoryName={category.name} image={category.image} categoryUrl={category.url} />
                ))}
            </div>
        </div>
    );
};

export default CategoryGallery;
