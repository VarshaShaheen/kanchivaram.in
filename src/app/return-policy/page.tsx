import React from "react";
import Footer from "@/app/components/footer";
import Image from 'next/image'
import "@/app/utils/css/terms.css";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">Return Policy</h1>
                <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        At <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>.we strive to provide
                        you with the finest handwoven sarees, crafted with precision and care. To ensure a seamless and transparent
                        return process, please familiarize yourself with our return policy:
                    </p>
                        <h3 className="pt-7 text-green-950 text-2xl px-3">1. Parcel Opening Video Requirement:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        For all damage claims and return considerations, we kindly request customers to record a video while
                        opening the parcel. This video is crucial for substantiating damage claims and ensuring a swift resolution.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">2. Handwoven Saree Characteristics:
                    </h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Given the handwoven nature of our sarees, it&apos;s important to note that extra threads,
                        handloom marks, thread pullings, and jumpings are inherent characteristics and are not considered
                        as damages. These elements contribute to the unique charm and authenticity of each saree.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">3. Damages and Reporting:
                    </h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Returns will be accepted only for damages to the sarees. It is imperative to report any
                        damages within one day of receiving the product. The damage should be clearly recorded in
                        the parcel opening video without any cuts for a valid claim.
                    </p>
                        <h3 className="pt-7  text-green-950 text-2xl px-3">4. Saree Folding Requirements:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Sarees being returned must be properly folded. Any misfolds may result in
                        the saree being returned to the customer. Proper folding ensures the protection and integrity of
                        the product during transit.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">5. Exchange Process:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        The exchange of the saree will be initiated after we receive the returned item
                        in good condition, adhering to the guidelines mentioned above.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">6. Color Variations and Expectations:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Please be aware that digital images may exhibit 5-10% color variations from the actual product.
                        We do not entertain returns based on slight variations in color as individual perceptions of
                        color and product expectations may differ.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We value your understanding and cooperation in adhering to these guidelines to facilitate
                        a smooth return process. Our commitment is to provide you with exceptional sarees,
                        and we appreciate your trust in <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in.</a>
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        If you have any questions or concerns regarding our return policy, please
                        feel free to contact us at kanchivaram.in@gmail.com
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Thank you for choosing <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in.</a>
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

