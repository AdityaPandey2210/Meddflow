import { motion } from 'framer-motion';
import Service from '../assets/service.png';
import { useEffect, useRef, useState } from "react";
import { faqs, testimonials, workingSteps } from "./values";
import { Link } from "react-router-dom/cjs/react-router-dom";

export function CompanyList() {
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const logos = containerRef.current.querySelectorAll('.logo-item');
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            containerRef.current.appendChild(clone);
        });
        containerRef.current.classList.add('animate-carousel');
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#159957] to-[#155799] py-6 overflow-hidden">
            <div className="max-w-screen-xl mx-auto relative">
                <div ref={containerRef} className="flex items-center logo-container" style={{ whiteSpace: 'nowrap', }}>
                    <div className="logo-item px-8">
                        <svg className="h-12 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 100">
                            <svg className="h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 100"><path fill="none" d="M0 0h266v100H0z"></path><path d="M140.021 49.597c-1.784 0-3.07.585-4.374 1.181v13.486c1.249.119 1.965.119 3.15.119 4.282 0 4.869-1.961 4.869-4.699v-6.441c0-2.022-.671-3.646-3.645-3.646zm-28.438-.736c-2.971 0-3.649 1.631-3.649 3.651v1.135h7.294v-1.135c0-2.02-.678-3.651-3.645-3.651zm-55.09 14.037c0 1.598.754 2.428 2.418 2.428 1.785 0 2.842-.582 4.145-1.18v-3.199h-3.903c-1.848 0-2.66.344-2.66 1.951zm111.191-13.301c-2.976 0-4.007 1.624-4.007 3.646v7.379c0 2.027 1.031 3.656 4.007 3.656 2.968 0 4.007-1.629 4.007-3.656v-7.379c-.001-2.022-1.04-3.646-4.007-3.646zM41.909 71.172h-8.748V49.998H28.79v-7.296h4.372V38.32c0-5.953 2.467-9.492 9.479-9.492h5.838v7.298H44.83c-2.73 0-2.91 1.02-2.91 2.923l-.011 3.652h6.61l-.773 7.296h-5.837v21.175zm29.897.055h-7.291l-.315-1.844c-3.329 1.844-6.3 2.143-8.26 2.143-5.347 0-8.193-3.572-8.193-8.512 0-5.828 3.321-7.908 9.262-7.908h6.047v-1.26c0-2.975-.341-3.848-4.916-3.848h-7.48l.731-7.296h8.176c10.038 0 12.239 3.171 12.239 11.203v17.322zm24.793-20.694c-4.537-.778-5.84-.949-8.023-.949-3.921 0-5.106.865-5.106 4.195v6.299c0 3.33 1.185 4.199 5.106 4.199 2.183 0 3.486-.174 8.023-.955v7.117c-3.974.891-6.563 1.125-8.751 1.125-9.392 0-13.125-4.939-13.125-12.074v-5.111c0-7.141 3.733-12.089 13.125-12.089 2.188 0 4.777.235 8.751 1.13v7.113zm27.376 8.957h-16.042v.588c0 3.33 1.186 4.199 5.106 4.199 3.524 0 5.675-.174 10.204-.955v7.117c-4.368.891-6.644 1.125-10.929 1.125-9.393 0-13.128-4.939-13.128-12.074v-5.844c0-6.243 2.771-11.356 12.396-11.356s12.393 5.054 12.393 11.356v5.844zm28.437.135c0 6.896-1.971 11.926-13.911 11.926-4.312 0-6.841-.379-11.6-1.111V31.02l8.745-1.459V43.35c1.89-.702 4.336-1.059 6.562-1.059 8.746 0 10.203 3.921 10.203 10.222v7.112zm28.033.15c0 5.949-2.456 11.719-12.732 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.276 0 12.732 5.771 12.732 11.723v5.744zm28.014 0c0 5.949-2.459 11.719-12.733 11.719-10.281 0-12.783-5.77-12.783-11.719v-5.744c0-5.952 2.502-11.723 12.783-11.723 10.274 0 12.733 5.771 12.733 11.723v5.744zm28.749 11.397h-9.479l-8.017-13.383v13.383h-8.748V31.019l8.748-1.459v25.849l8.017-12.707h9.479l-8.752 13.867 8.752 14.603zm-41.512-21.575c-2.971 0-4.002 1.624-4.002 3.646v7.379c0 2.027 1.031 3.656 4.002 3.656 2.967 0 4.017-1.629 4.017-3.656v-7.379c0-2.022-1.05-3.646-4.017-3.646zm46.505 16.581c1.473 0 2.646 1.201 2.646 2.701 0 1.523-1.174 2.711-2.657 2.711-1.476 0-2.673-1.188-2.673-2.711 0-1.5 1.197-2.701 2.673-2.701h.011zm-.011.42c-1.187 0-2.158 1.021-2.158 2.281 0 1.283.972 2.291 2.169 2.291 1.198.012 2.155-1.008 2.155-2.279s-.957-2.293-2.155-2.293h-.011zm-.503 3.853h-.48v-3.014c.252-.035.492-.07.852-.07.456 0 .754.096.937.227.177.133.272.336.272.623 0 .398-.262.637-.585.734v.023c.263.049.442.287.503.73.07.469.143.648.19.746h-.503c-.071-.098-.144-.373-.204-.77-.07-.383-.264-.527-.648-.527h-.333v1.298zm0-1.668h.348c.394 0 .729-.145.729-.518 0-.264-.19-.527-.729-.527-.157 0-.266.012-.348.023v1.022z"></path></svg>
                        </svg>
                    </div>
                    <div className="logo-item px-8">
                        <svg className="h-8 mt-2 fill-current text-white" viewBox="0 0 398 120" xmlns="http://www.w3.org/2000/svg">
                            <svg className="h-5 mt-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3"><g><path className="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path></g></svg>
                        </svg>
                    </div>
                    <div className="logo-item px-8">
                        <svg className="h-5 mt-1 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3">
                            <svg className="h-5 mt-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3"><g><path className="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path></g></svg>
                        </svg>
                    </div>
                    <div className="logo-item px-8">
                        <svg className="h-8 mt-2 fill-current text-white" viewBox="0 0 398 120" xmlns="http://www.w3.org/2000/svg">
                            <svg className="h-8 mt-2 fill-current" viewBox="0 0 398 120" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M247.292 94.106C224.124 111.016 190.526 120 161.608 120c-40.544 0-77.046-14.822-104.673-39.476-2.164-1.936-.235-4.583 2.369-3.082 29.806 17.15 66.66 27.475 104.731 27.475 25.677 0 53.906-5.271 79.884-16.163 3.923-1.646 7.21 2.545 3.373 5.352"></path><path d="M256.533 82.534c-2.965-3.771-19.551-1.787-27.003-.897-2.254.277-2.605-1.692-.57-3.122 13.233-9.265 34.922-6.587 37.447-3.487 2.54 3.13-.666 24.802-13.073 35.147-1.91 1.59-3.718.744-2.877-1.357 2.782-6.952 9.04-22.505 6.076-26.284zM230.05 13.058V4.063c.015-1.378 1.04-2.29 2.291-2.283l40.493-.007c1.295 0 2.335.94 2.335 2.268v7.726c-.015 1.29-1.113 2.983-3.053 5.668l-20.97 29.843c7.78-.182 16.022.985 23.093 4.939 1.596.897 2.027 2.217 2.152 3.516v9.607c0 1.32-1.457 2.86-2.987 2.057-12.458-6.507-29-7.214-42.776.08-1.405.745-2.884-.765-2.884-2.086v-9.133c0-1.459.03-3.961 1.508-6.186l24.302-34.738h-21.162c-1.295 0-2.327-.927-2.342-2.276zM82.354 69.294H70.042c-1.171-.08-2.108-.956-2.203-2.072l.014-63.006c0-1.262 1.062-2.268 2.38-2.268L81.71 1.94c1.2.059 2.159.963 2.232 2.116v8.221h.234C87.163 4.326 92.8.613 100.39.613c7.708 0 12.539 3.713 15.98 11.664C119.361 4.326 126.14.613 133.393.613c5.175 0 10.804 2.123 14.251 6.893 3.916 5.311 3.111 12.993 3.111 19.755l-.015 39.764c0 1.255-1.061 2.262-2.379 2.262h-12.304c-1.23-.08-2.203-1.05-2.203-2.262l-.007-33.41c0-2.648.234-9.28-.344-11.796-.923-4.246-3.675-5.435-7.24-5.435-2.986 0-6.09 1.985-7.356 5.165-1.266 3.188-1.15 8.484-1.15 12.066v33.403c0 1.255-1.06 2.262-2.378 2.262h-12.297c-1.237-.08-2.21-1.051-2.21-2.262l-.015-33.41c0-7.025 1.142-17.362-7.59-17.362-8.858 0-8.506 10.074-8.506 17.362l-.007 33.403c-.022 1.276-1.084 2.283-2.401 2.283zm227.788-55.82c-9.084 0-9.662 12.328-9.662 20.017s-.117 24.131 9.545 24.131c9.545 0 10.006-13.262 10.006-21.345 0-5.303-.234-11.664-1.845-16.705-1.383-4.377-4.143-6.098-8.044-6.098zM310.025.613c18.284 0 28.173 15.647 28.173 35.533 0 19.222-10.92 34.468-28.173 34.468-17.933 0-27.712-15.647-27.712-35.132C282.305 15.86 292.2.612 310.025.612zm51.882 68.681h-12.275c-1.23-.08-2.211-1.05-2.211-2.261l-.015-63.028c.103-1.16 1.12-2.057 2.365-2.057l11.426-.008c1.076.059 1.961.788 2.188 1.766v9.636h.234c3.448-8.622 8.279-12.73 16.785-12.73 5.519 0 10.92 1.992 14.375 7.427C398 13.072 398 21.556 398 27.662v39.64c-.14 1.117-1.142 1.985-2.364 1.985h-12.349c-1.141-.073-2.064-.912-2.188-1.984V33.097c0-6.894.805-16.968-7.708-16.968-2.993 0-5.753 1.984-7.13 5.033-1.72 3.845-1.953 7.69-1.953 11.935v33.928c-.03 1.262-1.091 2.27-2.401 2.27zm-151.715-.16c-.813.73-1.991.78-2.913.284-4.092-3.385-4.824-4.953-7.064-8.177-6.756 6.864-11.543 8.921-20.305 8.921-10.372 0-18.438-6.376-18.438-19.134 0-9.965 5.424-16.742 13.139-20.061 6.683-2.925 16.023-3.458 23.167-4.253v-1.598c0-2.925.234-6.375-1.5-8.9-1.501-2.26-4.378-3.195-6.918-3.195-4.692 0-8.871 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262l-11.938-1.291c-1.01-.234-2.13-1.029-1.838-2.568C166.288 4.362 179.37 0 191.087 0c5.995 0 13.827 1.59 18.556 6.113 5.995 5.58 5.416 13.021 5.416 21.126v19.127c0 5.756 2.401 8.28 4.648 11.373.79 1.116.967 2.444-.036 3.26-2.518 2.102-6.983 5.968-9.443 8.15l-.036-.015zm-12.414-29.931v-2.656c-8.908 0-18.322 1.897-18.322 12.35 0 5.319 2.767 8.908 7.488 8.908 3.455 0 6.566-2.123 8.528-5.58 2.423-4.254 2.306-8.237 2.306-13.022zM48.72 69.133c-.813.73-1.991.781-2.913.285-4.092-3.385-4.824-4.953-7.064-8.177-6.763 6.864-11.55 8.921-20.305 8.921C8.06 70.162 0 63.786 0 51.028c0-9.965 5.417-16.742 13.139-20.061 6.683-2.925 16.015-3.458 23.16-4.253v-1.598c0-2.925.233-6.375-1.501-8.9-1.5-2.26-4.377-3.195-6.91-3.195-4.7 0-8.879 2.4-9.904 7.375-.212 1.11-1.024 2.204-2.137 2.262L3.91 21.367c-1.01-.234-2.13-1.029-1.845-2.568C4.81 4.362 17.89.007 29.615.007c5.995 0 13.827 1.59 18.556 6.113 5.995 5.581 5.416 13.022 5.416 21.126v19.128c0 5.755 2.401 8.28 4.648 11.372.79 1.116.967 2.444-.036 3.261-2.518 2.101-6.99 5.967-9.45 8.148l-.03-.021zm-12.422-29.93v-2.656c-8.908 0-18.32 1.897-18.32 12.35 0 5.319 2.766 8.908 7.487 8.908 3.462 0 6.573-2.123 8.528-5.58 2.422-4.254 2.305-8.237 2.305-13.022z"></path></g></svg>
                        </svg>
                    </div>
                    <div className="logo-item px-8">
                        <svg className="h-8 fill-current text-white" viewBox="0 0 2270 546" xmlns="http://www.w3.org/2000/svg">
                            <svg className="h-8 fill-current" viewBox="0 0 2270 546" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z" fillRule="nonzero"></path><path d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"></path></g></svg>
                        </svg>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .logo-container {
                    width: max-content;
                }
                
                @keyframes carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50%)); }
                }
                
                .animate-carousel {
                    animation: carousel 15s linear infinite;
                }
            `}</style>
        </div>
    );
}

export function FeatureTile({ title, description, icon, delay }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} viewport={{ margin: "-50px" }} className="p-4 md:w-1/4 flex flex-col text-center items-center">
            <motion.div className="w-20 h-20 inline-flex items-center text-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">{icon}</motion.div>
            <motion.div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
                <p className="leading-relaxed text-base">{description}</p>
            </motion.div>
        </motion.div>
    )
}

export function ContactTile({ heading, value, icon, delay }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border border-gray-400 px-4 py-6 rounded-lg">{icon}
                <h2 className="title-font font-medium text-3xl text-gray-900 mb-2">{heading}</h2>
                <p className="leading-relaxed">{value}</p>
            </div>
        </motion.div>
    )
}

export function HeroSection({ image, title, description, isButtonAvailable }) {
    return (
        <div className="relative w-full h-[35rem] overflow-hidden">
            <motion.div initial={{ scale: 1.1, opacity: 0.8 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute inset-0 bg-gradient-to-r from-[#155799]/65 to-[#159957]/65"></motion.div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <motion.h1 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-2 text-2xl font-bold text-white md:text-6xl">{title}</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="mt-3 text-md font-medium text-gray-200">{description}</motion.p>
                    {isButtonAvailable
                        ? <motion.button initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }} whileTap={{ scale: 0.95 }} className="mt-7 text-teal-700 bg-white border-0 py-2 px-12 focus:outline-none rounded text-lg">Subscribe to Us</motion.button>
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export function FooterSection({ list }) {
    return <ul className="space-y-2.5">{list.map((element, index) => (<li key={index}><Link to={`/${element.route}`} className="text-sm hover:text-blue-400">{element.title}</Link></li>))}</ul>

}

export function CTATile({ image, title, description, delay }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} viewport={{ margin: "-50px" }} className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <img className="object-cover object-center h-full w-full" src={image} alt="" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
            <p className="text-base leading-relaxed mt-2">{description}</p>
            <button className="mt-5 inline-flex items-center bg-gradient-to-r from-[#159957] to-[#155799] border-0 px-5 py-3 focus:outline-none rounded-lg text-white">Read More</button>
        </motion.div>
    )
}

export function Working() {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="container px-6 py-12 mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-lg mx-auto">
                <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-3xl font-semibold text-gray-800 lg:text-4xl">How it <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Works</span></motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</motion.p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex justify-center mt-10">
                <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} whileHover={{ scale: 1.02 }} className="object-cover w-full h-108 rounded-xl lg:w-4/5" src={Service} alt='' />
            </motion.div>
            <div className="py-5 flex flex-wrap sm:-m-4 -mx-4 -mb-10">{workingSteps.map((step, index) => (<WorkingSteps key={index} stepNo={index} icon={step.icon} title={step.title} description={step.description} delay={0.1 * index + 0.6} />))}</div>
        </motion.div>
    )
}

export function WorkingSteps({ stepNo, icon, title, description, delay }) {
    return (
        <div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} className="p-4 md:w-1/3 flex flex-col">
            <div className="px-2.5 flex justify-between">
                {icon} <h1 className="text-xl font-semibold p-2 text-end">{stepNo}</h1>
            </div>
            <hr className="mx-3" />
            <div className="text-start sm:mb-0 mb-6">
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
                <p className="text-base leading-relaxed mt-2">{description}</p>
            </div>
        </div>
    )
}

export function FAQs() {
    const contentRefs = useRef([]);
    const [openFAQ, setOpenFAQ] = useState(0);

    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, faqs.length);
    }, []);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="w-screen mx-auto py-8 sm:py-12 bg-gray-50 px-16 sm:px-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8 sm:mb-10">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-green-600 font-medium uppercase mb-1">FAQS</motion.p>
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-2xl sm:text-3xl font-bold">
                    <span className="text-gray-900">Explore </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]">Common Questions</span>
                </motion.h2>
            </motion.div>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * index }} whileHover={{ scale: 1.01 }} viewport={{ margin: "-50px" }} className="py-2 bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                        <motion.button whileTap={{ scale: 0.98 }} className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center focus:outline-none" onClick={() => toggleFAQ(index)}>
                            <span className="font-medium text-sm sm:text-base text-gray-900">{faq.question}</span>
                            <motion.span animate={{ rotate: openFAQ === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gray-400">
                                {openFAQ === index
                                    ? <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    : <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                }
                            </motion.span>
                        </motion.button>
                        <motion.div animate={{ maxHeight: openFAQ === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px", opacity: openFAQ === index ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                            <div ref={(el) => (contentRefs.current[index] = el)} className="px-4 sm:px-6 pb-3 sm:pb-4">
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return Array(rating).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        ));
    };

    const renderDots = () => {
        return testimonials.map((_, index) => <motion.button key={index} onClick={() => setCurrentIndex(index)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={`w-2.5 h-2.5 mx-1 rounded-full ${currentIndex === index ? "bg-teal-600" : "bg-gray-300"}`} aria-label={`Go to slide ${index + 1}`} />);
    };

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-center mb-12">
                    <span className="text-navy-900">See What </span>
                    <span className="bg-gradient-to-r from-[#159957] to-[#155799] text-transparent bg-clip-text">Our Users Say!</span>
                </motion.h2>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative overflow-hidden">
                    <motion.div animate={{ x: `-${currentIndex * 100}%` }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex">
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 * index }} className="w-full flex-shrink-0 px-4">
                                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }} className="md:w-2/3">
                                        <div className="relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-teal-600 mb-4" viewBox="0 0 975.036 975.036">
                                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                            </svg>
                                            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }} className="text-gray-700 text-lg pl-6 pr-4 relative z-10 mb-6">{testimonial.quote}</motion.p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-teal-600 mb-4 rotate-270" viewBox="0 0 975.036 975.036">
                                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                            </svg>
                                        </div>
                                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }} className="mt-6">
                                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                                            <p className="text-gray-600">{testimonial.title}</p>
                                            <div className="mt-2">{renderStars(testimonial.rating)}</div>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }} className="md:w-1/3 h-full mt-8 md:mt-0">
                                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="rounded-lg overflow-hidden shadow-lg">
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="w-full h-96 object-cover" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex justify-center mt-8">{renderDots()}</motion.div>
            </div>
        </motion.div>
    );
}

export function ProductFeaturesLTR({ image, title, description, features }) {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-8 leading-relaxed">{description}</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-start justify-between">
                    {features.map((feature, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }} className="px-1.5 md:w-1/3 flex items-start">
                            <i className="bi bi-check-circle-fill bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]"></i>
                            <h2 className="ml-1.5 text-md text-gray-900">{feature}</h2>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.05 }} src={image} className="object-cover object-center rounded" alt="" />
            </motion.div>
        </motion.section>
    )
}

export function ProductFeaturesRTL({ image, title, description, features }) {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.05 }} src={image} className="object-cover object-center rounded" alt="" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <motion.h1 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-8 leading-relaxed">{description}</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-start justify-between">
                    {features.map((feature, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }} className="px-1.5 md:w-1/3 flex items-start">
                            <i className="bi bi-check-circle-fill bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799]"></i>
                            <h2 className="ml-1.5 text-md text-gray-900">{feature}</h2>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export function RequestAppointment({ image, title, isHeadAvailable }) {
    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gradient-to-r from-[#159957] to-[#155799]">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <motion.img initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} whileHover={{ scale: 1.05 }} className="object-cover object-center rounded" src={image} alt="" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-2/3 text-white font-semibold text-2xl">{title}</motion.p>
                {isHeadAvailable
                    ? <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="title-font sm:text-4xl text-3xl my-4 font-bold text-gray-200">Request Your Appointment</motion.h1>
                    : <></>
                }
                <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }} whileTap={{ scale: 0.95 }} className="w-3/4 mt-7 text-teal-700 bg-white border-0 py-2 focus:outline-none rounded-sm text-lg">Subscribe</motion.button>
            </motion.div>
        </motion.section>
    )
}

export function TeamTile({ name, title, bio, image, facebook, insta, linkedin, delay }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
                <img className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4" src={image} alt='' />
                <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
                    <h3 className="text-gray-500 mb-3">{title}</h3>
                    <p className="mb-4">{bio}</p>
                    <span className="inline-flex">
                        <a className="text-gray-500" href={facebook}><i className="bi bi-facebook"></i></a>
                        <a className="ml-2.5 text-gray-500" href={insta}><i className="bi bi-instagram"></i></a>
                        <a className="ml-2.5 text-gray-500" href={linkedin}><i className="bi bi-linkedin"></i></a>
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export function ValueTile({ icon, heading, description, delay }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: delay }} className="p-4 md:w-1/4 sm:w-1/2 w-full h-64">
            <div className="bg-white px-4 py-6 rounded-xl h-full">
                {icon}
                <h2 className="title-font font-bold text-xl text-black">{heading}</h2>
                <p className="mt-2 text-md text-gray-900">{description}</p>
            </div>
        </motion.div>
    )
}

export function WhyJoinUs({ number, title, isPercentage }) {
    return (
        <div className="p-0.5 bg-gradient-to-r from-[#159957] to-[#155799] rounded-lg h-40">
            <div className="w-full h-full items-center text-center justify-center bg-white rounded-lg flex flex-col">
                <i className="bi bi-person-check-fill bg-clip-text text-transparent bg-gradient-to-r from-[#159957] to-[#155799] text-4xl"></i>
                <h1 className="mt-2 text-2xl font-bold">{number} {isPercentage ? '%' : '+'}</h1>
                <h2 className="mt-1 w-4/5 font-medium">{title}</h2>
            </div>
        </div>
    )
}