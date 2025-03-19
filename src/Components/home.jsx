import EMR from '../assets/emr.png';
import { ContactUs } from './contact';
import HeroImage from '../assets/heroVector.png';
import React, { useState, useEffect, useRef } from 'react';
import { CompanyList, FAQs, FeatureTile, Testimonials } from "./widgets";
import { answerPoints, answers, choiceFeatures, questions } from './values';

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
            <section className="flex flex-col md:flex-row items-center justify-between py-8 sm:py-12 px-4 sm:px-8 md:pl-10">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl w-full font-bold text-gray-800 mb-2">
                        Advancing Health Care
                        <span className="block sm:inline text-3xl sm:text-4xl md:text-5xl font-bold">
                            Through <span className="text-teal-600">Digital Intelligence</span>
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mt-4 mb-6 sm:mb-8">Intelligent Care, Better Healthcare</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-5 sm:px-6 py-3 bg-gradient-to-b from-[#159957] to-[#155799] text-white font-medium rounded-md transition-colors">Get Started</button>
                        <button className="px-5 sm:px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-md hover:bg-teal-50 transition-colors">Schedule a Demo</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <img src={HeroImage} alt="" className="w-full h-auto object-cover" />
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
        <div className="max-w-3xl mx-auto p-4 sm:p-6">
            <h1 className="text-center text-2xl sm:text-3xl font-bold mb-2">
                <span className="text-indigo-900">Quiz </span>
                <span className="text-teal-600">Title</span>
            </h1>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-4 sm:mb-8 px-4 sm:px-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
            {!showResults
                ? <>
                    <div className="flex justify-center items-center mb-8 sm:mb-12">
                        {[1, 2, 3, 4].map((step) => (
                            <React.Fragment key={step}>
                                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${step < currentStep
                                    ? 'bg-teal-600 text-white'
                                    : step === currentStep
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-gray-200 text-gray-500'
                                    }`}> {step}
                                </div>
                                {step < 4 && <div className={`h-1 w-12 sm:w-16 ${step < currentStep ? 'bg-teal-600' : 'bg-gray-200'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                    <div ref={contentRef} className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                        <h2 className="text-center text-base sm:text-lg font-medium mb-4 sm:mb-6">{currentStep}. {questions[currentStep - 1].text}</h2>
                        <div className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 sm:text-center mb-6 sm:mb-8">
                            {answers.map((answer) => (
                                <div key={answer} className="flex items-center">
                                    <input type="checkbox" id={answer} checked={selectedAnswer === answer} onChange={() => setSelectedAnswer(answer)} className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 rounded" />
                                    <label htmlFor={answer} className="ml-2 text-sm sm:text-base text-gray-700">{answer}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="flex items-center justify-center px-16 sm:px-24 py-2 sm:py-3 bg-gradient-to-r from-teal-600 to-blue-800 text-white rounded-md" onClick={handleNext}>
                            Submit Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </>
                : <div className="transition-opacity duration-500 ease-in-out opacity-100">
                    <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Your Result</h2>
                    {renderResultContent()}
                    <div className="flex justify-center mt-6 sm:mt-8">
                        <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-800 text-white rounded-md" onClick={() => { setCurrentStep(1); setSelectedAnswer(''); setScore(0); setShowResults(false); }}>Retake Quiz</button>
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