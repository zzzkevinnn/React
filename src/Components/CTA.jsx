export default function CTA({
    ctaTitle,
    ctaDesc,
    ctaButton1,
    ctaButton2,
    ctaImgSrc,
    ctaImgAlt

}) {
    return ( 
        <div className="bg-green-100">
            <div className="container mx-auto px-10 py-12 text-center grid grid-cols-1 lg:grid-cols-2">

                <div className="my-auto">
                    <div>
                        <h2 className="text-4xl font-bold">{ctaTitle}</h2>
                        <p className=" text-lg text-gray-900">{ctaDesc}</p>
                    </div>
                    
                    <div className="mt-6 flex justify-center items-center gap-x-6">
                        <a href="#" className="text-base font-semibold bg-indigo-600 rounded-md px-4 py-2.5 text-white">{ctaButton1}</a>
                        <a href="#"className="text-sm font-semibold text-gray-900">{ctaButton2}</a>
                    </div>
                </div>

                <div className="mt-10 lg:mt-0">
                    <img 
                    className="aspect-video"
                    src={ctaImgSrc}
                    alt={ctaImgAlt}
                    />
                </div>

            </div>
        </div>
     )
}

