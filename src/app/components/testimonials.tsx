"use client"
import React, { useState } from 'react';

const testimonials = [
    {
        id: 1,
        text: "I have bought 4 sarees from KANCHIVARAM. IN boutique...... I love this sarees..... New design and colour combination is very good...... Pure kanchi silk..... Quality is very good..... Fast delivery and packaging is good....will buy again and again...you can trust this store to buy original kanchipuram silk sarees..... Easy to Carry i like this boutique...... Thanks for KANCHIVARAM. IN😍❤️",
        author: "JSheebalenin",
        imageUrl: "/testimonials/swasika.png",
    },
    {
        id: 2,
        text: "I have purchased a tussar saree from Kanchivaram for my mother. The saree was awesome and my mother loved it so much. I am very happy with service by Kanchivaram. I have received the saree the next day of ordering. I am highly satisfied with my purchase and I do recommend Kanchivaram to my family and friends. Thank you Kanchivaram once again for your wonderful service.",
        author: "Gissy Shibu",
        imageUrl: "/testimonials/shilpa.png",
    },
    {
        id: 3,
        text: "Based out here in Scotland UK Arya and her team did a fantastic job of showing me all the sarees which I selected virtually even going beyond on not selected ones and picked up couple for my Mum.Their patience and feedback is commendable.Absolutely my parents loved the saree and sarees smell was very nice Sandal woody.love Natasha",
        author: "Natasha K",
        imageUrl: "/testimonials/perly.png",
    },
];

const Testimonials = () => {
    const [testimonialActive, setTestimonialActive] = useState(2);
    const activeTestimonial = testimonials.find(testimonial => testimonial.id === testimonialActive);
    if (!activeTestimonial) {
        return <div>Testimonial not found</div>;
    }

    return (
        <div className="antialiased sans-serif text-gray-600 rounded m-10">
            <div className="my-8 md:my-18 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
                <div
                    className="testimonial-image-container relative w-full flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: `url(${activeTestimonial.imageUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        margin: 'auto',
                    }}
                >
                    {/* Navigation Arrows */}
                    <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
                        <button
                            className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-green-950 font-bold w-12 h-10"
                            onClick={() => setTestimonialActive(prevActive => prevActive === 1 ? testimonials.length : prevActive - 1)}
                        >
                            &#8592;
                        </button>
                        <button
                            className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-green-950 font-bold w-12 h-10"
                            onClick={() => setTestimonialActive(prevActive => prevActive === testimonials.length ? 1 : prevActive + 1)}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 md:w-1/2">
                    <div className="flex flex-col h-full relative">
                        <div className="h-full relative z-10 mt-8 ml-2 px-6 py-6 md:px-10 md:py-8">
                            <p className="text-gray-600 serif font-normal italic text-m md:text-xl">
                                {activeTestimonial.text}
                            </p>
                            <div className="text-center mt-4">
                            <h2 className="text-sm md:text-base font-bold text-gray-700">
                                    {activeTestimonial.author}
                                </h2>
                            </div>
                        </div>
                        {/* Navigation Buttons with Initials */}
                        <div className="flex my-4 justify-center items-center">
                            {testimonials.map((testimonial) => (
                                <button
                                    key={testimonial.id}
                                    onClick={() => setTestimonialActive(testimonial.id)}
                                    className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== testimonial.id ? 'h-12 w-12 opacity-50 bg-gray-300 text-gray-600' : 'h-16 w-16 opacity-100 bg-green-900 text-white'}`}
                                >
                                    {testimonial.author.charAt(0)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
