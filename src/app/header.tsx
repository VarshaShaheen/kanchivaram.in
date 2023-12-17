"use client"
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import './globals.css'

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-white">
            <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-0 md:py-0 md:block">
                        {/* LOGO */}
                        <Link href="/">
                            <Image src="/logo.png" alt="logo" width={100} height={100}/>
                        </Link>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                                ) : (
                                    <Image
                                        src="/hamburger-menu.svg"
                                        width={30}
                                        height={30}
                                        alt="logo"
                                        className="focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-2 mt-4 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'p-12 md:p-0 block' : 'hidden'
                        }`}
                    >
                        <ul className="h-auto items-center justify-center md:flex ">
                            <li className="pb-2 text-sm px-4 text-center border-b-2 md:border-b-0 hover:bg-green-700 border-green-700 md:hover:text-green-700 md:hover:bg-transparent">
                                <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                    ABOUT
                                </Link>
                            </li>
                            <li className="pb-2 text-sm px-4 text-center border-b-2 md:border-b-0 hover:bg-green-700 border-green-700 md:hover:text-green-700 md:hover:bg-transparent">
                                <Link href="#category-gallery" onClick={() => setNavbar(!navbar)}>
                                    CATEGORIES
                                </Link>
                            </li>
                            <li className="pb-2 text-sm px-4 text-center border-b-2 md:border-b-0 hover:bg-green-700 border-green-700 md:hover:text-green-700 md:hover:bg-transparent">
                                <Link href="#testimonials" onClick={() => setNavbar(!navbar)}>
                                    TESTIMONY
                                </Link>
                            </li>
                            <li className="pb-2 text-sm px-4 text-center border-b-2 md:border-b-0 hover:bg-green-700 border-green-700 md:hover:text-green-700 md:hover:bg-transparent">
                                <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                                    CONTACT
                                </Link>
                            </li>
                            <li className="pb-2 text-sm px-4 text-center border-b-2 md:border-b-0 hover:bg-green-700 border-green-700 md:hover:text-green-700 md:hover:bg-transparent">
                                <Link href="/cart" onClick={() => setNavbar(!navbar)}>
                                    <Image
                                        src="/cart.png"
                                        alt="cart"
                                        width={26}
                                        height={26}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
