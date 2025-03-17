import { service_ctas } from "./values";
import Service1 from '../assets/services1.png';
import ServiceImage from '../assets/services.png';
import { CTATile, FAQs, HeroSection, RequestAppointment, Working } from "./widgets";

export function Services() {
    return (
        <>
            <HeroSection image={ServiceImage} title={'Digital Transformation'} description={'Future-proof your healthcare system with cutting-edge technology.'} isButtonAvailable={true} />
            <ServiceCTAs />
            <Working />
            <RequestAppointment image={Service1} title={'Future-proof your healthcare system with cutting-edge technology.'} />
            <FAQs />
        </>
    )
}

function ServiceCTAs() {
    return (
        <section className="container px-5 pt-28 pb-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Our Healthcare <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Digital Solutions</span></h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div className="flex flex-wrap sm:m-4 mx-4">
                {service_ctas.map((service, index) => <CTATile key={index} title={service.title} description={service.description} image={service.image} />)}
            </div>
        </section>
    )
}
