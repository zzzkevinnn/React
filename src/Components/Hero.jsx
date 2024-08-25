export default function Hero({
  heroTitle,
  heroDesc,
  heroButton,
  heroButton2
}) {
  return (
     
        <div className="container mx-auto px-10 py-40 text-center">
          <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-900">
            {heroTitle}
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            {heroDesc}
          </p>
  
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
            >
              {heroButton}
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              {heroButton2}
            </a>
          </div>
          </div>
        </div>

    )
  }
  