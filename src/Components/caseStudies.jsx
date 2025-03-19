import Mockup from '../assets/product8.png';
import { metrics, overviewImpact } from './values';
import CaseStudyHero from '../assets/caseStudy.jpg';
import { FAQs, HeroSection, RequestAppointment, Testimonials } from "./widgets";

export function CaseStudies() {
    return (
        <>
            <HeroSection image={CaseStudyHero} title={'Case Studies'} description={'Explore how our digital healthcare solutions have improved patient care, streamlined operations, and enhanced efficiency across various healthcare providers.'} isButtonAvailable={false} />
            <ImpactOverview />
            <Testimonials />
            <Metrics />
            <RequestAppointment image={Mockup} title={'Ready to transform your healthcare operations? Contact us to learn how our digital solutions can help your organization thrive.'} />
            <FAQs />
        </>
    )
}

function ImpactOverview() {
    const OverviewTile = ({ image, title, description }) => {
        return (
            <div className="px-2.5 py-2.5 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border rounded hover:text-white hover:bg-gradient-to-t from-[#159957] to-[#155799]">
                    <img className="w-full h-48 bg-gray-100 object-cover object-center flex-shrink-0 rounded rounded-b-none" src={image} alt='' />
                    <div className="p-7 flex-grow text-start">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-sm">{description}</p>
                        <button className='mt-3'>Read More <i className="bi bi-chevron-right text-sm"></i></button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Overview of<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]"> Our Impact</span></h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
            </div>
            <div className="flex flex-wrap">
                {overviewImpact.map((overview, index) => (<OverviewTile key={index} image={overview.image} title={overview.title} description={overview.description} />))}
            </div>
        </section>
    )
}

function Metrics() {
    const MetricTile = ({ percentage, heading }) => {
        return (
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full items-center justify-center text-center">
                <div className="w-full h-40 px-4 py-6 rounded-lg">
                    <h2 className="ml-6 title-font font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">{percentage}<span className='text-4xl font-bold'> %</span></h2>
                    <p className="mt-3 items-center">{heading}</p>
                </div>
            </div>
        )
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Key Outcomes <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">& Metrics</span></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    {metrics.map((metric, index) => <MetricTile key={index} percentage={metric.percentage} heading={metric.heading} />)}
                </div>
            </div>
        </section>
    )
}