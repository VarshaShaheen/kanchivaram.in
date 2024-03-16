import React from "react";
import Image from 'next/image'
import "@/app/utils/css/about.css";

const AboutUs = () => {
    return (
        <div>
        <div className="flex flex-col items-center">
            <h1 className="font-ardilla text-6xl text-center mb-4 mt-10">About Us</h1>
            <div className="mx-auto text-gray-600 reduce-width serif font-serif" >
                <h2 className="pt-7 text-green-950 text-3xl px-3">Welcome to Kanchivaram.in,</h2>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    where timeless tradition meets contemporary elegance. At Kanchivaram.in,
                    we take pride in curating a collection of the finest Kanchipuram silk sarees and a variety
                    of other exquisite sarees, each a testament to the rich heritage of Indian craftsmanship.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3">Our Heritage:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    Rooted in the cultural tapestry of India, Kanchipuram silk sarees have long been celebrated for their
                    opulence and intricate weaving. Our journey began with a profound appreciation for these masterpieces,
                    and we envisioned a platform where discerning patrons could experience the allure of authentic craftsmanship.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3">The Kanchivaram.in Difference:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    We stand as custodians of authenticity, offering you a curated selection of pure Kanchipuram silk
                    sarees that embody the craftsmanship of skilled artisans. Our commitment to quality is unwavering,
                    ensuring that every saree is a true work of art, reflecting the legacy of centuries-old weaving traditions.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3">Beyond Kanchipuram:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    While our heart lies in Kanchipuram silk, we understand the diverse tastes of our clientele. Hence,
                    we extend our offerings to a carefully curated collection of other types of sarees, each telling
                    its unique story through intricate designs, luxurious fabrics, and impeccable detailing.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3">Our Vision:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    At Kanchivaram.in, we aspire to be more than a purveyor of sarees. We are dedicated to fostering an
                    appreciation for the timeless beauty of traditional Indian attire. Our vision is to be your trusted
                    companion in celebrating life&apos;s significant moments with grace and elegance.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3"> Quality Assurance:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    Each saree in our collection undergoes stringent quality checks, ensuring that you receive not just
                    a garment but a legacy to be cherished. We take pride in being a brand synonymous with authenticity,
                    quality, and a commitment to preserving the artistry of Indian textiles.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3"> Customer Experience:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    Your satisfaction is at the core of our ethos. Our user-friendly website, transparent transactions, and prompt
                    customer service are all designed to make your shopping experience with us seamless and delightful.
                </p>
                <h3 className="pt-7 font-ardilla text-green-950 text-3xl px-3">Connect with Us:</h3>
                <p className="pt-4 px-10 mx-5 about-width justify-center">
                    Embark on a journey with Kanchivaram.in and discover the beauty woven into every thread.
                    Follow us on social media, subscribe to our newsletter, and join our community of saree
                    enthusiasts who appreciate the splendor of Indian craftsmanship.
                    <br/>
                    <br/>
                    At Kanchivaram.in, we invite you to embrace the elegance of tradition and make each saree a statement of
                    your unique style. Thank you for choosing us to be a part of your sartorial journey.
                </p>
                <h5 className="pt-7 text-green-950 text-2xl text-center mb-10 mt-6"> Elegance. Tradition. Kanchivaram.in.</h5>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;

