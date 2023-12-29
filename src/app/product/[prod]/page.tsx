"use client";
import React, { useState, useEffect } from 'react';
import { fetchProductData } from '../../../../firebase';
import Footer from '@/app/components/footer';
import "@/app/utils/css/product.css";
import Link from 'next/link';
import CategoryGallery from '@/app/components/single-category';

type result = {
    id: string;
    code: string;
    image: { downloadURL: string }[];
    name: string;
    mrp: number;
    description: string;
    color: string;
    fabric: string;
    height: string;
    weight: string;
    categories: string;
};

type product = {
    id: string;
    code: string;
    image: { downloadURL: string }[];
    name: string;
    mrp: number;
    description: string;
    color: string;
    fabric: string;
    height: string;
    weight: string;
    categories: string;
}
interface CartItem {
    id: string;
    code: string;
    image: { downloadURL: string }[];
    name: string;
    mrp: number;
    description: string;
    color: string;
    fabric: string;
    height: string;
    weight: string;
    categories: string;
}
const SingleProductDescription = ({ params }: { params: { prod: string } }) => {
    const { prod: code } = params;
    const [product, setProduct] = useState<product | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchProductData(code);
            setProduct(result);
        };

        fetchData();
    }, [code]);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    useEffect(() => {
        if (cart.length > 0)
            localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart !== null) {
            setCart(JSON.parse(cart));
        }
    }, []);

    const addToCart = () => {
        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === product?.id);

        if (existingProduct) {
            setNotification("This product is already in your cart.");
        } else if (product !== null) {
            setCart([...cart, product as CartItem]);
            setNotification("Product added to cart successfully.");
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {notification && (
                <div className="fixed bottom-0 right-0 bg-green-500 text-white p-4 m-4 rounded">
                    {notification}
                </div>
            )}
            <div className="banner-container mobile-banner mobile-hide">
                {/* Add your banner image here */}
                <img
                    className="w-full object-cover"
                    src={"/product-single/banner-desktop.jpg"}
                    alt={"Banner Image"}
                />
            </div>
            <div className="banner-container mobile-banner desktop-hide">
                {/* Add your banner image here */}
                <img
                    className="w-full object-cover"
                    src={"/product-single/banner-mobile.jpg"}
                    alt={"Banner Image"}
                />
            </div>
            {product && product.image?.length > 0 && (
                <div className="container mx-auto mt-12 lg:p-4 md:p-8 bg-white overflow-hidden max-width ">
                    <div className="md:flex md:flex-row ">
                        <div className="md:w-4/12 md:mb-0 mb-4">
                            <div className="size-img aspect-w-1 aspect-h-1 transition-transform transform hover:scale-105">
                                <img
                                    className="object-cover w-full h-full rounded-lg "
                                    src={product.image[selectedImage]?.downloadURL}
                                    alt="Product Image"
                                />
                            </div>
                        </div>
                        <div className="md:w-8/12 px-1 mx-1 lg:ml-10 ">
                            <div className="centre">
                                <div className="flex py-4 space-x-4 desktop-hide">
                                    {product.image.map((image, index) => (
                                        <img
                                            key={index}
                                            className={`w-16 h-16 object-cover rounded-full cursor-pointer border-2 ${
                                                selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                                            }`}
                                            src={image.downloadURL}
                                            alt={`Product Image ${index + 1}`}
                                            onClick={() => handleImageClick(index)}
                                        />
                                    ))}
                                </div>
                                <h2 className="  flex font-serif uppercase size-heading mobile-align">{product.name}</h2>
                                <div className="flex items-center mb-7 mobile-align">
                                    <span className="color-grey size-description font-serif "> {product.description}</span>
                                </div>
                            </div>
                            <div className="mobile-margin">
                                <div className="font-serif size-desc2 ">
                                    <div className="flex items-center mb-1 size-heading">
                                        <span className="mr-2 color-grey">Rs. {product.mrp}   </span>
                                    </div>
                                    <div className="flex items-center mb-1 ">
                                        <span className="mr-2 ">Product ID:</span> {product.code}
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <span className=" mr-2 ">Color:</span><span className="color-grey">{product.color}</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <span className="mr-2 ">Fabric:</span><span className="color-grey"> {product.fabric}   </span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <span className=" mr-2 ">Height:</span><span className="color-grey"> {product.height}  </span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <span className=" mr-2 ">Weight:</span><span className="color-grey"> {product.weight}  </span>
                                    </div>
                                    <div className="flex items-center mb-1 mt-4">
                                        <Link href="/silk-care" passHref>
                                            <span className=" mr-2 color-green ">{'>'}Silk Care Instructions</span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <Link href="/return-policy" passHref>
                                            <span className=" mr-2 color-green ">{'>'} Refund and Return Policy</span>
                                        </Link>
                                    </div>
                                    <div className="flex py-4 space-x-4 mobile-hide">
                                        {product.image.map((image, index) => (
                                            <img
                                                key={index}
                                                className={`w-16 h-16 object-cover rounded-full cursor-pointer border-2 ${
                                                    selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                                                }`}
                                                src={image.downloadURL}
                                                alt={`Product Image ${index + 1}`}
                                                onClick={() => handleImageClick(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2.5 my-5">
                                    <div>
                                        <button onClick={addToCart}
                                                className="bg-button text-white py-2 px-4 rounded hover:bg-green-950 uppercase font-serif ">
                                            Add to Cart
                                        </button>
                                    </div>

                                    <Link href="/cart" >
                                        <button className="bg-button text-white py-2 px-4 rounded hover:bg-green-950 uppercase font-serif ">
                                            View Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <CategoryGallery product={{ categories: product.categories }} />
            <div className="mt-8" id="footer">
                <Footer />
            </div>
        </>
    );
};

export default SingleProductDescription;
