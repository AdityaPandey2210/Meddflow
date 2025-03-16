import { FAQs } from "./home";
import { service_ctas, workingSteps } from "./values";
import Service from '../assets/service.png';
import Service1 from '../assets/services1.png';
import { CTATile, HeroSection, WorkingSteps } from "./widgets";
import ServiceImage from '../assets/services.png';

export function Services() {
    return (
        <>
            <HeroSection image={ServiceImage} title={'Digital Transformation'} description={'Future-proof your healthcare system with cutting-edge technology.'} isButtonAvailable={true} />
            <ServiceCTA />
            <Working />
            <RequestAppointment />
            <FAQs />
        </>
    )
}

function ServiceCTA() {
    return (
        <section className="container px-5 py-28 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Our Healthcare <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Digital Solutions</span></h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {service_ctas.map((service, index) => <CTATile key={index} title={service.title} description={service.description} image={service.image} />)}
            </div>
        </section>
    )
}

function Working() {
    return (
        <div className="container px-6 py-20 mx-auto text-center">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">How it <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Works</span></h1>
                <p className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex justify-center mt-10">
                <img className="object-cover w-full h-108 rounded-xl lg:w-4/5" src={Service} alt='' />
            </div>
            <div class="py-5 flex flex-wrap sm:-m-4 -mx-4 -mb-10">
                {workingSteps.map((step, index) => (<WorkingSteps key={index} stepNo={index} icon={step.icon} title={step.title} description={step.description} />))}
            </div>
        </div>
    )
}

function RequestAppointment() {
    return (
        <section class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gradient-to-r from-[#159957] to-[#155799]">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" src={Service1} alt="" />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <p class="text-white text-lg">Future-proof your healthcare system with<br /> cutting-edge technology.</p>
                <h1 class="title-font sm:text-4xl text-3xl my-4 font-bold text-gray-200">Request Your Appointment</h1>
                <button class="w-3/4 mt-7 text-teal-700 bg-white border-0 py-2 focus:outline-none rounded-sm text-lg">Subscribe</button>
            </div>
        </section>
    )
}