import { FooterSection } from './widgets';
import Logo from '../assets/logo_full.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { company, consulting, products, useCases } from './values';

export function Footer() {
    return (
        <footer className="bg-[#14191F] text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className="md:col-span-3">
                        <img src={Logo} alt="" className="h-8 mb-4" />
                        <p className="text-sm mb-6">228 Park Avenue South, NewYork, NY 10003</p>
                        <hr className='my-3' />
                        <div className="flex space-x-6 mb-6">
                            <Link to="/privacy" className="text-sm">Privacy</Link>
                            <Link to="/terms" className="text-sm">Terms</Link>
                        </div>
                        <div className="inline-flex">
                            <input type="text" placeholder="Your Email Address..." className="bg-white text-gray-400 px-4 py-2 rounded-l-md w-full border border-gray-300 focus:outline-none" />
                            <button className="bg-gradient-to-l from-[#159957] to-[#155799] text-white px-4 py-2 rounded-r-md whitespace-nowrap">Subscribe</button>
                        </div>
                        <div className="pt-5 flex space-x-4 mb-6">
                            <Link to="/" aria-label="Instagram"><i className="text-2xl bi bi-instagram"></i></Link>
                            <Link to="/" aria-label="X"><i className="text-2xl ml-2 bi bi-twitter-x"></i></Link>
                            <Link to="/" aria-label="LinkedIn"><i className="text-2xl ml-2 bi bi-linkedin"></i></Link>
                        </div>
                        <p className="text-sm text-gray-400">© 2025 Meddflow, Inc. All rights reserved</p>
                    </div>
                    <div className="flex-col">
                        <h3 className="text-lg font-medium mb-4 border-b border-[#159957] inline-block pb-1">Products</h3>
                        <FooterSection list={products} />
                        <div className='py-2.5'></div>
                        <h3 className="text-lg font-medium mb-4 border-b border-[#159957] inline-block pb-1">Use Cases</h3>
                        <FooterSection list={useCases} />
                    </div>
                    <div className="flex-col">
                        <h3 className="text-lg font-medium mb-4 border-b border-[#159957] inline-block pb-1">Consulting Services</h3>
                        <FooterSection list={consulting} />
                        <div className='py-2.5'></div>
                        <h3 className="text-lg font-medium mb-4 border-b border-[#159957] inline-block pb-1">Company</h3>
                        <FooterSection list={company} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
