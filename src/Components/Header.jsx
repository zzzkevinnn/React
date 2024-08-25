  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Header({
    headerTitle,
    headerDesc,
  }) {
    return (
    <div className="relative isolate py-20 lg:py-48">
        {/* Background */}
       
        
        {/* Content */}
        <div className="mx-auto container px-10">
            <div>
                <h2 className="text-4xl font-bold text-white">{headerTitle}</h2>
                <p className=" text-lg text-gray-300">
                {headerDesc}
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
                {stats.map((stat) => (
                    <div key={stat.name} className="">
                        <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        <p className="text-base text-gray-300">{stat.name}</p>
                    </div>
                ))}
            </div>

          
        </div>
    </div>
    )
  }
  