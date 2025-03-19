import { testimonials } from './values';
import Image from '../assets/careers.jpg';
import Image1 from '../assets/careers1.jpg';
import { useEffect, useState } from 'react';

export function Careers() {
    return (
        <>
            <HeroSection />
            <EmployeeTestimonials />
            <Life />
        </>
    )
}

function HeroSection() {
    return (
        <div className="relative w-full h-[35rem] overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#155799]/65 to-[#159957]/65"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="mt-2 text-2xl font-bold text-white md:text-5xl">Careers</h1>
                    <p className="mt-3 text-md font-medium text-gray-200">Last Edited: March 17, 2025.</p>
                    <button className="mt-7 text-teal-700 bg-white border-0 py-2 px-12 focus:outline-none rounded text-lg">Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

function EmployeeTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return Array(rating).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        ));
    };

    const renderDots = () => {
        return testimonials.map((_, index) => (
            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 mx-1 rounded-full ${currentIndex === index ? "bg-teal-600" : "bg-gray-300"}`} aria-label={`Go to slide ${index + 1}`} />
        ));
    };

    return (
        <div className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    <span className="text-navy-900">Employee</span>
                    <span className="bg-gradient-to-r from-[#159957] to-[#155799] text-transparent bg-clip-text"> Testimonials</span>
                </h2>
                <div className="relative overflow-hidden">
                    <div className="transition-transform duration-500 ease-in-out flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0 px-4">
                                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                    <div className="md:w-2/3">
                                        <div className="relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-teal-600 mb-4" viewBox="0 0 975.036 975.036">
                                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                            </svg>
                                            <p className="text-gray-700 text-lg pl-6 pr-4 relative z-10 mb-6">{testimonial.quote}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-teal-600 mb-4 rotate-270" viewBox="0 0 975.036 975.036">
                                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                            </svg>
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                                            <p className="text-gray-600">{testimonial.title}</p>
                                            <div className="mt-2">{renderStars(testimonial.rating)}</div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 h-full mt-8 md:mt-0">
                                        <div className="rounded-lg overflow-hidden shadow-lg">
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="w-full h-96 object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-8">{renderDots()}</div>
            </div>
        </div>
    );
}

function Life() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Life at <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Meddflow</span></h1>
                    <p className="mt-2 mb-8 leading-relaxed">The growth of a company is directly proportional to the growth of<br /> its people. Meddflow creates an environment of opportunities and<br /> self-development for every member of its family.<br /> And we hate monotony as much as you do. So life here is a<br /> cocktail of work and play. We have fun. We crack jokes. We fight<br /> boredom in every way possible!</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" src={Image1} alt="" />
                </div>
            </div>
        </section>
    )
}