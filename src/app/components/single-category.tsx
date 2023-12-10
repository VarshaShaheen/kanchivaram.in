import React, { useEffect, useState, useRef } from "react";
import { fetchProductsByCategory } from "../../../firebase";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/utils/css/category.css";
import Link from "next/link";

type categoryProduct = {
    id: string;
    code: string;
    image: { downloadURL: string }[];
    name: string;
    mrp: number;
};

type product = {
    categories: string;
    code: string;
    description: string;
    fabric: string;
    height: string;
    image: { downloadURL: string }[];
    mrp: number;
    name: string;
    weight: string;
    color: string;
};



const CategoryGallery = ({ product }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (sliderRef.current) {
                sliderRef.current.slickPlay();
            }
        }, 1000); // start playing after 1 second

        return () => clearTimeout(timer); // cleanup on unmount
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryProducts: categoryProduct[]  = await fetchProductsByCategory(product.categories);
                setProducts(categoryProducts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching category products:', error);
                setProducts([]);
                setLoading(false);
            }
        };

        fetchData();
    }, [product.category]);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className="p-6">
            <h1 className="text-4xl text-center capitalize font-cocmat mb-12 mt-3">Similar products</h1>
            {loading ? (
                <div>Loading..</div>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                    {products.map((product) => (
                        <Link href="/product/[code]" as={`/product/${product.code}`} key={product.id}>
                        <div key={product.id} className="rounded overflow-hidden bg-white px-2 ">
                            <div className="relative w-full h-80">
                                <img
                                    className="w-full h-full object-cover absolute"
                                    src={product.image[0].downloadURL}
                                    alt={product.name}
                                />
                                <img
                                    className="w-full h-full object-cover absolute hover:opacity-100 opacity-0 transition-opacity duration-200"
                                    src={product.image[1].downloadURL}
                                    alt={product.name}
                                />
                            </div>
                            <div className="py-3">
                                <div className="text-xl mb-2 text-gray-600 serif font-serif uppercase py-1 text-m md:text-xl">{product.name}</div>
                                <div className="flex items-center">
                                    <span className="py-1 text-sm text-gray-600 serif font-serif uppercase mb-2">
                                        MRP: {product.mrp}
                                    </span>
                                    <Image
                                        src={"/cart.png"}
                                        alt={"cart"}
                                        width={25}
                                        height={25}
                                        className="cart-margin mr-0 mb-3"
                                    />
                                </div>
                            </div>

                        </div>
                        </Link>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default CategoryGallery;
