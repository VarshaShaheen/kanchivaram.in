import React from "react";
import Footer from "@/app/components/footer";
import "@/app/utils/css/terms.css";

const terms_and_conditions = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">Terms and Conditions of Use</h1>
                <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                    <h3 className="pt-7  text-green-950 text-2xl px-3">1. Acceptance of Terms</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        By accessing or using the website [<a href="https://www.kanchivaram.in">www.kanchivaram.in</a>] (&quot;the Website&quot;),
                        you agree to comply with and be bound by the following terms and conditions
                        (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Website.
                    </p>
                    <h3 className="pt-7 text-green-950 text-2xl px-3">2. Products and Services</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        2.1. Authenticity of Kanchipuram Silk Sarees: We guarantee
                        that all our products are authentic Kanchipuram silk sarees.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        2.2. Product Information: While we strive to provide accurate product descriptions,
                        we do not warrant the accuracy, completeness, reliability, or timeliness of any information on the Website.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">3. Ordering and Payments</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        3.1. Order Placement: Orders placed through the Website are subject to
                        availability and acceptance.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        3.2. Pricing: Prices are as listed on the Website and are subject to change
                        without notice. The customer is responsible for all applicable taxes associated with the purchase.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        3.3. Payment: We accept various forms of payment, and all transactions
                        are securely processed.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">4. Shipping and Returns</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        4.1. Shipping: We aim to dispatch orders promptly; however, shipping times may vary. We are not responsible for delays beyond our control.
                    </p>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        4.2. Returns: Please refer to our separate &quot;Return and Refund Policy&quot; for detailed
                        information on returns and refunds.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">5. Privacy Policy</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        5.1. Personal Information: We collect and process personal information in accordance with our
                        Privacy Policy. By using the Website, you consent to such processing.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">6. Intellectual Property</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        6.1. Trademarks and Copyrights: All content on the Website, including but not limited
                        to text, images, logos, and trademarks, is the property of [Your Company Name] and protected by intellectual property laws.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">7. Limitation of Liability</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        7.1. Disclaimer: We disclaim any liability for damages arising out of or in connection
                        with the use of the Website
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">8. Governing Law</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        8.1. Jurisdiction: These Terms are governed by law, and any disputes shall be resolved
                        in the courts of law.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">9. Changes to Terms and Conditions</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        9.1. Modification: We reserve the right to modify these Terms at any time. Changes will be
                        effective immediately upon posting on the Website.
                    </p>
                    <h3 className="pt-7  text-green-950 text-2xl px-3">10. Contact Information</h3>
                    <p className="pt-4 px-10 mx-5 about-width justify-center">
                        10.1. Contact: For any inquiries regarding these Terms, please contact us at kanchivaram.in@gmail.com.
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

export default terms_and_conditions;

