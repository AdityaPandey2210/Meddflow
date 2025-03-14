import EMR from '../assets/emr.png';
import { ContactUs } from './contact';
import HeroImage from '../assets/heroVector.png';
import { CompanyList, FeatureTile } from "./widgets";
import React, { useState, useEffect, useRef } from 'react';
import { answerPoints, answers, choiceFeatures, faqs, questions, testimonials } from './values';

export function Home() {
    return (
        <>
            <HeroSection />
            <EMRData />
            <Questionnaire />
            <WhyChooseUs />
            <Testimonials />
            <FAQs />
            <ContactUs />
        </>
    );
}

function HeroSection() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between py-12 pl-8 md:pl-10">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl w-full font-bold text-gray-800 mb-2">Advancing Health Care
                        <span className="text-4xl md:text-5xl font-bold"> Through <span className="text-teal-600">Digital Intelligence</span></span>
                    </h1>
                    <p className="text-xl text-gray-700 mt-4 mb-8">Intelligent Care, Better Healthcare</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-6 py-3 bg-gradient-to-b from-[#159957] to-[#155799] text-white font-medium rounded-md transition-colors">Get Started</button>
                        <button className="px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-md hover:bg-teal-50 transition-colors">Schedule a Demo</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative">
                        <img src={HeroImage} alt="" className="w-full h-auto" />
                    </div>
                </div>
            </section>
            <CompanyList />
        </>
    );
}

function EMRData() {
    return (
        <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="" src={EMR} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Electronic Medical Records (EMR)
                    <br className="hidden lg:inline-block" />& Patient Data
                </h1>
                <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos est officiis recusandae quas fugit maxime adipisci eveniet perferendis architecto? Ducimus ratione itaque praesentium cumque qui laborum expedita vitae.</p>
                <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium minus eligendi suscipit maxime illo.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-gradient-to-l from-[#159957] to-[#155799] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
                    <button className="ml-4 inline-flex text-gray-700 border border-[##15995759] py-2 px-6 focus:outline-none rounded text-lg">Schedule Demo</button>
                </div>
            </div>
        </section>
    )
}

function Questionnaire() {
    const contentRef = useRef(null);
    const [score, setScore] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);
    const [showResults, setShowResults] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('Sometimes');
    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => { setIsTransitioning(false); }, 500);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    const handleNext = () => {
        if (!selectedAnswer) return;
        setScore(prevScore => prevScore + answerPoints[selectedAnswer]);
        setIsTransitioning(true);
        setTimeout(() => {
            if (currentStep < questions.length) {
                setCurrentStep(currentStep + 1);
                setSelectedAnswer('');
            } else {
                setShowResults(true);
            }
        }, 300);
    };

    const renderResultContent = () => {
        return (
            <div className="text-center p-6 bg-blue-400 rounded-lg">
                <p className="text-white">You scored {score} points.</p>
            </div>
        );
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-center text-3xl font-bold mb-2">
                <span className="text-indigo-900">Quiz </span>
                <span className="text-teal-600">Title</span>
            </h1>
            <p className="text-center text-gray-500 mb-8 px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            {!showResults ? (
                <>
                    <div className="flex justify-center items-center mb-12">
                        {[1, 2, 3, 4].map((step) => (
                            <React.Fragment key={step}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step < currentStep
                                    ? 'bg-teal-600 text-white'
                                    : step === currentStep
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-gray-200 text-gray-500'
                                    }`}> {step}
                                </div>
                                {step < 4 && <div className={`h-1 w-16 ${step < currentStep ? 'bg-teal-600' : 'bg-gray-200'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                    <div ref={contentRef} className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <h2 className="text-center text-lg font-medium mb-6">{currentStep}. {questions[currentStep - 1].text}</h2>
                        <div className="flex justify-center space-x-8 mb-8">
                            {answers.map((answer) => (
                                <div key={answer} className="flex items-center">
                                    <input type="checkbox" id={answer} checked={selectedAnswer === answer} onChange={() => setSelectedAnswer(answer)} className="w-5 h-5 border-2 border-gray-300 rounded" />
                                    <label htmlFor={answer} className="ml-2 text-gray-700">{answer}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="flex items-center justify-center px-24 py-3 bg-gradient-to-r from-teal-600 to-blue-800 text-white rounded-md" onClick={handleNext}>Submit Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </>
            )
                : <div className="transition-opacity duration-500 ease-in-out opacity-100">
                    <h2 className="text-center text-2xl font-bold mb-6">Your Result</h2>
                    {renderResultContent()}
                    <div className="flex justify-center mt-8">
                        <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-800 text-white rounded-md" onClick={() => { setCurrentStep(1); setSelectedAnswer(''); setScore(0); setShowResults(false); }}>Retake Quiz</button>
                    </div>
                </div>
            }
        </div>
    );
}

function WhyChooseUs() {
    return (
        <section className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Why Choose Us?</h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-gradient-to-l from-[#159957] to-[#155799] inline-flex"></div>
                </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                {choiceFeatures.map((feature, index) => <FeatureTile key={index} title={feature.title} description={feature.description} icon={feature.icon} />)}
            </div>
        </section>
    )
}

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
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
                    <span className="text-navy-900">See What </span>
                    <span className="bg-gradient-to-r from-[#159957] to-[#155799] text-transparent bg-clip-text">Our Users Say!</span>
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

function FAQs() {
    const contentRefs = useRef([]);
    const [openFAQ, setOpenFAQ] = useState(0);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, faqs.length);
    }, []);
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12 bg-gray-50">
            <div className="text-center mb-10">
                <p className="text-green-600 font-medium uppercase mb-1">FAQS</p>
                <h2 className="text-2xl font-bold">
                    <span className="text-gray-900">Explore </span>
                    <span className="text-green-600">Common Questions</span>
                </h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="py-2 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                        <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onClick={() => toggleFAQ(index)}>
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            <span className="text-gray-400">
                                {openFAQ === index
                                    ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                }
                            </span>
                        </button>

                        <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: openFAQ === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px", }}>
                            <div ref={el => contentRefs.current[index] = el} className="px-6 pb-4">
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}