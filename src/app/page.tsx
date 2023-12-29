import Image from 'next/image'
import CarouselComponent from "./components/carousel";
import Gallery from "@/app/components/price-categories";
import Categorygallery from "@/app/components/categories";
import Testimonials from "@/app/components/testimonials";
import Footer from "@/app/components/footer";
// import CuratorFeed from "@/app/components/instagram";
import React from "react";

export default function Home() {
    return (
        <main className={'w-full h-full'}>
            <h5 className="text-red-500 text-lg font-bold text-center">Our site is under construction, so please refrain from buying
                products now
            </h5>

            <CarouselComponent/>

            <section className={"mt-10 mb-10 text-center"} id="price-cat">
                <h1 className={"font-bold text-2xl mb-10 font-serif "}>SHOP BY PRICE</h1>
                <Gallery/>
            </section>

            <section className={"mt-10 mb-10 ml-10 mr-10 w-100"} id="categories">
                <h1 className={"font-bold text-2xl mb-10 text-center col-span-6 font-serif"}>CATEGORY</h1>
                <div id="category-gallery" className="col-span-6 lg:col-span-4">
                    <Categorygallery/>
                </div>
            </section>


            {/*<section id="instagram">*/}
            {/*    <h1 className={"font-bold text-2xl mb-5 text-center col-span-6"}>WATCH AND SHOP</h1>*/}
            {/*    <CuratorFeed />*/}
            {/*</section>*/}


            {/*<section id="best sellers">*/}
            {/*    <h1>Best Sellers</h1>*/}
            {/*</section>*/}


            <section id="testimonials">
                <h1 className={"font-bold text-2xl mb-5 text-center col-span-6 font-serif"}>TESTIMONIALS</h1>
                <Testimonials/>
            </section>
            <section id="footer">
                <Footer/>
            </section>
        </main>
    )
}
