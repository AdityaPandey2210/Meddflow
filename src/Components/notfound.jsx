export function PageNotFound() {
    return (
        <section className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
            <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium text-blue-500">404 error</p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
                <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>
                <div className="w-full pr-12 justify-start">
                    <button className="mt-5 flex items-center justify-center w-full px-5 py-2 text-sm text-gray-700 duration-200 border border-gray-400 rounded-lg gap-x-2 hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span>Take me Home</span>
                    </button>
                </div>
            </div>
            <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                <img className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover" src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
        </section>
    );
}