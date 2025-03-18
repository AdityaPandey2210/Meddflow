import { teamMembers, valueTiles } from "./values";
import AboutImage from "../assets/about.jpg";
import AboutImage1 from "../assets/about2.jpg";
import AboutImage2 from "../assets/about3.png";
import AboutImage3 from "../assets/about4.jpg";
import { HeroSection, TeamTile, ValueTile } from "./widgets";

export function About() {
    return (
        <>
            <HeroSection image={AboutImage} title={'Digital Transformation'} description={'Future-proof your healthcare system with cutting-edge technology.'} />
            <Story />
            <Mission />
            <Team />
            <Values />
        </>
    );
}

function Story() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" src={AboutImage2} alt="" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Story</span></h1>
                    <p className="mb-8 leading-relaxed">Our journey began with a simple yet powerful vision: to bridge the gap between healthcare and technology. We recognized the challenges healthcare providers face in managing patient data, automating workflows, and ensuring secure access to medical records. With a team of experts in healthcare technology, we set out to develop smart, scalable, and compliant digital solutions that simplify operations and improve patient outcomes.<br />Over the years, we have worked closely with hospitals, clinics, and healthcare organizations, providing them with customized digital solutions that integrate seamlessly into their existing systems. Today, we continue to innovate, helping healthcare providers worldwide adopt technology-driven approaches to enhance efficiency and care delivery.</p>
                </div>
            </div>
        </section>
    )
}
function Mission() {
    return (
        <section className="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Mission</span></h1>
                <p className="mb-8 leading-relaxed">Our mission at Meddflow is to revolutionize healthcare through cutting-edge digital solutions that enhance efficiency, security, and patient care. We strive to empower healthcare providers with seamless technology that simplifies workflows and improves decision-making. By integrating AI, automation, and cloud-based solutions, we ensure secure and scalable healthcare management.</p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-96">
                <img className="h-full object-cover object-center rounded" src={AboutImage1} alt="" />
            </div>
        </section>
    )
}

function Team() {
    return (
        <section className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-gray-900">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Leadership</span></h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
            </div>
            <div className="flex flex-wrap -m-4">{teamMembers.map(((member, index) => (
                <TeamTile key={index} image={member.image} name={member.name} title={member.title} bio={member.bio} facebook={member.facebook} insta={member.insta} linkedin={member.linkedin} />)
            ))}
            </div>
        </section>
    )
}

function Values() {
    return (
        <section className="relative w-full px-5 py-24 mx-auto">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${AboutImage3})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#155799]/85 to-[#159957]/85"></div>
            <div className="relative z-10 flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-white">Our Core Values</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-white">We revolutionize digital healthcare with secure, scalable solutions that enhance patient care, streamline workflows, and optimize data management.</p>
            </div>
            <div className="relative z-10 flex flex-wrap -m-4 text-center">
                {valueTiles.map((value, index) => (<ValueTile key={index} heading={value.heading} description={value.description} icon={value.icon} />))}
            </div>
        </section>
    )
}