import React from 'react'
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobile } from 'react-icons/fa6';


const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Services",
        link: "/services",
    },
    {
        title: "Contact",
        link: "/contact",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* company detail */}
            <div className='py-8 px-4'>
                <a href="#"
                className='text-primary font-bold 
                tracking-widest text-2xl uppercase sm:text-3xl'>
                    Eshop
                </a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className='text-gray-500 mt-4'>
                    Made with ❤️ by Pornpapat Dps
                </p>
            </div>
            {/* Footer links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                <div className="py-8 px-4">
                    <h1 className="text-lg font-bold
                    sm:text-left mb-3
                    ">Important Links</h1>
                    <ul className='space-y-2 '>
                        {FooterLinks.map((data, index) => (
                            <li key={index} className='py-1'>
                                <a href={data.link}
                                className='text-gray-600 dark:text-gray-400 
                                hover:dark:text-white
                                 hover:text-black duration-300'>
                                    {data.title}
                                </a>    
                            </li>
                        ))}
                    </ul>
                </div>
                {/* second col links */}
                <div className="py-8 px-4">
                    <h1 className="text-lg font-bold
                    sm:text-left mb-3
                    ">Quick Links</h1>
                    <ul className='space-y-2 '>
                        {FooterLinks.map((data, index) => (
                            <li key={index} className='py-1'>
                                <a href={data.link}
                                className='text-gray-600 dark:text-gray-400 
                                hover:dark:text-white
                                 hover:text-black duration-300'>
                                    {data.title}
                                </a>    
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Comany Address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'> 
            <h1 className="text-lg font-bold
                    sm:text-left mb-3
                    ">Address</h1>
                <div>
                    <div className='flex items-center gap-2'>
                        <FaLocationArrow/>
                        <p className='text-gray-600 dark:text-gray-400'>
                            123 Lorem Ipsum, Dolor Sit Amet, 12345 </p>
                    </div>
                    <div className='flex items-center gap-2 mt-6'>
                        <FaMobileAlt />
                        <p className='text-gray-600 dark:text-gray-400'>
                            0000000000 </p>
                    </div>
                </div>
                {/*social media*/ }
                <div className='flex items-center gap-2 mt-6'>
                    <a href="#">
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                        <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                    </a>
                </div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer;
