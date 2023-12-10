import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-4 pt-10 sm:px-6 lg:px-8 lg:pt-15 border-y-2">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Link href="/" passHref>
                                <img className="h-20 flex justify-center sm:justify-start" src="/logo.png" alt="Company Logo"  />
                        </Link>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <Link href="/about" passHref >
                                    <div >
                                        About Us
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" passHref>
                                <div className="text-base text-gray-500 hover:text-gray-900">
                                    Contact Us
                                </div>
                                </Link>
                            </li>
                            <li className="flex mt-2">
                                <div>
                                <Link href="/">
                                    <img src="/social-icons/insta.png" className="w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300" />
                                </Link>
                                </div>
                                <div>
                                    <Link href="/">
                                        <img src="/social-icons/fb.png" className="w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/">
                                    <img src="/social-icons/twitter.png" className="w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/">
                                    <img src="/social-icons/youtube.png" className="w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Customer Service
                        </h4>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <Link href="/termsandconditions" passHref>
                                    <div className="text-base text-gray-500 hover:text-gray-900">
                                        Terms & Conditions
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping-and-delivery-policy" passHref>
                                    <div className="text-base text-gray-500 hover:text-gray-900">
                                        Shipping & Delivery Policy
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy">
                                <div className="text-base text-gray-500 hover:text-gray-900" >
                                    Privacy Policy
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimerpolicy" passHref>
                                    <div className="text-base text-gray-500 hover:text-gray-900">
                                        Disclaimer Policy
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/return-policy">
                                <div className="text-base text-gray-500 hover:text-gray-900" >
                                    Return Policy
                                </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-base text-gray-400">
                        &copy; 2023 Kanchivaram.in. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
