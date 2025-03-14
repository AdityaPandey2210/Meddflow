import { useState } from "react";
import Logo from '../assets/logo_full.png';
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

export function Header() {
    const history = useHistory();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const buttonNavigate = () => { history.push('/contact'); }
    return (
        <header className={`relative p-7`}>
            <div className="mx-auto flex justify-between items-center">
                <Link to="/"><img className="w-auto h-10" src={Logo} alt="" /></Link>
                <div className="hidden md:flex items-center">
                    <Link to="/product" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Product</Link>
                    <Link to="/" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Resources</Link>
                    <Link to="/" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Download</Link>
                    <Link to="/pricing" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Pricing</Link>
                    <button onClick={buttonNavigate} className="inline-flex items-center bg-gradient-to-r from-[#159957] to-[#155799] border-0 px-5 py-3 focus:outline-none rounded-lg text-white mt-4 md:mt-0">Contact Us</button>
                </div>
                <div className="md:hidden">
                    <button type="button" className="text-gray-500 hover:text-black focus:outline-none focus:text-black" aria-label="toggle menu" onClick={toggleMenu}>
                        {isMenuOpen
                            ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" /></svg>
                        }
                    </button>
                </div>
            </div>
            <div className={`md:hidden absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100 bg-white' : 'opacity-0 -translate-x-full'}`}>
                <div className="flex flex-col px-2 -mx-4">
                    <Link to="/product" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Product</Link>
                    <Link to="/" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Resources</Link>
                    <Link to="/" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Download</Link>
                    <Link to="/pricing" className={`px-2.5 py-2 text-lg transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-black md:mx-2`}>Pricing</Link>
                    <button onClick={buttonNavigate} className="inline-flex items-center bg-gradient-to-r from-[#159957] to-[#155799] border-0 px-5 py-3 focus:outline-none rounded-lg text-white mt-4 md:mt-0">Contact Us</button>
                </div>
            </div>
        </header>
    );
}