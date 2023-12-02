"use client"
import React, { useState } from 'react';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';

const SingleProductDescription = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
        '/price-category/1.JPG',
        '/price-category/2.JPG',
        '/price-category/3.JPG',
        '/price-category/4.JPG',
    ];

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
            <div className="md:w-4/12">
                <div className="w-full h-64 md:h-auto lg:h-80 aspect-w-1 aspect-h-1">
                    <img
                        className="object-cover w-full h-full"
                        src={images[selectedImage]}
                        alt="Product Image"
                    />
                </div>
                <div className="flex justify-center p-4 space-x-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={`w-12 h-12 object-cover rounded-full cursor-pointer border-2 ${
                                selectedImage === index ? 'border-blue-500' : 'border-gray-300'
                            }`}
                            src={image}
                            alt={`Product Image ${index + 1}`}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    Product Name
                </h2>
                <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Product ID:</span> ABC123
                </div>
                <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Color:</span> Black
                </div>
                <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">Rating:</span>
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                </div>
                <p className="leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed odio vel metus feugiat vestibulum.
                </p>
                <button className="bg-green-900 text-white py-2 px-4 rounded hover:bg-green-950">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default SingleProductDescription;
