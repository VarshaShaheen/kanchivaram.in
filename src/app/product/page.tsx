import React from 'react';
import Footer from '@/app/components/footer';
import SingleProductDescription from '@/app/components/SingleProductDescription';
import '../globals.css';

const Page = () => {
    return (
        <main className="w-full h-full">
            <section className="w-full h-full">
                <div className="container mx-auto px-4 py-8">
                    <SingleProductDescription />
                </div>
            </section>

            <section id="footer">
                <Footer />
            </section>
        </main>
    );
};

export default Page;
