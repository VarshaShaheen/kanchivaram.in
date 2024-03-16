import React from "react";
import Image from 'next/image'
import "@/app/utils/css/terms.css";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">Disclaimer Policy</h1>
                <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                    <h3 className="pt-7  text-green-950 text-2xl px-3">1. Introduction:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Welcome to <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>. This Disclaimer Policy governs your use of our website. By accessing or using our website,
                        you agree to comply with and be bound by this Disclaimer Policy. If you disagree with any part of this policy,
                        please do not use our website.
                    </p>
                    <h3 className="pt-7 text-green-950 text-2xl px-3">2. Accuracy of Information:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        While we strive to provide accurate and up-to-date information on our website, we make no representations or warranties of any kind,
                        express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products,
                        services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly
                        at your own risk.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">3. Product Representation:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Product images on our website are for illustrative purposes only. We make every effort to display
                        the colors and details accurately, but we cannot guarantee that your device&apos;s display accurately reflects the colors
                        of the products. The actual products may vary slightly from the images.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">4. Availability and Pricing:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Product availability and pricing are subject to change without notice. We reserve the right
                        to modify or discontinue products or services without prior notice. We are not liable for any modification, price change,
                        suspension, or discontinuance of any product or service.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">5. External Links:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Our website may contain links to external websites that are not operated by us. We have no control
                        over the content and nature of these external sites. The inclusion of any links does not necessarily imply a recommendation
                        or endorsement of the views expressed within them.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">6. Viruses and Security:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We do not guarantee that our website is free from viruses or other harmful components.
                        It is your responsibility to implement sufficient security procedures to meet your particular requirements.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">7. Limitation of Liability:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        In no event will Kanchivaram.in be liable for any loss or damage, including without limitation,
                        indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of
                        data or profits arising out of, or in connection with, the use of our website.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">8. Governing Law</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        This Disclaimer Policy is governed by the laws of India. Any disputes arising in connection with
                        this policy shall be resolved in the courts of law.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">9. Changes to Disclaimer Policy:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We reserve the right to update, change, or modify this Disclaimer Policy at any time without notice.
                        Any changes will be effective immediately upon posting on our website.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">10. Contact Information</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        For any inquiries regarding this Disclaimer Policy, please contact us at kanchivaram.in@gmail.com
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        By using our website, you agree to the terms of this Disclaimer Policy. Thank you for choosing <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>
                    </p>
                    <h5 className="pt-7 text-green-950 text-2xl text-center mb-10 mt-6"> Elegance. Tradition. <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>.</h5>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

