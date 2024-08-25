export default function Newsletter({
    newsletterMainTitle,
    newsletterMainDesc,
    newsletterButton,
    newsletterTitle1,
    newsletterDesc1,
    newsletterTitle2,
    newsletterDesc2
}) {
    return(
        <div className="bg-gray-900 py-32 relative isolate overflow-hidden">
            {/* Background gradient */}
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    />
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-10">
                
                <div className="text-center">
                    {/* Grid 1 */}
                    <div className="pe-20 mx-auto ">
                        <h2 className="text-4xl font-bold text-white mb-5">{newsletterMainTitle}</h2>
                        <p className="text-lg text-gray-300 text-center">{newsletterMainDesc}</p>
                        <div className="mt-10">
                            <input 
                            type="email"
                            id="email-adress"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your email address"
                            className="rounded-md bg-white/5 px-3 py-1.5 text-white ring-1 ring-white/4"
                            />
                            
                            <button
                            type="submit"
                            className="px-3 py-2 ms-3 text-white bg-indigo-500 rounded-md"
                            >Subscribe</button>
                        </div>                   
                    </div>

                    {/* grid 2 */}
                    {/* <div className="grid grid-cols-2 gap-10 mt-10 lg:mt-0 lg:ps-20">
                        <div className="">
                            <h2 className="text-white font-semibold text-xl">{newsletterTitle1}</h2>
                            <p className="text-gray-300 text-base mt-1 text-justify">{newsletterDesc1}</p>
                        </div>
                        <div className="">
                            <h2 className="text-white font-semibold text-xl">{newsletterTitle2}</h2>
                            <p className="text-gray-300 text-base mt-1 text-justify">{newsletterDesc2}</p>
                        </div>
                    </div>                 */}
                </div>
            </div>
        </div>
    );
};