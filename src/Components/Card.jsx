export default function Card({
    cardHead,
    cardJudul,
    cardDesc,
    cardImgSrc,
    cardImgAlt
}){
    return(
        <div className="bg-gray-900">
            <div className="container mx-auto py-20 px-10 text-center">
                <h1 className="text-indigo-400 pb-2">{cardHead}</h1>
                <h1 className="text-3xl text-white pb-8 font-semi-bold">{cardJudul}</h1>
                <div className="inline-block mx auto">
                    <p className="text-white text-justify">
                    {cardDesc}
                    </p>
                </div>
                
            
                <div className="mt-10 ">
                    <img 
                    className="aspect-video rounded-md"
                    src={cardImgSrc}
                    alt={cardImgAlt}
                    />
                </div>
            </div>
        </div>
    )
}