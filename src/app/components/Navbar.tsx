"use client"

import React,{useState} from 'react'
import NavbarLinks from './NavbarLinks'
import Image from 'next/image'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <nav>
        <div className='pl-6 p-3 flex justify-between items-center bg-[#85A98F]'>
            {
                isMenuOpen ? "" : <div className='text-3xl font-bold text-white'>
                <Image src="/images/burger-logo-.png" alt="logo" height={80} width={80}
                className='w-[80px] h-[80px] md:w-[110px] '/>
                
                </div>
            }
      

{/* desktop Navbar */}
<div>
<ul className='md:flex justify-center hidden  items-center  md:gap-7 md:flex-row  bg-white text-black md:bg-transparent text-2xl md:text-white md:h-14 p-3'>
    <li>
    <NavbarLinks href='/home' title='Home'/> </li>
   <li> <NavbarLinks href='/about' title='About'/> </li>
   <li>  <NavbarLinks href='/products' title='products'/></li>
   <li> <NavbarLinks href='/contact' title='Contact'/> </li>
</ul>
</div>


{/* mobile Navbar */}

<div className=" md:hidden float-right ">
  
{isMenuOpen ? 
 <Image src="/images/close.png" alt="close" height={120} width={120} className='absolute top-[0.5rem] right-[1rem]' onClick={toggleMenu} />
  :
    <Image src="/images/burger-icon.png" alt="burger" height={60} width={60}
    className="mr-5" onClick={toggleMenu} /> 
   }
  

</div>

{isMenuOpen &&
<ul className='flex flex-col mx-auto items-center md:hidden rounded-lg  text-white text-2xl h-auto max-w-full p-6 gap-5 '>
    <li>
    <NavbarLinks href='/home' title='Home'/> </li>
   <li> <NavbarLinks href='/about' title='About'/> </li>
   <li>  <NavbarLinks href='/products' title='products'/></li>
   <li> <NavbarLinks href='/contact' title='Contact'/> </li>
</ul>
}
</div>     
    </nav>
  )
}

export default Navbar