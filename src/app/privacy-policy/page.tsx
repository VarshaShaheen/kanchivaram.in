import React from "react";
import Footer from "@/app/components/footer";
import Image from 'next/image'
import "@/app/utils/css/terms.css";

const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">Privacy Policy</h1>
                <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                    <h3 className="pt-7  text-green-950 text-2xl px-3">1. Introduction:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Welcome to <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>.This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or engage with our services. By using our website, you agree to the terms of this Privacy Policy.
                    </p>
                    <h3 className="pt-7 text-green-950 text-2xl px-3">2. Information We Collect:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        2.1. Personal Information: We may collect personal information such as your name, email address, phone number, and shipping address when you place an order or subscribe to our newsletter.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        2.2. Non-Personal Information: We may also collect non-personal information such as browser type, operating system, and IP address for analytical purposes to enhance your user experience.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">3. How We Use Your Information:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        3.1. Order Fulfillment: We use your personal information to process and fulfill your orders, including shipping and customer service.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        3.2. Communication: With your consent, we may use your contact information to send you promotional materials, newsletters, or updates about our products and services.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        3.3. Website Improvement: Non-personal information is used for analyzing trends, administering the site, and gathering demographic information for internal purposes to improve our website and services.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">4. Data Security:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We prioritize the security of your information. We implement industry-standard security measures to protect against unauthorized access, disclosure, alteration, or destruction of your personal information.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">5. Cookies:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We use cookies to enhance your browsing experience. Cookies are small files stored on your device that enable certain features and functionality.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">6. Third-Party Disclosure:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We do not sell, trade, or otherwise transfer your personal information to third parties unless we provide you with advance notice. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">7. Your Choices:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        7.1. Opt-Out: You may opt out of receiving promotional emails by following the instructions provided in each email.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        7.2. Cookies: You can adjust your browser settings to refuse cookies or to be notified when cookies are being sent.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">8. Children’s Privacy:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        Our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">9.Changes to Privacy Policy:</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        We reserve the right to update, change, or modify this Privacy Policy at any time without notice. Any changes will be effective immediately upon posting on our website.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">10. Contact Information</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        For any inquiries regarding this Privacy Policy, please contact us at kanchivaram.in@gmail.com
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        By using our website, you agree to the terms of this Privacy Policy. Thank you for choosing <a href="https://www.kanchivaram.in" className="color-green">Kanchivaram.in</a>
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

