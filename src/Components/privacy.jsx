import { HeroSection } from "./widgets";
import { policyTopics } from "./values";
import Image from '../assets/privacy.jpg';
import { useEffect, useRef, useState } from "react";

export function Privacy() {
    return (
        <>
            <HeroSection image={Image} title={'Privacy Policy'} description={'Last Edited: March 17, 2025.'} />
            <Policies />
        </>
    );
}

function Policies() {
    const [activeSection, setActiveSection] = useState('introduction');
    const sectionRefs = {
        introduction: useRef(null),
        infoCollection: useRef(null),
        infoUsage: useRef(null),
        dataSharing: useRef(null),
        international: useRef(null),
        childPrivacy: useRef(null),
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        for (const section of policyTopics) {
            const element = sectionRefs[section.id].current;
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);//eslint-disable-next-line
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-screen w-screen flex items-center">
            <div className="w-1/5 h-full border-r border-gray-300 p-6 overflow-y-auto">
                <ul className="space-y-3 h-full justify-center">
                    {policyTopics.map((topic) => <li key={topic.id} className={`cursor-pointer p-2 rounded transition-colors ${activeSection === topic.id ? 'font-bold' : 'hover:bg-gray-100'}`} onClick={() => scrollToSection(topic.id)}>{topic.title}</li>)}
                </ul>
            </div>
            <div className="w-4/5 h-full overflow-y-auto py-8">
                <div className="max-w-3xl mx-auto">
                    <Introduction ref={sectionRefs.introduction} />
                    <Information ref={sectionRefs.infoCollection} />
                    <InfoUsage ref={sectionRefs.infoUsage} />
                    <DataSharing ref={sectionRefs.dataSharing} />
                    <International ref={sectionRefs.international} />
                    <ChildPrivacy ref={sectionRefs.childPrivacy} />
                </div>
            </div>
        </div>
    );
}

function Introduction({ ref }) {
    return (
        <section ref={ref} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">At Meddflow, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our services.</p>
        </section>
    )
}

function Information({ ref }) {
    return (
        <section ref={ref} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Personal Information: Name, email address, contact details, and any other information you provide when creating an account or contacting us.</li>
                <li className="mb-2">Usage Data: Information about how you interact with our services, including IP address, browser type, pages visited, and time spent on our site.</li>
            </ul>
        </section>
    )
}

function InfoUsage({ ref }) {
    return (
        <section ref={ref} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Provide and improve our services.</li>
                <li className="mb-2">Communicate with you regarding updates, promotions, or changes to our services.</li>
                <li className="mb-2">Ensure compliance with legal obligations and protect against fraudulent activities.</li>
            </ul>
        </section>
    )
}

function DataSharing({ ref }) {
    return (
        <section ref={ref} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="mb-4">We collect certain information when you use our application. This may include:</p>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Personal information such as name, email address, and contact details</li>
                <li className="mb-2">Usage data including how you interact with our application</li>
                <li className="mb-2">Device information such as IP address, browser type, and operating system</li>
            </ul>
        </section>
    )
}

function International({ ref }) {
    return (
        <section ref={ref} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p className="mb-4">Our information may be transferred to and processed in countries other than your own. We ensure that<br /> such transfers comply with applicable data protection laws.</p>
        </section>
    )
}
function ChildPrivacy({ ref }) {
    return (
        <section ref={ref} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="mb-4">Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children without parental consent. We may update this Privacy Policy periodically. We encourage you to review this page regularly for any changes. Continued use of our services after modifications constitutes acceptance of the updated policy.</p>
        </section>
    )
}