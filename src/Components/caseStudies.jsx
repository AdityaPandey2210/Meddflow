import { useState } from 'react';
import { motion } from 'framer-motion';
import Mockup from '../assets/product8.png';
import { metrics, overviewImpact } from './values';
import CaseStudyHero from '../assets/caseStudy.jpg';
import { FAQs, HeroSection, OverviewModal, RequestAppointment, Testimonials } from "./widgets";

export function CaseStudies() {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <HeroSection image={CaseStudyHero} title={'Case Studies'} description={'Explore how our digital healthcare solutions have improved patient care, streamlined operations, and enhanced efficiency across various healthcare providers.'} isButtonAvailable={false} />
            <ImpactOverview />
            <Testimonials />
            <Metrics />
            <RequestAppointment image={Mockup} title={'Ready to transform your healthcare operations? Contact us to learn how our digital solutions can help your organization thrive.'} />
            <FAQs />
        </div>
    )
}

function ImpactOverview() {
    const [activePopup, setActivePopup] = useState(null);
    const OverviewTile = ({ image, title, description, index, detailedContent }) => {
        const openPopup = () => setActivePopup(index);
        const closePopup = () => setActivePopup(null);
        return (
            <>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="px-2.5 py-2.5 lg:w-1/3 md:w-1/2 w-full">
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }} className="h-full flex flex-col items-center border-gray-400 border rounded hover:text-white hover:bg-gradient-to-t from-[#159957] to-[#155799]">
                        <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="w-full h-48 bg-gray-100 object-cover object-center flex-shrink-0 rounded rounded-b-none" src={image} alt='' />
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="p-7 flex-grow text-start">
                            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-xl font-bold">{title}</motion.h2>
                            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-sm">{description}</motion.p>
                            <motion.button initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.5, delay: 0.5 }} className='mt-3' onClick={openPopup}>Read More <i className="bi bi-chevron-right text-sm"></i></motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <OverviewModal isOpen={activePopup === index} onClose={closePopup} title={title} content={detailedContent} />
            </>
        );
    };

    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="container px-5 py-24 mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col text-center w-full mb-20">
                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Overview of<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]"> Our Impact</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</motion.p>
            </motion.div>
            <div className="flex flex-wrap">
                {overviewImpact.map((overview, index) => <OverviewTile key={index} index={index} image={overview.image} title={overview.title} description={overview.description} detailedContent={overview.detailedContent} />)}
            </div>
        </motion.section>
    );
}

function Metrics() {
    const MetricTile = ({ percentage, heading }) => {
        return (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-4 md:w-1/4 sm:w-1/2 w-full items-center justify-center text-center">
                <motion.div whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }} transition={{ duration: 0.3 }} className="w-full h-40 px-4 py-6 rounded-lg">
                    <motion.h2 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }} className="ml-6 title-font font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">{percentage}<span className='text-4xl font-bold'> %</span></motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-3 items-center">{heading}</motion.p>
                </motion.div>
            </motion.div>
        )
    }

    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col text-center w-full mb-12">
                    <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Key Outcomes <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">& Metrics</span></motion.h1>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</motion.p>
                </motion.div>
                <div className="flex flex-wrap -m-4 text-center">
                    {metrics.map((metric, index) => <MetricTile key={index} percentage={metric.percentage} heading={metric.heading} />)}
                </div>
            </div>
        </motion.section>
    )
}
