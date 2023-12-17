"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/app/components/footer";
import "@/app/utils/css/cart.css";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart !== null) {
            setCart(JSON.parse(cart));
        }
    }, []);

    const removeFromCart = (itemId: string) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow overflow-y-auto">
                <div className="h-screen pt-20">
                    <h1 className="mb-10 text-center font-serif text-5xl">Cart</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {cart.map((item) => (
                                <div key={item.id} className="justify-between mb-4 rounded-lg bg-white p-4 shadow-md sm:flex sm:justify-start">
                                    <div className="w-full h-32 md:w-32 md:h-32 overflow-hidden rounded-lg">
                                        <img
                                            src={item.image[0].downloadURL}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-3 sm:mt-0">
                                            <h2 className="text-lg font-bold font-serif text-gray-900">{item.name}</h2>
                                            <p className="mt-1 text-sm font-serif text-gray-700">{item.description}</p>
                                            <p className="mt-4 text-sm font-serif text-gray-700">Rs {item.mrp}</p>
                                        </div>
                                        <div className="mt-2 flex justify-between sm:space-y-2 sm:mt-0 sm:block sm:space-x-2">
                                            <div className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 cursor-pointer duration-150 hover:text-red-500" onClick={() => removeFromCart(item.id)}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Sub total */}
                        <div className="mt-6 h-full rounded-lg border bg-white p-4 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">
                                    Rs {cart.reduce((sum, item) => sum + item.mrp, 0).toFixed(2)}
                                </p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between">
                                <p className="text-md font-bold">Total</p>
                                <div>
                                    <p className="mb-1 text-md font-bold">
                                        Rs {cart.reduce((sum, item) => sum + item.mrp, 0).toFixed(2)}
                                    </p>
                                    <p className="text-xs text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <button className="mt-4 w-full rounded-md bg-green-900 py-1.5 font-medium text-blue-50 hover:bg-black">Check out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Cart;
