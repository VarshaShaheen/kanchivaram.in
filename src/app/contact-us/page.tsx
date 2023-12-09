import React from "react";
import Footer from "@/app/components/footer";
import Image from 'next/image'
import "@/app/utils/css/about.css";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col items-center mb-7">
                <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">Contact Us</h1>
                <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                    <h3 className="pt-7 text-green-950 text-3xl px-3">Mail us at:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        kanchivaram.in@gmail.com
                    </p>
                    <h3 className="pt-7 text-green-950 text-3xl px-3">Contact numbers : </h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        +91 7994137794
                        <br/>
                        +91 7012007488 (whatsapp)
                            <br/>
                        +91 8921243414 (whatsapp)
                    </p>
                </div>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default AboutUs;

