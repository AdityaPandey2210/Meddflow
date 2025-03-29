import { useEffect, useState } from 'react';
import Mockup from '../assets/product1.png';
import Mockup1 from '../assets/product2.png';
import Mockup2 from '../assets/product3.png';
import Mockup3 from '../assets/product4.png';
import Mockup4 from '../assets/product5.png';
import Mockup5 from '../assets/product6.png';
import Mockup6 from '../assets/product7.png';
import Mockup7 from '../assets/product8.png';
import HeroImage from '../assets/product.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { ProductFeaturesLTR, ProductFeaturesRTL, RequestAppointment, Working } from './widgets';
import { dataHandling, globalAccessibility, historyReports, medCertificates, medDocs, medicalProfiles, productFullTexts, productHeroMsgs, vitalTracking } from './values';

export function Product() {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <ProductHero />
            <ProductFeaturesRTL image={Mockup} title={'Comprehensive Health Profiles & Family Medical Records.'} description={'A single, secure place for all your health information—organized, accessible, and easy to manage.'} features={medicalProfiles} fullText={productFullTexts[0]} />
            <ProductFeaturesLTR image={Mockup1} title={'Smart Medical Document Vault & Digital Certification.'} description={'Effortlessly manage prescriptions, lab reports, and official medical documents—all in one place.'} features={medDocs} fullText={productFullTexts[1]} />
            <ProductFeaturesRTL image={Mockup2} title={'Seamless Scheduling & Hassle-Free Appointments.'} description={'Book, manage, and track doctor appointments with zero stress.'} features={globalAccessibility} fullText={productFullTexts[2]} />
            <ProductFeaturesLTR image={Mockup3} title={'Virtual Healthcare Anytime, Anywhere.'} description={'Get expert medical advice from the comfort of your home with secure telehealth services.'} features={vitalTracking} fullText={productFullTexts[3]} />
            <ProductFeaturesRTL image={Mockup4} title={'Instant Prescriptions & Smart Medicine Management.'} description={'Digital prescriptions, easy medication ordering, and automated reminders for better health management.'} features={historyReports} fullText={productFullTexts[4]} />
            <ProductFeaturesLTR image={Mockup5} title={'Streamlined Payments & Exclusive Healthcare Plans.'} description={'Flexible payment options, subscription plans, and rewards for a stress-free healthcare experience.'} features={medCertificates} fullText={productFullTexts[5]} />
            <ProductFeaturesRTL image={Mockup6} title={'Engaging Patient Care & Proactive Health Monitoring'} description={'Stay in control of your health journey with smart tracking and personalized care plans.'} features={dataHandling} fullText={productFullTexts[6]} />
            <Working />
            <RequestAppointment image={Mockup7} title={'A secure, intelligent EMR system designed for efficient patient management.'} isHeadAvailable={true} />
        </div>
    )
}

function ProductHero() {
    const history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(0);
    const renderDots = () => {
        return productHeroMsgs.map((_, index) => <motion.button key={index} onClick={() => setCurrentIndex(index)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={`w-2.5 h-2.5 mx-1 rounded-full ${currentIndex === index ? "bg-teal-600" : "bg-gray-300"}`} aria-label={`Go to slide ${index + 1}`} />);
    };

    const contactUs = () => {
        history.push('/contact');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % productHeroMsgs.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-[#155799] to-[#159957] mx-auto flex px-7 py-24 md:flex-row flex-col items-center relative overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.5 }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">{productHeroMsgs[currentIndex].heading}</h1>
                    <p className="mb-8 text-lg leading-relaxed text-gray-100">{productHeroMsgs[currentIndex].subHeading}</p>
                    <motion.button onClick={contactUs} whileHover={{ scale: 1.05, backgroundColor: "#ffffff", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }} whileTap={{ scale: 0.95 }} className="w-1/3 inline-flex text-center items-center text-green-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Schedule a Demo</motion.button>
                </motion.div>
            </AnimatePresence>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="absolute text-start top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-4 py-2 rounded-xl shadow-lg">
                    <h1 className='text-lg font-bold'>COMING<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"> SOON</span></h1>
                </div>
                <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.03, rotate: 1 }} src={HeroImage} className="object-cover object-center rounded" alt="" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">{renderDots()}</motion.div>
        </motion.section>
    );
}