"use client"
import React, { useEffect, useState } from "react";
import GiveMeMoneyButton, { CartItem } from "@/app/checkout/GiveMeMoneyButton";
import { addOrderToFirestore } from "../../../firebase";

const Checkout = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [productIds, setProductIds] = useState<string[]>([]); // Initialize productIds array
    const [formData, setFormData] = useState<FormValues>({
        name: "",
        emailId: "",
        phoneNo: "",
        productId: "",
        addressLine1: "",
        city: "",
        state: "",
        country: "",
    });

    useEffect(() => {
        const cartStorage = localStorage.getItem("cart");
        if (cartStorage) {
            const parsedCart = JSON.parse(cartStorage);
            setCart(parsedCart);
            // Populate productIds based on the items in the cart
            setProductIds(parsedCart.map((item: CartItem) => item.id));
        }
    }, []);

    const removeFromCart = (itemId: string) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const productIdsString = cart.map(item => item.code).join(',');
        const submissionData = {
            ...formData,
            productId: productIdsString, // Ensure this is the correct field name
        };

        try {
            const orderId = await addOrderToFirestore(submissionData);
            // Assume takeMoney() is handled appropriately elsewhere
            console.log("Order placed successfully with ID:", orderId);
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };


    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow overflow-y-auto">
                <div className="mb-10 pt-20">
                    <h1 className="mb-10 text-center font-serif text-5xl">Checkout</h1>

                    <div className="mx-auto max-w-5xl justify-center px-6 xl:flex xl:space-x-6 xl:px-0 ">

                        {/* Delivery Details Form */}
                        <div className="max-w-md mx-auto">
                            <h1 className="mb-5 mt-7 text-center font-serif text-3xl">Delivery Details</h1>
                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="emailId">Email Id</label>
                                    <input
                                        type="text"
                                        id="emailId"
                                        value={formData.emailId}
                                        onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phoneNo">Phone number</label>
                                    <input
                                        type="text"
                                        id="phoneNo"
                                        value={formData.phoneNo}
                                        onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="addressLine1">Address</label>
                                    <input
                                        type="text"
                                        id="addressLine1"
                                        value={formData.addressLine1}
                                        onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        value={formData.state}
                                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="country">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                {/* Payment Gateway Button */}
                                <GiveMeMoneyButton
                                    consumerMobileNo={formData.phoneNo}
                                    consumerEmailId={formData.emailId}
                                    items={cart}
                                />
                            </form>
                        </div>
                        {/* Product List and Total */}
                        <div className="rounded-lg mb-8 xl:w-1/3 xl:mb-0 shadow-md p-4 bg-white">
                            <div className="mb-4">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="mb-4  p-4  sm:flex sm:justify-start"
                                    >
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-3 sm:mt-0">
                                                <h2 className="text-lg font-bold font-serif text-gray-900">
                                                    {item.name}
                                                </h2>
                                                <p className="mt-4 text-sm font-serif text-gray-700">
                                                    Rs {item.mrp}
                                                </p>
                                                <hr className="my-2" />
                                            </div>
                                            <div className="mt-2 flex justify-between sm:space-y-2 sm:mt-0 sm:block sm:space-x-2">
                                                <div className="flex items-center space-x-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 cursor-pointer duration-150 hover:text-red-500"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mb-4">
                                <p className="text-md font-bold">Total</p>
                                <div>
                                    <p className="mb-1 text-md font-bold">
                                        Rs {cart.reduce((sum, item) => sum + item.mrp, 0).toFixed(2)}
                                    </p>
                                    <p className="text-xs text-gray-700">including VAT</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

interface FormValues {
    name: string;
    emailId: string;
    phoneNo: string;
    productId : string;
    addressLine1: string;
    city: string;
    state: string;
    country: string;
}
