import Image from '../assets/careers.jpg';

export function Careers() {
    return (
        <>
            <HeroSection />
        </>
    )
}

function HeroSection() {
    return (
        <div className="relative w-full h-[35rem] overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#155799]/65 to-[#159957]/65"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="mt-2 text-2xl font-bold text-white md:text-5xl">Careers</h1>
                    <p className="mt-3 text-md font-medium text-gray-200">Last Edited: March 17, 2025.</p>
                    <button className="mt-7 text-teal-700 bg-white border-0 py-2 px-12 focus:outline-none rounded text-lg">Get in Touch</button>
                </div>
            </div>
        </div>
    )
}