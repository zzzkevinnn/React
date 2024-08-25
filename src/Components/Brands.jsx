export default function Brands({
  brandTitle,
  brands,
  
}) {
    return (
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-10 ">
  
          <h1 className="text-4xl text-center mb-12">{brandTitle}</h1>
         
            <ul className="grid grid-cols-1 md: grid-cols-2 xl:grid-cols-6  gap-12 ">
                {brands.map((brand, index)=>(
                  <li key={index} className="flex justify-center flex-col">
                    <img 
                    className="flex justify-center  aspect-square py-10"
                    src={brand} alt="" />
                  </li>
                ))}
                 
            </ul>
        </div>
  
      </div>
    )
  }
  
  