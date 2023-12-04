import React from "react";
import Footer from "@/app/components/footer";
import Image from 'next/image'
import "@/app/utils/css/terms.css";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">Shipping and Delivery Policy</h1>
                <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Welcome to <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>, where
                        we are dedicated to ensuring a delightful shopping experience for our valued customers.
                        Our Shipping and Delivery Policy is designed to provide you with clarity on the process of
                        receiving your exquisite Kanchipuram sarees.
                    </p>
                    <h3 className="pt-7 text-green-950 text-2xl px-3">1. Dispatch Time:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We understand the anticipation that comes with purchasing our handwoven sarees. All orders are processed within [X] business days (excluding weekends and public holidays) from the date of order placement. Please note that during peak seasons, dispatch times may be subject to slight delays.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">2. Shipping Partners:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We partner with reputable courier services to ensure the safe and timely delivery of your sarees. Our shipping partners may include DTDC, DHL, FedEx & India Post among others.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">3. Delivery Time:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        The delivery time varies based on your location and the shipping partner. Typically, domestic orders within India are delivered within [X] to [Y] business days from the dispatch date. For international orders, delivery times may vary and will be communicated during the checkout process.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">4. Shipping Rates:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Shipping charges are calculated based on the weight of your order and your delivery location. The applicable shipping charges will be displayed during the checkout process before you make the payment.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">5. Order Tracking:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        To keep you informed about the status of your order, we provide a tracking number once your order has been dispatched. You can use this tracking number to monitor the delivery status through our website or the courier service's platform.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">6. International Shipping:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        For our international customers, please note that additional customs and import duties may apply. These charges are the responsibility of the customer and will be collected upon delivery.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">7. Delivery Address:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Please ensure that the delivery address provided during checkout is accurate and complete. We will not be responsible for delays or non-delivery due to incorrect addresses.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">8. Delivery Confirmation:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Upon successful delivery, you will receive a confirmation email or message. If you are not available to receive the package, the courier service may leave a delivery attempt notice or contact you to reschedule.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">9. Delayed or Undelivered Items:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        In the rare event of delayed or undelivered items, please contact our customer support at kanchivaram.in@gmail.com so that we can promptly assist you in resolving the issue.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Thank you for choosing <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>.
                        We are committed to delivering your handcrafted sarees with the utmost care and efficiency.
                    </p>
                    <h5 className="pt-7 text-green-950 text-2xl text-center mb-10 mt-6"> Elegance. Tradition. <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>.</h5>
                </div>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default AboutUs;

