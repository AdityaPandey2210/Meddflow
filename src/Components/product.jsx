import Mockup from '../assets/product1.png';
import Mockup1 from '../assets/product2.png';
import Mockup2 from '../assets/product3.png';
import Mockup3 from '../assets/product4.png';
import Mockup4 from '../assets/product5.png';
import Mockup5 from '../assets/product6.png';
import Mockup6 from '../assets/product7.png';
import Mockup7 from '../assets/product8.png';
import HeroImage from '../assets/product.png';
import { ProductFeaturesLTR, ProductFeaturesRTL, RequestAppointment, Working } from './widgets';
import { dataHandling, globalAccessibility, historyReports, medCertificates, medDocs, medicalProfiles, vitalTracking } from './values';

export function Product() {
    return (
        <>
            <ProductHero />
            <ProductFeaturesRTL image={Mockup} title={'Personal & Family Medical Profiles'} description={'Maintain detailed medical records for individuals and families in one secure location. Easily update and access health data anytime, anywhere.'} features={medicalProfiles} />
            <ProductFeaturesLTR image={Mockup1} title={'Upload, Manage & Share Medical Documents'} description={'A centralized hub for storing and managing medical documents with easy sharing options. Ensures secure and organized access to essential files.'} features={medDocs} />
            <ProductFeaturesRTL image={Mockup2} title={'Multi-Lingual Prescriptions for Global Accessibility'} description={'Enable patients and doctors to generate and access prescriptions in multiple languages for better communication and understanding.'} features={globalAccessibility} />
            <ProductFeaturesLTR image={Mockup3} title={'Daily Patient Vitals Tracking'} description={'Track key health indicators daily to monitor progress and detect potential risks early. Helps in proactive healthcare management.'} features={vitalTracking} />
            <ProductFeaturesRTL image={Mockup4} title={'Comprehensive Patient History & Reports'} description={'Maintain a complete, chronological medical history with detailed reports for better diagnosis and treatment planning.'} features={historyReports} />
            <ProductFeaturesLTR image={Mockup5} title={'Generate & View Medical Certificates'} description={'Quickly create, manage, and verify medical certificates in a structured and standardized format. Ensures authenticity and compliance.'} features={medCertificates} />
            <ProductFeaturesRTL image={Mockup6} title={'Role-Based Access for Secure Data Handling'} description={'Ensure sensitive medical information is accessible only to authorized users through secure, role-based permissions.'} features={dataHandling} />
            <Working />
            <RequestAppointment image={Mockup7} title={'A secure, intelligent EMR system designed for efficient patient management.'} isHeadAvailable={true} />
        </>
    )
}

function ProductHero() {
    return (
        <section className="bg-gradient-to-r from-[#155799] to-[#159957] mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">Electronic Medical Records<br /> (EMR) & Patient Data</h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-100">A secure, intelligent EMR system designed<br /> for efficient patient management.</p>
                <button className="w-1/3 inline-flex text-center items-center text-green-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Schedule a Demo</button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img src={HeroImage} className="object-cover object-center rounded" alt="" />
            </div>
        </section>
    )
}