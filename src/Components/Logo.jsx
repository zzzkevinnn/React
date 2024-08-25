export default function Logo({
  logoTitle,
  logos,
  logosContent,
}) {
    return (
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-10 ">
  
          <h1 className="text-4xl text-center mb-12 font-bold">{logoTitle}</h1>
         
            <ul className="grid grid-cols-1 md: grid-cols-3 xl:grid-cols-4  gap-12 ">
                {logos.map((logo, index)=>(
                  <li key={index} className="flex justify-center flex-col">
                    <img 
                    className="flex justify-center rounded-full "
                    src={logo.img} alt="" />
                    <p className="text-center pt-5 font-semibold">{logo.title}</p>
                    <p className="text-center ">{logo.desc}</p>
                  </li>
                ))}
                
            </ul>
        </div>
  
      </div>
    )
  }
  
  