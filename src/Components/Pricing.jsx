import React from 'react';

export default function Pricing({
  pricingTitle,
  pricingDesc,
  PricingButton
}) {
  const pricings = [
    {
      title: 'Judul boss',
      description: 'Deskripsi',
      priceLabel: 'Harga', 
      price: 'Rp100.000',
    },
    {
        title: 'Judul boss',
        description: 'Deskripsi',
        priceLabel: 'Harga', 
        price: 'Rp100.000',
    },
    {
        title: 'Judul boss',
        description: 'Deskripsi',
        priceLabel: 'Harga', 
        price: 'Rp100.000',
    },
    // Add more pricing items here following the same structure
  ];

  return (
    <div className="bg-yellow-50">
      <div className="container mx-auto px-10 py-20">

        {/* Header */}
        <div className="pb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 ">{pricingTitle}</h2>
          <p className="text-lg text-gray-600">{pricingDesc}</p>
        </div>

        {/* Pricing Grid */}
        {pricings.map((pricing, index) => (
           <div key={index} className='py-5'>
                <div className="grid lg:grid-cols-3 ring-1 rounded-3xl ring-gray-200 bg-white">

                    <div className="lg:col-span-2 p-5 lg:ps-20 text-center lg:text-start">
                        <div className="flex flex-col justify-center h-full">  {/* flexbox container */}
                        <h2 className="text-2xl font-bold text-gray-900">{pricing.title}</h2>
                        <p className="text-base text-gray-600">{pricing.description}</p>
                        </div>
                    </div>

                    <div className="text-center p-5 m-2 ring-1 ring-gray-200 rounded-3xl bg-gray-50">
                        <h2 className="text-base font-semibold text-gray-600">{pricing.priceLabel}</h2>
                        <p className="text-3xl font-bold text-gray-900">{pricing.price}</p>
                        <a href="#" className="block mt-6 bg-indigo-600 rounded-md w-full px-3 py-2 text-sm font-semibold text-white">{PricingButton}</a>
                    </div>

                </div>
            </div>
        ))}

      </div>
    </div>
  );
}
