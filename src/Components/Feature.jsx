export default function Feature({
  featureHeader,
  featureTitle,
  featureDesc,
  features
}) {
    return (
      <div className="bg-purple-100">
        <div className="container mx-auto px-10 py-24 text-center ">
            
            <div>
                <p className="text-indigo-600 font-semibold">{featureHeader}</p>
                <h1 className="text-4xl font-bold text-gray-900">{featureTitle}</h1>
                <p className="mt-6 text-lg text-gray-600">{featureDesc}</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 xl:gap-x-40">
                {features.map((feature,index) => (
                    <div key={index} className="py-5">
                        <h2 className=" text-xl font-semibold text-gray-900 text-start underline"> {feature.name} </h2>
                        <p className=" text-base text-gray-600 text-justify"> {feature.desc} </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    )
  }

  