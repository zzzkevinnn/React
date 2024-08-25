import { useState } from "react";

export default function NavBasic() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
      "Home",
      "About",
      "Content",
  ];

  return (
    <div className="">
      <div className='flex justify-between items-center px-10 lg:px-20 py-5 bg-gray-50'>
        {/* Judul */}
        <div>
          <img
            alt=""
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-12 w-auto"
          />
        </div>

        {/* Nav Bar */}
        <ul
          className='lg:flex hidden'
        >
          {navItems.map((navitem,index) =>  
            <li 
              key={index} 
              className='px-3 py-2 text-lg font-semibold text-gray-900 hover:shadow-md hover:cursor-pointer '
            >
              {navitem}
            </li>
         
        )}
        </ul>
        
        {/* Button Hamburger */}
        <div className='lg:hidden' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:shadow-xl hover:cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
      
      {/* Navbar Block */}
      <ul
        className={`text-center bg-gray-50 py-10
        ${isDropdownOpen ? 'block' : 'hidden'} lg:hidden`}
      >   
          {navItems.map((navitem, index) =>
            <li 
              key={index} 
              className='px-3 py-2 text-lg font-semibold text-gray-900 hover:shadow-md hover:cursor-pointer'
            >
              {navitem}
            </li>
          
          )}
      </ul>
    </div>
  );
}