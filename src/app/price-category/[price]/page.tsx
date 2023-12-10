"use client";
import React from "react";
import { fetchProductsByPriceRange } from "../../../../firebase";
import { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import Image from 'next/image'
import "@/app/utils/css/category.css";

type products = {
    id: string;
    code: string;
    image: { downloadURL: string }[];
    name: string;
    mrp: number;
};

const PricePage = ({ params }: { params: { cat: string } }) => {
    const { price: priceRange } = params;
    const range = priceRange.split('-');
    const lowerLimit = parseFloat(range[0]);
    const upperLimit = parseFloat(range[1]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchProductsByPriceRange(lowerLimit, upperLimit);
            setProducts(products);
        };

        fetchProducts();
        console.log('Products:', products);
    }, [lowerLimit, upperLimit]);

    return (
        <div className="p-6">
            <h1 className="text-5xl text-center capitalize font-ardilla mb-12 mt-5">Shop now</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products?.map((product) => (
                    <div key={product.id} className="rounded overflow-hidden bg-white">
                        <div className="relative w-full h-80">
                            <img
                                className=" w-full h-full object-cover absolute"
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
                            <div className=" text-xl mb-2 text-gray-600 serif  font-serif uppercase py-1  text-m md:text-xl">{product.name}</div>
                            <div className="flex items-center">
                                <span className="py-1 text-sm  text-gray-600 serif font-serif uppercase mb-2">
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
                ))}
            </div>
            <div className="mt-8" id="footer">
                <Footer />
            </div>
        </div>
    );
};

export default PricePage;

