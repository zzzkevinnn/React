

export default function Stats({
    statsTitle,
    stats
}) {
    return(
        <div className="bg-purple-100">
            <div className="container mx-auto px-10 py-20 text-center">

                <h2 className="text-3xl font-bold text-gray-900 mb-10">
                    {statsTitle}
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat,index)=>(
                        <div key={index} className="ring-1 rounded-md ring-black p-5">
                            <h2 className="text-3xl font-semibold text-gray-900"> {stat.value} </h2>
                            <p className="text-base text-gray-600"> {stat.name} </p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};