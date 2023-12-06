"use client"
import { useState } from 'react';
import aryaImage from './arya.png';

const Testimonials = () => {
    const [testimonialActive, setTestimonialActive] = useState(2);

    return (
        <div className="antialiased sans-serif bg-gray-200 text-gray-600 rounded m-10 ">
            <div className="my-8 md:my-18 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden ">
                <div className="relative w-full py-2 md:py-24 bg-[url('/testimonial-bg.JPG')] bg-cover md:w-1/2 flex flex-col item-center justify-center">
                    <div className="absolute top-0 left-0 z-10 grid-green-950 w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
                    <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
                        <button
                            className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-green-950 font-bold w-12 h-10"
                            onClick={() => setTestimonialActive((prevActive) => (prevActive === 1 ? 3 : prevActive - 1))}
                        >
                            &#8592;
                        </button>
                        <button
                            className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-green-950  font-bold w-12 h-10"
                            onClick={() => setTestimonialActive((prevActive) => (prevActive >= 3 ? 1 : prevActive + 1))}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 md:w-1/2">
                    <div className="flex flex-col h-full relative">
                        <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-green-950  fill-current w-12 h-12 md:w-16 md:h-16"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                            </svg>
                        </div>

                        <div className="h-full relative z-10 mt-8 ml-2">
                            {testimonialActive === 1 && (
                                <p className="text-gray-600 serif font-normal italic mt-3 px-6 py-6 md:px-10 md:py-8 text-m md:text-xl">
                                    I have bought 4 sarees from KANCHIVARAM. IN boutique...... I love this sarees..... New design and colour combination is very good...... Pure kanchi silk..... Quality is very good..... Fast delivery and packaging is good....will buy again and again...you can trust this store to buy original kanchipuram silk sarees..... Easy to Carry i like this boutique...... Thanks for KANCHIVARAM. IN😍❤️
                                </p>
                            )}

                            {testimonialActive === 2 && (
                                <p className="text-gray-600 serif font-normal italic mt-3 px-6 py-6 md:px-10 md:py-8 text-m md:text-xl">
                                    I have purchased a tussar saree from Kanchivaram  for my mother. The saree was awesome and my mother loved it so much. I am very happy with  service by Kanchivaram. I have received the saree the next day of ordering. I am highly satisfied with my purchase and I do recommend Kanchivaram to my family and friends. Thank you Kanchivaram once again for your wonderful service.
                                </p>
                            )}

                            {testimonialActive === 3 && (
                                <p className="text-gray-600 serif font-normal italic mt-3 px-6 py-6 md:px-10 md:py-8 text-m md:text-xl">
                                    Based out here in Scotland UK Arya and her team did a fantastic job of showing me all the sarees which I selected virtually even going beyond on not selected ones and picked up couple for my Mum.Their patience and feedback is commendable.Absolutely my parents loved the saree and sarees smell was very nice Sandal woody.love Natasha
                                </p>
                            )}
                        </div>

                        <div className="flex my-4 justify-center items-center">
                            <button
                                onClick={() => setTestimonialActive(1)}
                                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== 1 ? 'h-12 w-12 opacity-25 bg-green-600 text-gray-200' : 'h-16 w-16 opacity-100 bg-green-950 text-white'}`}
                            >
                                SL
                            </button>
                            <button
                                onClick={() => setTestimonialActive(2)}
                                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-green-950 rounded-full mx-2 ${testimonialActive !== 2 ? 'h-12 w-12 opacity-25 bg-green-600 text-gray-200' : 'h-16 w-16 opacity-100 bg-green-950 text-white'}`}
                            >
                                GS
                            </button>
                            <button
                                onClick={() => setTestimonialActive(3)}
                                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-green-950 rounded-full mx-2 ${testimonialActive !== 3 ? 'h-12 w-12 opacity-25 bg-green-600 text-gray-200' : 'h-16 w-16 opacity-100 bg-green-950 text-white'}`}
                            >
                                NK
                            </button>
                        </div>

                        <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
                            {testimonialActive === 1 && (
                                <div className="text-center">
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">JSheebalenin</h2>
                                </div>
                            )}

                            {testimonialActive === 2 && (
                                <div className="text-center">
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Gissy Shibu</h2>
                                    {/*<small className="text-gray-500 text-xs md:text-sm truncate">CTO, XYZ Corp.</small>*/}
                                </div>
                            )}

                            {testimonialActive === 3 && (
                                <div className="text-center">
                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Natasha K</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
