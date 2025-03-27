import { useState } from "react";
import { motion } from "framer-motion";
import { service_ctas } from "./values";
import Service1 from '../assets/services1.png';
import ServiceImage from '../assets/services.png';
import { CTATile, FAQs, HeroSection, RequestAppointment, ServiceModal, Working } from "./widgets";

export function Services() {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <HeroSection image={ServiceImage} title={'Digital Transformation'} description={'Future-proof your healthcare system with cutting-edge technology.'} isButtonAvailable={true} />
            <ServiceCTAs />
            <Working />
            <RequestAppointment image={Service1} title={'Future-proof your healthcare system with cutting-edge technology.'} isHeadAvailable={true} />
            <FAQs />
        </div>
    )
}

function ServiceCTAs() {
    const [openModal, setOpenModal] = useState(null);
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="container px-5 pt-28 pb-20 mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col text-center w-full mb-12">
                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Our Healthcare <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Digital Solutions</span></motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</motion.p>
            </motion.div>
            <div className="flex flex-wrap sm:m-4 mx-4">
                {service_ctas.map((service, index) => <CTATile key={index} title={service.title} description={service.description} image={service.image} delay={0.1 * index} onReadMore={() => setOpenModal(index)} />)}
            </div>
            {service_ctas.map((service, index) => (
                <ServiceModal key={index} isOpen={openModal === index} onClose={() => setOpenModal(null)}>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p>{service.fullDescription}</p>
                </ServiceModal>
            ))}
        </motion.section>
    );
}