"use client";
import React, { useState, useEffect } from 'react';
import { fetchProductData } from '../../../../firebase';
import Footer from '@/app/components/footer';
import "@/app/utils/css/product.css";
import Link from 'next/link';
import CategoryGallery from '@/app/components/single-category';

const SingleProductDescription = ({ params }) => {
    const { prod: code } = params;
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchProductData(code);
            setProduct(result);
        };

        fetchData();
    }, [code]);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {product.image?.length > 0 && (
                <div className="container mx-auto my-8 p-4 md:p-8 bg-white border rounded-lg overflow-hidden max-width ">
                    <div className="md:flex md:flex-row md:items-center">
                        <div className="md:w-4/12 md:mb-0 mb-4">
                            <div className="w-full h-full md:h-auto lg:h-auto aspect-w-1 aspect-h-1 transition-transform transform hover:scale-105 ">
                                <img
                                    className="object-cover w-full h-full rounded-lg"
                                    src={product.image[selectedImage]?.downloadURL}
                                    alt="Product Image"
                                />
                            </div>
                            <div className="flex justify-center p-4 space-x-4 transition-transform transform hover:scale-105">
                                {product.image.map((image, index) => (
                                    <img
                                        key={index}
                                        className={`w-12 h-12 object-cover rounded-full cursor-pointer border-2 ${
                                            selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                                        }`}
                                        src={image.downloadURL}
                                        alt={`Product Image ${index + 1}`}
                                        onClick={() => handleImageClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="md:w-8/12 px-1 mx-1 lg:ml-10">
                            <h2 className="text-3xl mb-4 flex font-ardilla">{product.name}</h2>
                            <div className="flex items-center mb-2">
                                <span className="mr-2 serif font-serif">Product ID:</span> {product.code}
                            </div>
                            <div className="flex items-center mb-2">
                                <span className=" mr-2 serif font-serif">Color:</span><span className="color-grey">{product.color}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-2 serif font-serif">Description:</span><span className="color-grey"> {product.description}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-2 serif font-serif">MRP:</span><span className="color-grey"> {product.mrp}   </span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="mr-2 serif font-serif">Fabric:</span><span className="color-grey"> {product.fabric}   </span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className=" mr-2 serif font-serif">Height:</span><span className="color-grey"> {product.height}  </span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className=" mr-2 serif font-serif">Weight:</span><span className="color-grey"> {product.weight}  </span> 
                            </div>
                            <div className="flex items-center mb-2">
                                <Link href="/silk-care" passHref>
                                <span className=" mr-2 color-green serif font-serif">> Silk Care Instructions</span>
                                </Link>
                            </div>
                            <div className="flex items-center mb-2">
                                <Link href="/silk-care" passHref>
                                    <span className=" mr-2 color-green serif font-serif">> Refund and Return Policy</span>
                                </Link>
                            </div>
                            <button className="bg-green-900 text-white py-2 px-4 rounded hover:bg-green-950 serif font-serif">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
             <CategoryGallery product={product} />
            <div className="mt-8" id="footer">
                <Footer />
            </div>
        </>
    );
};

export default SingleProductDescription;
