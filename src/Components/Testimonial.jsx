export default function Testimonial({
    testimonialTitle,
    // testimonials,
}) {
    return(
        <div className="relative isolate overflow-hidden pt-10">
            {/* Background */}
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" 
            />

            {/* Content */}
            <div className="container mx-auto px-10">
                <h2 className="text-4xl font-bold text-center text-gray-900 py-3 mb-16">{testimonialTitle}</h2>
                {testimonials.map((tes,index)=>(
                <div key={index} className="">
                    <img 
                    src={tes.img}
                    alt=""
                    className="mx-auto" />
                    <p className="text-center text-lg font-semibold text-gray-900">{tes.content}</p>
                    <img 
                    src={tes.compImg}
                    alt="" 
                    className="mt-5 mx-auto rounded-full h-16" />
                    <p className="text-center font-semibold text-gray-900"> {tes.name} </p>
                    <p className="text-center text-base text-gray-600"> {tes.company} </p>
                    <hr className="my-5"/>
                </div>
                ))};
            </div>

        </div>
    );
};

const testimonials= [
    {
        name:       'Judith Smith',
        content:    'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        company:    'CEO of XYZ',
        img:        'https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg',
        compImg:    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
    {
        name:       'Alan Walker',
        content:    'lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        company:    'CEO of Alone',
        img:        'https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg',
        compImg:    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

    },
];