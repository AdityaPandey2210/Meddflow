import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from '../assets/careers.jpg';
import Image2 from '../assets/careers2.jpg';
import Image1 from '../assets/careers1.jpg';
import ReCAPTCHA from 'react-google-recaptcha';
import { positionDetails, positions, whyJoinUs } from './values';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { EmployeeTestimonials, PositionModal, WhyJoinUs } from './widgets';

export function Careers() {
    return (
        <>
            <HeroSection />
            <OpenPositions />
            <ApplyForm />
            <WhyJoin />
            {/* <EmployeeTestimonials /> */}
            <Life />
        </>
    )
}

function HeroSection() {
    const history = useHistory();
    const handleNav = () => { history.push('/contact'); }
    return (
        <div className="relative w-full h-[35rem] overflow-hidden">
            <motion.div initial={{ scale: 1.1, opacity: 0.8 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute inset-0 bg-gradient-to-r from-[#155799]/65 to-[#159957]/65"></motion.div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <motion.h1 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-2 text-2xl font-bold text-white md:text-5xl">Careers</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="mt-3 text-md font-medium text-gray-200">Last Edited: March 17, 2025</motion.p>
                    <motion.button initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }} whileTap={{ scale: 0.95 }} onClick={handleNav} className="mt-7 text-teal-700 bg-white border-0 py-2 px-12 focus:outline-none rounded text-lg">Get in Touch</motion.button>
                </div>
            </div>
        </div>
    )
}

function OpenPositions() {
    const [openModal, setOpenModal] = useState(null);

    return (
        <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"> Open <span className="bg-gradient-to-r from-[#159957] to-[#155799] text-transparent bg-clip-text"> Positions</span>
                </motion.h1>
                {positions.map((position, index) => (
                    <motion.button key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }} whileHover={{ scale: 1.02, backgroundColor: "rgba(21, 153, 87, 0.05)" }} className="h-full w-full flex items-center border-b border-gray-500 p-4 text-start" onClick={() => setOpenModal(position.title)}>
                        <div className="w-full flex justify-between">
                            <h2 className="text-gray-900 title-font font-medium">{position.title}</h2>
                            <motion.i whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="bi bi-chevron-right text-"></motion.i>
                        </div>
                    </motion.button>
                ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <motion.img whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="object-cover object-center rounded-lg" src={Image2} alt="" />
            </motion.div>
            {positions.map((position) => (
                <PositionModal key={position.title} isOpen={openModal === position.title} onClose={() => setOpenModal(null)} position={position.title}>
                    <h2 className="text-2xl font-bold mb-4">{position.title}</h2>
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Job Description</h3>
                        <p className="text-gray-700">{positionDetails[position.title].description}</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Roles and Responsibilities</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {positionDetails[position.title].requirements.map((req, index) => <li key={index}>{req}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Technical Skills</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Minimum 2-5 years of progressive experience</li>
                            <li>Strong analytical skills</li>
                        </ul>
                    </div>
                </PositionModal>
            ))}
        </section>
    )
}

function ApplyForm() {
    const captchaRef = useRef(null);
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Please verify the captcha before submitting");
            return;
        }

        captchaRef.current.reset();
        setCaptchaValue(null);
    };

    return (
        <section className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-start w-full mb-12">
                <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-gray-900">Fill Out The Form</h1>
                <p className="leading-relaxed text-base">Help us with the following details.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-6/7">
                <div className="flex flex-wrap">
                    <div className="p-2 w-1/2">
                        <div className="relative w-full">
                            <label htmlFor="firstName" className="font-semibold text-sm text-black">First Name <span className='text-red-600'>*</span></label>
                            <input required type="text" id="firstName" name="firstName" placeholder='First Name' className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative w-full">
                            <label htmlFor="lastName" className="font-semibold text-sm text-black">Last Name <span className='text-red-600'>*</span></label>
                            <input required type="text" id="lastName" name="lastName" placeholder='Last Name' className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative w-full">
                            <label htmlFor="email" className="font-semibold text-sm text-black">Email <span className='text-red-600'>*</span></label>
                            <input required type="email" id="email" name="email" placeholder='Email Address' className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative w-full">
                            <label htmlFor="phone" className="font-semibold text-sm text-black">Phone Number <span className='text-red-600'>*</span></label>
                            <input required type="phone" id="phone" name="phone" placeholder='+91 XXXXXXXXXX' className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative w-full">
                            <label htmlFor="role" className="font-semibold text-sm text-black">Applying for Role: <span className='text-red-600'>*</span></label>
                            <input required type="text" id="role" name="role" placeholder='Enter Role...' className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative w-full">
                            <label htmlFor="resume" className="font-semibold text-sm text-black">Upload Resume <span className='text-red-600'>*</span></label>
                            <div className="mt-2 w-full bg-gray-100 bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                <input required type="file" id="resume" name="resume" className="hidden" accept=".pdf,.doc,.docx" />
                                <label htmlFor="resume" className="flex items-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="text-gray-500">Upload Resume Here</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 p-2 w-full flex items-center justify-end flex-wrap">
                        <div className="mr-4">
                            <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptchaChange} ref={captchaRef} />
                        </div>
                        <button type="submit" className="text-white border-0 py-3 px-10 focus:outline-none bg-gradient-to-r from-[#159957] to-[#155799] rounded text-lg" disabled={!captchaValue}>Submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

function WhyJoin() {
    return (
        <section className="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Why Join<span className="bg-gradient-to-r from-[#159957] to-[#155799] text-transparent bg-clip-text"> Meddflow</span></motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-2.5 leading-relaxed">We are a team of dreamer and doers. Designers and coders.<br /> We are driven by employee-centric HR policies, best in the<br /> class pay scale, and super talented folks to work with.</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="grid grid-cols-2 gap-4 h-full w-full">
                    {whyJoinUs.map((title, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }} whileHover={{ scale: 1.05 }}>
                            <WhyJoinUs number={title.number} title={title.title} isPercentage={title.isPercentage} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

function Life() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Life at <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Meddflow</span></motion.h1>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-2 mb-8 leading-relaxed">The growth of a company is directly proportional to the growth of<br /> its people. Meddflow creates an environment of opportunities and<br /> self-development for every member of its family.<br /> And we hate monotony as much as you do. So life here is a<br /> cocktail of work and play. We have fun. We crack jokes. We fight<br /> boredom in every way possible!</motion.p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <motion.img whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="object-cover object-center rounded" src={Image1} alt="" />
                </motion.div>
            </div>
        </section>
    )
}