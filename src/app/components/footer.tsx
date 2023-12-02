import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-4 pt-10 sm:px-6 lg:px-8 lg:pt-15 border-y-2">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center sm:justify-start">
                            <img className="h-20" src="/logo.png" alt="Company Logo" />
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Quick Links
                        </h4>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                    Contact Us
                                </a>
                            </li>
                            <li className={"flex mt-2"}>
                                <a href={""}>
                                    <img src={"/social-icons/insta.png"} className={"w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300"}/>
                                </a>
                                <a href={""}>
                                    <img src={"/social-icons/fb.png"} className={"w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300"}/>
                                </a>
                                <a href={""}>
                                    <img src={"/social-icons/twitter.png"} className={"w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300"}/>
                                </a>
                                <a href={""}>
                                    <img src={"/social-icons/youtube.png"} className={"w-7 h-7 mr-2 grayscale hover:grayscale-0 transition duration-300"}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Customer Service
                        </h4>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                    Shipping & Delivery Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                    Disclaimer Policy
                                </a>
                            </li>
                            <li>
                                <a className="text-base text-gray-500 hover:text-gray-900" href="#">
                                   Return Policy
                                </a>
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
